<script setup lang="ts">
import AppEmpty from '~/components/layout/AppEmpty.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-16">
    <!-- Tab header -->
    <div class="mt-4 flex items-center justify-between">
      <span class="text-14 font-semibold tracking-[-0.01em] text-text-2">
        Статьи, которые вы написали
      </span>
      <button
        type="button"
        class="inline-flex items-center gap-5 rounded-30 border-0 bg-text px-14 py-8 text-13 font-medium text-surface transition-opacity duration-150 hover:opacity-80"
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
          <path d="M12 5v14M5 12h14"></path>
        </svg>
        Написать статью
      </button>
    </div>

    <!-- Tab info -->
    <div
      class="mb-16 flex flex-col gap-6 rounded-12 border border-border bg-surface-2 px-16 py-12"
    >
      <div class="flex flex-wrap items-center gap-8">
        <span
          class="inline-flex items-center gap-4 rounded-30 border border-accent-green-border bg-accent-green-light px-8 py-2 text-10 font-semibold text-accent-green"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="shrink-0"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path
              d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"
            ></path>
          </svg>
          Публичный
        </span>
        <span class="text-12 leading-[1.4] text-text-2"
          >— видна всем в ленте и каталоге, набирает просмотры и
          подписчиков</span
        >
      </div>

      <div class="flex flex-wrap items-center gap-8">
        <span
          class="inline-flex items-center gap-4 rounded-30 border border-border bg-surface-3 px-8 py-2 text-10 font-semibold text-text-3"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="shrink-0"
          >
            <rect x="3" y="11" width="18" height="11" rx="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Личный
        </span>
        <span class="text-12 leading-[1.4] text-text-2"
          >— виден только вам, не отображается в ленте</span
        >
      </div>
    </div>

    <AppEmpty
      title="Нет статей"
      description="Напишите первую статью и поделитесь опытом с сообществом"
    />

    <!--    &lt;!&ndash; Tab cards &ndash;&gt;-->

    <!--    &lt;!&ndash; Card active &ndash;&gt;-->
    <!--    <div class="rounded-12 border border-border bg-surface p-20 shadow-app-sm">-->
    <!--      <div class="mb-8 text-17 font-semibold tracking-[-0.01em] text-text">-->
    <!--        Капсульный гардероб: как выбрать базу и не переплатить-->
    <!--      </div>-->
    <!--      <div class="my-[4px] mb-10 text-13 leading-normal text-text-2">-->
    <!--        Разбираю набор «Базовый гардероб» по деталям — какие бренды выбрать, где-->
    <!--        лучше соотношение цена/качество, и почему 10 вещей лучше 40.-->
    <!--      </div>-->
    <!--      <div-->
    <!--        class="flex flex-wrap items-center gap-16 border-t border-border pt-12 text-12 text-text-3"-->
    <!--      >-->
    <!--        <span>4 марта 2026</span>-->
    <!--        <span>21&nbsp;700 просмотров</span>-->
    <!--        <span-->
    <!--          class="inline-flex items-center gap-4 rounded-30 border border-accent-green-border bg-accent-green-light px-8 py-2 text-10 font-semibold text-accent-green"-->
    <!--        >-->
    <!--          <svg-->
    <!--            width="10"-->
    <!--            height="10"-->
    <!--            viewBox="0 0 24 24"-->
    <!--            fill="none"-->
    <!--            stroke="currentColor"-->
    <!--            stroke-width="2"-->
    <!--            class="shrink-0"-->
    <!--          >-->
    <!--            <circle cx="12" cy="12" r="3"></circle>-->
    <!--            <path-->
    <!--              d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"-->
    <!--            ></path>-->
    <!--          </svg>-->
    <!--          Публичный-->
    <!--        </span>-->
    <!--      </div>-->
    <!--      <div class="mt-12 flex gap-8 border-t border-border pt-10">-->
    <!--        <button-->
    <!--          type="button"-->
    <!--          class="inline-flex items-center gap-5 rounded-8 border border-border bg-surface-2 px-12 py-5 text-12 font-medium text-text-2 transition-all duration-150 hover:border-text-3 hover:bg-surface-3 hover:text-text"-->
    <!--        >-->
    <!--          <svg-->
    <!--            width="12"-->
    <!--            height="12"-->
    <!--            fill="none"-->
    <!--            stroke="currentColor"-->
    <!--            viewBox="0 0 24 24"-->
    <!--            stroke-width="2"-->
    <!--            class="shrink-0"-->
    <!--          >-->
    <!--            <path-->
    <!--              d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"-->
    <!--            ></path>-->
    <!--          </svg>-->
    <!--          Редактировать-->
    <!--        </button>-->
    <!--        <button-->
    <!--          type="button"-->
    <!--          class="inline-flex items-center gap-5 rounded-8 border border-accent-red-soft-border bg-transparent px-12 py-5 text-12 font-medium text-accent-red transition-all duration-150 hover:border-accent-red hover:bg-accent-red-soft-bg"-->
    <!--        >-->
    <!--          <svg-->
    <!--            width="12"-->
    <!--            height="12"-->
    <!--            fill="none"-->
    <!--            stroke="currentColor"-->
    <!--            viewBox="0 0 24 24"-->
    <!--            stroke-width="2"-->
    <!--            class="shrink-0"-->
    <!--          >-->
    <!--            <polyline points="3 6 5 6 21 6"></polyline>-->
    <!--            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"></path>-->
    <!--          </svg>-->
    <!--          Удалить-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    &lt;!&ndash; Card inactive &ndash;&gt;-->
    <!--    <div class="rounded-12 border border-border bg-surface p-20 shadow-app-sm">-->
    <!--      <div class="mb-8 text-17 font-semibold tracking-[-0.01em] text-text">-->
    <!--        Капсульный гардероб: как выбрать базу и не переплатить-->
    <!--      </div>-->
    <!--      <div class="my-[4px] mb-10 text-13 leading-normal text-text-2">-->
    <!--        Разбираю набор «Базовый гардероб» по деталям — какие бренды выбрать, где-->
    <!--        лучше соотношение цена/качество, и почему 10 вещей лучше 40.-->
    <!--      </div>-->
    <!--      <div-->
    <!--        class="flex flex-wrap items-center gap-16 border-t border-border pt-12 text-12 text-text-3"-->
    <!--      >-->
    <!--        <span>4 марта 2026</span>-->
    <!--        <span>21&nbsp;700 просмотров</span>-->
    <!--        <span-->
    <!--          class="inline-flex items-center gap-4 rounded-30 border border-border bg-surface-3 px-8 py-2 text-10 font-semibold text-text-3"-->
    <!--        >-->
    <!--          <svg-->
    <!--            width="10"-->
    <!--            height="10"-->
    <!--            viewBox="0 0 24 24"-->
    <!--            fill="none"-->
    <!--            stroke="currentColor"-->
    <!--            stroke-width="2"-->
    <!--            class="shrink-0"-->
    <!--          >-->
    <!--            <circle cx="12" cy="12" r="3"></circle>-->
    <!--            <path-->
    <!--              d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"-->
    <!--            ></path>-->
    <!--          </svg>-->
    <!--          Приватный-->
    <!--        </span>-->
    <!--      </div>-->
    <!--      <div class="mt-12 flex gap-8 border-t border-border pt-10">-->
    <!--        <button-->
    <!--          type="button"-->
    <!--          class="inline-flex items-center gap-5 rounded-8 border border-border bg-surface-2 px-12 py-5 text-12 font-medium text-text-2 transition-all duration-150 hover:border-text-3 hover:bg-surface-3 hover:text-text"-->
    <!--        >-->
    <!--          <svg-->
    <!--            width="12"-->
    <!--            height="12"-->
    <!--            fill="none"-->
    <!--            stroke="currentColor"-->
    <!--            viewBox="0 0 24 24"-->
    <!--            stroke-width="2"-->
    <!--            class="shrink-0"-->
    <!--          >-->
    <!--            <path-->
    <!--              d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"-->
    <!--            ></path>-->
    <!--          </svg>-->
    <!--          Редактировать-->
    <!--        </button>-->
    <!--        <button-->
    <!--          type="button"-->
    <!--          class="inline-flex items-center gap-5 rounded-8 border border-accent-red-soft-border bg-transparent px-12 py-5 text-12 font-medium text-accent-red transition-all duration-150 hover:border-accent-red hover:bg-accent-red-soft-bg"-->
    <!--        >-->
    <!--          <svg-->
    <!--            width="12"-->
    <!--            height="12"-->
    <!--            fill="none"-->
    <!--            stroke="currentColor"-->
    <!--            viewBox="0 0 24 24"-->
    <!--            stroke-width="2"-->
    <!--            class="shrink-0"-->
    <!--          >-->
    <!--            <polyline points="3 6 5 6 21 6"></polyline>-->
    <!--            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"></path>-->
    <!--          </svg>-->
    <!--          Удалить-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
