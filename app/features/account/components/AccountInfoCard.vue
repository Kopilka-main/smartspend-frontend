<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'
import { formatDate } from '~/utils/formatDate'

const emit = defineEmits<{
  (e: 'edit'): void
}>()

const { currentUser } = useCurrentUser()

const onEditAccount = () => {
  emit('edit')
}
</script>

<template>
  <div class="relative rounded-14 bg-surface px-32 py-28 shadow-main">
    <div class="flex items-start gap-28">
      <div
        class="w-90 h-90 rounded-full bg-surface-3 border-2 border-border flex items-center justify-center shrink-0"
      >
        <span class="text-32 font-medium text-text-2">
          {{ currentUser?.initials }}
        </span>
      </div>

      <button
        type="button"
        class="w-22 h-22 rounded-full bg-surface-2 border-[1.5px] border-border text-text-3 text-12 font-bold font-secondary inline-flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-150 leading-none hover:border-accent-green hover:text-accent-green hover:bg-accent-green-light"
        title="Как устроена страница"
      >
        ?
      </button>

      <div class="min-w-0 flex-1 flex flex-col gap-6">
        <div
          class="text-26 font-bold tracking-[-0.03em] leading-[1.2] text-text"
        >
          {{ currentUser?.displayName }}
        </div>

        <div
          v-if="currentUser?.username"
          class="font-secondary text-14 text-text-3"
        >
          @{{ currentUser?.username }}
        </div>

        <div
          class="mt-2 flex flex-wrap items-center gap-16 text-13 text-text-2"
        >
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

        <div
          v-if="currentUser?.bio"
          class="mt-4 max-w-550 text-14 text-text-2 leading-normal"
        >
          {{ currentUser?.bio }}
        </div>
      </div>

      <button
        id="sp-acc-edit"
        type="button"
        class="absolute top-28 right-32 inline-flex items-center gap-5 rounded-30 border border-border bg-transparent px-14 py-6 text-13 font-medium text-text-2 whitespace-nowrap hover:bg-surface-2 hover:text-text"
        @click="onEditAccount"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="shrink-0"
        >
          <path
            d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
          ></path>
        </svg>
        Редактировать
      </button>
    </div>
  </div>
</template>
