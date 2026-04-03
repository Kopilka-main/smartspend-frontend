<script setup lang="ts"></script>

<template>
  <div class="rounded-14 border border-border bg-surface">
    <div
      class="px-18 pt-12 pb-8 text-11 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
    >
      Региональные настройки
    </div>
    <div
      class="px-18 py-14 flex flex-col items-start sm:flex-row sm:items-center justify-between gap-12"
    >
      <div>
        <div class="text-14 font-semibold tracking-[-0.01em] text-text">
          Часовой пояс
        </div>
        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          Используется для расчёта напоминаний и временных меток
        </div>
      </div>
      <div class="relative w-271">
        <button
          type="button"
          class="rounded-10 w-full justify-between border items-center border-border bg-surface px-16 flex gap-6 h-35 text-14 font-medium tracking-[-0.01em] text-text-2 transition-colors duration-150 hover:bg-surface-2 hover:text-text"
        >
          Редактировать
          <svg
            class="w-16 h-16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div
          v-if="false"
          class="absolute left-0 right-0 top-auto translate-y-full -bottom-3 rounded-10 border border-border bg-surface p-8 shadow-app-md"
        >
          <div>
            <div
              class="flex items-center justify-between rounded-7 bg-accent-green-light px-8 py-6 text-12 font-medium text-accent-green"
            >
              <span>За 7 дней</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div
              class="mt-2 flex items-center justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
            >
              <span>За месяц</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="opacity-0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div
              class="mt-2 flex items-center justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
            >
              <span>За всё время</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="opacity-0"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
