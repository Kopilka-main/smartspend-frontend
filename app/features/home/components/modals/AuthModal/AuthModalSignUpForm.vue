<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'

const { defineField, handleSubmit, meta, errors } = useForm({
  validationSchema: toTypedSchema(
    v.object({
      name: v.pipe(v.string()),
      email: v.pipe(v.string(), v.email()),
      password: v.pipe(
        v.string(),
        v.minLength(8, 'Пароль должен содержать минимум 8 символов')
      )
    })
  )
})

const [name, nameProps] = defineField('name')
const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')

const isLoading = ref(false)
const errorMessage = ref('')
const isPasswordVisible = ref(false)

const { signUp } = useAuth()

const onSubmit = handleSubmit(async (values) => {
  if (isLoading.value) return

  try {
    isLoading.value = true

    errorMessage.value = ''

    await signUp(
      {
        displayName: values.name,
        email: values.email,
        password: values.password
      },
      {
        callbackUrl: '/profile'
      }
    )
  } catch (err: any) {
    errorMessage.value = 'Возникла ошибка при регистрации.'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <form class="auth-form" @submit="onSubmit">
    <div class="auth-field">
      <label class="auth-label">Имя</label>

      <input
        :class="`auth-input${errors.name && meta.touched ? ' error' : ''}`"
        type="text"
        placeholder="Как вас зовут?"
      />

      <div v-if="errors.name && meta.touched" class="auth-field-error">
        {{ errors.name }}
      </div>
    </div>

    <div class="auth-field">
      <label class="auth-label">Email</label>

      <input
        v-model="email"
        :class="`auth-input${errors.email && meta.touched ? ' error' : ''}`"
        type="email"
        placeholder="your@email.com"
      />

      <div v-if="errors.email && meta.touched" class="auth-field-error">
        {{ errors.email }}
      </div>
    </div>

    <div class="auth-field">
      <label class="auth-label">Пароль</label>

      <div class="auth-pass-wrap">
        <input
          v-model="password"
          :class="`auth-input${errors.password && meta.touched ? ' error' : ''}`"
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="Минимум 8 символов"
        />

        <div v-if="errors.password && meta.touched" class="auth-field-error">
          {{ errors.password }}
        </div>

        <button
          type="button"
          class="auth-pass-toggle"
          @click="isPasswordVisible = !isPasswordVisible"
        >
          <svg
            v-if="isPasswordVisible"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"
            />
            <path
              d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"
            />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
          <svg
            v-else
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>
    </div>

    <button type="submit" :class="`auth-submit${isLoading ? ' loading' : ''}`">
      <span v-if="isLoading" class="auth-spinner" />

      <template v-else>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          />
          <polyline points="22,6 12,13 2,6" />
        </svg>

        Зарегистрироваться
      </template>
    </button>
  </form>
</template>
