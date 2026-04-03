<script setup lang="ts">
import type { CustomSet } from '~/types'

type AccountSetCardProps = {
  item: CustomSet
}

const props = defineProps<AccountSetCardProps>()

const visibilityLabel = computed(() => {
  console.log(props.item.amount)
  return props.item.isPrivate ? 'Личный' : 'Публичный'
})
</script>

<template>
  <div
    class="flex flex-col overflow-hidden rounded-12 border border-border bg-surface shadow-app-sm"
  >
    <div class="h-3 shrink-0 bg-set-accent-mauve"></div>

    <div class="flex flex-1 flex-col gap-6 px-14 pb-10 pt-12">
      <div class="flex items-center justify-between">
        <span
          class="text-10 font-semibold uppercase tracking-[0.05em] text-text-3"
        >
          Моё
        </span>

        <span
          class="inline-flex items-center gap-4 rounded-30 border border-border bg-surface-3 px-8 py-2 text-[9px] font-semibold text-text-3"
        >
          {{ visibilityLabel }}
        </span>
      </div>

      <div class="text-13 font-bold leading-tight tracking-[-0.01em] text-text">
        {{ item.title }}
      </div>

      <div class="flex flex-wrap gap-4">
        <span
          v-for="name in item.itemNames"
          :key="name"
          class="whitespace-nowrap rounded-5 border border-border bg-surface-2 px-6 py-2 text-10 font-medium text-text-3"
        >
          {{ name }}
        </span>
      </div>
    </div>

    <div
      class="flex items-baseline justify-between gap-8 border-t border-border px-14 py-10"
    >
      <span
        class="font-secondary text-15 font-normal tracking-[-0.01em] text-text"
      >
        {{ item.amount }} ₽
      </span>

      <span class="text-10 text-text-3">в месяц</span>
    </div>

    <div class="mt-0 flex gap-8 border-t border-border px-14 pb-14 pt-10">
      <button
        type="button"
        class="inline-flex items-center gap-5 rounded-8 border border-border bg-surface-2 px-12 py-5 text-12 font-medium text-text-2 transition-all duration-150 hover:border-text-3 hover:bg-surface-3 hover:text-text"
      >
        <svg
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
          class="shrink-0"
        >
          <path
            d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
          ></path>
        </svg>

        Редактировать
      </button>

      <button
        type="button"
        class="inline-flex items-center gap-5 rounded-8 border border-accent-red-soft-border bg-transparent px-12 py-5 text-12 font-medium text-accent-red transition-all duration-150 hover:border-accent-red hover:bg-accent-red-soft-bg"
      >
        <svg
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
          class="shrink-0"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"></path>
        </svg>

        Удалить
      </button>
    </div>
  </div>
</template>
