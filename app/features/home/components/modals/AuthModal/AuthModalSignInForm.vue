<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'

const { defineField, handleSubmit, meta, errors } = useForm({
  validationSchema: toTypedSchema(
    v.object({
      email: v.pipe(v.string(), v.email()),
      password: v.pipe(
        v.string(),
        v.minLength(8, 'Пароль должен содержать минимум 8 символов')
      )
    })
  )
})

const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')

const isLoading = ref(false)
const errorMessage = ref('')

const { signIn } = useAuth()

const onSubmit = handleSubmit(async (values) => {
  if (isLoading.value) return

  try {
    errorMessage.value = ''

    isLoading.value = true

    await signIn(
      {
        email: values.email,
        password: values.password
      },
      {
        callbackUrl: '/profile'
      }
    )
  } catch (err: any) {
    if (err.response?.status === 401) {
      errorMessage.value = 'Неверный email или пароль'
    }
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <form class="flex flex-col gap-12" @submit="onSubmit">
    <div class="flex flex-col gap-4">
      <label
        class="text-11 font-semibold uppercase tracking-[0.02em] text-text-2"
      >
        Email
      </label>

      <input
        v-model="email"
        class="w-full px-12 h-38 rounded-10 border border-border bg-surface-2 text-text text-14 outline-hidden transition-colors duration-150 box-border focus:border-accent-green focus:bg-surface"
        :class="{ 'border-red-400!': meta.touched && errors.email }"
        placeholder="your@email.com"
        autocomplete="email"
        type="email"
        v-bind="emailProps"
      />
    </div>

    <div class="flex flex-col gap-4">
      <label
        class="text-11 font-semibold uppercase tracking-[0.02em] text-text-2"
      >
        Пароль
      </label>
      <div class="relative">
        <input
          v-model="password"
          class="w-full pl-12 pr-40 h-38 rounded-10 border border-border bg-surface-2 text-text text-14 outline-hidden transition-colors duration-150 box-border focus:border-accent-green focus:bg-surface"
          :class="{ 'border-red-400!': meta.touched && errors.password }"
          placeholder="Минимум 8 символов"
          autocomplete="new-password"
          type="password"
          v-bind="passwordProps"
        />

        <button
          type="button"
          tabindex="-1"
          class="absolute right-10 top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer text-text-3 flex items-center p-4 hover:text-text-2"
        >
          <svg
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
      </div>
    </div>

    <button
      type="submit"
      :disabled="isLoading"
      class="mt-6 flex items-center justify-center gap-8 w-full px-20 h-42 rounded-10 bg-accent-green text-white text-14 font-semibold cursor-pointer border-0 transition-opacity duration-150 hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-default"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        ></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>

      Войти
    </button>

    <p v-if="errorMessage" class="text-14 text-center text-accent-red-text">
      {{ errorMessage }}
    </p>
  </form>
</template>
