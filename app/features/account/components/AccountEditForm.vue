<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'
import { useUpdateAccount } from '~/queries/useUpdateAccount'
import { formatDate } from '~/utils/formatDate'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { currentUser } = useCurrentUser()
const { mutate, isLoading } = useUpdateAccount(() => emit('close'))

const form = ref({
  displayName: currentUser.value?.displayName || '',
  bio: currentUser.value?.bio || '',
  username: currentUser.value?.username || ''
})

const onCancel = () => {
  emit('close')
}
</script>

<template>
  <div
    class="relative flex gap-28 rounded-14 bg-surface px-32 py-28 shadow-main"
  >
    <div
      class="flex h-90 w-90 shrink-0 items-center justify-center rounded-full border-2 border-border bg-surface-3"
    >
      <span class="text-32 font-medium text-text-2">
        {{ currentUser?.initials }}
      </span>
    </div>

    <button
      type="button"
      class="inline-flex h-22 w-22 shrink-0 items-center justify-center rounded-full border-[1.5px] border-border bg-surface-2 font-secondary text-12 font-bold leading-none text-text-3 transition-colors duration-150 hover:border-accent-green hover:bg-accent-green-light hover:text-accent-green"
      title="Как устроена страница"
    >
      ?
    </button>

    <div class="flex min-w-0 flex-1 flex-col gap-6">
      <div class="flex flex-wrap items-center gap-12">
        <input
          v-model="form.displayName"
          class="w-full max-w-400 rounded-8 border border-border bg-surface-2 px-8 py-4 text-22 font-bold text-text outline-hidden focus:border-accent-green-border"
          placeholder="Имя и фамилия"
        />
      </div>

      <div class="flex items-center gap-8 text-15 text-text-2">
        <input
          v-model="form.username"
          class="w-full max-w-400 rounded-8 border border-border bg-surface-2 px-10 py-6 text-14 text-text outline-hidden focus:border-accent-green-border"
          placeholder="@username"
          style="width: 180px"
        />
      </div>

      <div class="mt-2 flex flex-wrap gap-16 text-13 text-text-2">
        <span class="inline-flex items-center gap-5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="shrink-0"
          >
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M5 20v-2a7 7 0 0 1 14 0v2"></path>
          </svg>
          Зарегистрирован:
          {{ formatDate(currentUser?.joinedAt as Date, 'PPP') }}
        </span>

        <span class="inline-flex items-center gap-5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="shrink-0"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14"></path>
          </svg>
          0 подписчиков
        </span>
      </div>

      <textarea
        v-model="form.bio"
        class="mt-4 w-full max-w-550 resize-y rounded-8 border border-border bg-surface-2 px-12 py-8 text-14 leading-normal text-text outline-hidden focus:border-accent-green-border"
        rows="3"
        placeholder="Расскажите о себе..."
        style="height: 113px"
      />

      <div class="mt-8 flex gap-8">
        <button
          type="button"
          class="rounded-30 border-0 bg-text px-14 py-6 text-13 font-medium text-surface transition-opacity duration-150 hover:opacity-80"
          :disabled="isLoading"
          @click="
            () =>
              mutate({
                displayName: form.displayName as string,
                bio: form.bio as string,
                username: form.username as string
              })
          "
        >
          Сохранить
        </button>
        <button
          type="button"
          class="rounded-30 border border-border bg-surface-2 px-14 py-6 text-13 font-medium text-text-2 transition-all duration-150 hover:bg-surface-3 hover:text-text"
          @click="onCancel"
        >
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>
