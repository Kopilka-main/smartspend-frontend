<script setup lang="ts">
import AppEmpty from '~/components/layout/AppEmpty.vue'
import AccountSetCard from '~/features/account/components/sets/AccountSetCard.vue'

import type { CustomSet } from '~/types'

type AccountSetsSectionProps = {
  items: CustomSet[]
}

defineProps<AccountSetsSectionProps>()

const router = useRouter()

const onCreateNewSet = () => {
  router.push('/sets/new')
}
</script>

<template>
  <div class="grid grid-cols-1 gap-16">
    <!-- Tab header -->
    <div class="mt-4 flex items-center justify-between">
      <span class="text-14 font-semibold tracking-[-0.01em] text-text-2">
        Наборы, которые вы создали
      </span>

      <button
        type="button"
        class="inline-flex items-center gap-5 rounded-30 border-0 bg-text px-14 py-8 text-13 font-medium text-surface transition-opacity duration-150 hover:opacity-80"
        @click="onCreateNewSet"
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

        Создать набор
      </button>
    </div>

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
          >— виден в каталоге, другие могут добавить его в свой инвентарь</span
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
          >— только для вас, не отображается в общем каталоге</span
        >
      </div>
    </div>

    <div v-if="items.length" class="grid grid-cols-3 gap-14">
      <AccountSetCard v-for="item in items" :key="item.id" :item="item" />
      <!--      <div-->
      <!--        class="flex flex-col overflow-hidden rounded-12 border border-border bg-surface shadow-app-sm"-->
      <!--      >-->
      <!--        <div class="h-3 shrink-0 bg-set-accent-green"></div>-->
      <!--        <div class="flex flex-1 flex-col gap-6 px-14 pb-10 pt-12">-->
      <!--          <div class="flex items-center justify-between">-->
      <!--            <span-->
      <!--              class="text-10 font-semibold uppercase tracking-[0.05em] text-text-3"-->
      <!--              >Моё</span-->
      <!--            >-->
      <!--            <span-->
      <!--              class="inline-flex items-center gap-4 rounded-30 border border-accent-green-border bg-accent-green-light px-8 py-2 text-[9px] font-semibold text-accent-green"-->
      <!--            >-->
      <!--              Публичный-->
      <!--            </span>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="text-13 font-bold leading-tight tracking-[-0.01em] text-text"-->
      <!--          >-->
      <!--            Подписки и досуг-->
      <!--          </div>-->
      <!--          <div class="flex flex-wrap gap-4">-->
      <!--            <span-->
      <!--              class="whitespace-nowrap rounded-5 border border-border bg-surface-2 px-6 py-2 text-10 font-medium text-text-3"-->
      <!--              >Досуг</span-->
      <!--            >-->
      <!--            <span-->
      <!--              class="whitespace-nowrap rounded-5 border border-border bg-surface-2 px-6 py-2 text-10 font-medium text-text-3"-->
      <!--              >Публичный</span-->
      <!--            >-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div-->
      <!--          class="flex items-baseline justify-between gap-8 border-t border-border px-14 py-10"-->
      <!--        >-->
      <!--          <span-->
      <!--            class="font-secondary text-15 font-normal tracking-[-0.01em] text-text"-->
      <!--            >5 200 ₽</span-->
      <!--          >-->
      <!--          <span class="text-10 text-text-3">в месяц</span>-->
      <!--        </div>-->
      <!--        <div class="mt-0 flex gap-8 border-t border-border px-14 pb-14 pt-10">-->
      <!--          <button-->
      <!--            type="button"-->
      <!--            class="inline-flex items-center gap-5 rounded-8 border border-border bg-surface-2 px-12 py-5 text-12 font-medium text-text-2 transition-all duration-150 hover:border-text-3 hover:bg-surface-3 hover:text-text"-->
      <!--          >-->
      <!--            <svg-->
      <!--              width="12"-->
      <!--              height="12"-->
      <!--              fill="none"-->
      <!--              stroke="currentColor"-->
      <!--              viewBox="0 0 24 24"-->
      <!--              stroke-width="2"-->
      <!--              class="shrink-0"-->
      <!--            >-->
      <!--              <path-->
      <!--                d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"-->
      <!--              ></path>-->
      <!--            </svg>-->
      <!--            Редактировать-->
      <!--          </button>-->
      <!--          <button-->
      <!--            type="button"-->
      <!--            class="inline-flex items-center gap-5 rounded-8 border border-accent-red-soft-border bg-transparent px-12 py-5 text-12 font-medium text-accent-red transition-all duration-150 hover:border-accent-red hover:bg-accent-red-soft-bg"-->
      <!--          >-->
      <!--            <svg-->
      <!--              width="12"-->
      <!--              height="12"-->
      <!--              fill="none"-->
      <!--              stroke="currentColor"-->
      <!--              viewBox="0 0 24 24"-->
      <!--              stroke-width="2"-->
      <!--              class="shrink-0"-->
      <!--            >-->
      <!--              <polyline points="3 6 5 6 21 6"></polyline>-->
      <!--              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"></path>-->
      <!--            </svg>-->
      <!--            Удалить-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>

    <AppEmpty
      v-else
      title="Нет наборов"
      description="Создайте первый набор или добавьте готовый из каталога"
    />
  </div>
</template>
