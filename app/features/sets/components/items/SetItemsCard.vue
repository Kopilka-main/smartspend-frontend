<script setup lang="ts">
import type { CustomSetDetails } from '~/types'
import SetItemRow from '~/features/sets/components/items/SetItemRow.vue'
import SetItemsTotal from '~/features/sets/components/items/SetItemsTotal.vue'

type SetItemsCardProps = {
  item: CustomSetDetails
}

const props = defineProps<SetItemsCardProps>()

const isDetailsVisible = ref(false)
const isEditMode = ref(false)
</script>

<template>
  <div
    id="sp-sd-items"
    class="overflow-hidden rounded-16 bg-surface shadow-main"
  >
    <div
      class="flex items-center justify-between gap-8 border-b border-border bg-surface-2 px-24 py-14 max-900:flex-col max-900:items-start"
    >
      <div>
        <div class="text-12 font-semibold tracking-[-0.01em] text-text-2">
          Масштаб набора
        </div>

        <div class="mt-1 text-11 tracking-[-0.01em] text-text-3">
          База: 1 человек / месяц
        </div>
      </div>

      <div class="flex items-center gap-10">
        <span
          class="min-w-52 text-right font-secondary text-16 font-medium tracking-[-0.02em] text-accent-green"
        >
          ×1.00
        </span>

        <div class="flex gap-4">
          <button
            type="button"
            class="flex h-28 w-28 select-none items-center justify-center rounded-7 border border-border bg-surface text-15 font-normal leading-none text-text-2 transition hover:bg-surface-3 hover:text-text active:border-accent-green-border active:bg-accent-green-light"
          >
            −
          </button>

          <button
            type="button"
            class="flex h-28 w-28 select-none items-center justify-center rounded-7 border border-border bg-surface text-15 font-normal leading-none text-text-2 transition hover:bg-surface-3 hover:text-text active:border-accent-green-border active:bg-accent-green-light"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <div
      class="flex-col sm:flex-row flex sm:items-center justify-between gap-12 border-b border-border px-24 py-15"
    >
      <div
        class="flex items-center gap-8 text-15 font-bold tracking-[-0.02em] text-text"
      >
        Состав набора
        <span
          class="rounded-5 border border-border bg-surface-2 px-6 py-1 font-secondary text-11 text-text-3"
        >
          {{ item.items.length }} позиций
        </span>
      </div>

      <div class="flex items-center gap-6">
        <template v-if="isEditMode">
          <button
            type="button"
            class="inline-flex items-center gap-5 rounded-8 border border-border bg-surface-2 px-12 py-6 text-12 font-medium tracking-[-0.01em] text-text-2 transition hover:bg-surface-3 hover:text-text"
          >
            <svg
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shrink-0"
            >
              <path
                d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
              ></path>
              <path d="M3 3v5h5"></path>
            </svg>

            Сбросить
          </button>

          <button
            type="button"
            class="inline-flex items-center gap-5 rounded-8 border border-accent-green-border bg-accent-green-light px-12 py-6 text-12 font-medium tracking-[-0.01em] text-accent-green"
          >
            <svg
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shrink-0"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>

            Готово
          </button>
        </template>

        <button
          v-else
          type="button"
          class="inline-flex items-center gap-5 rounded-8 border border-border bg-surface-2 px-12 py-6 text-12 font-medium tracking-[-0.01em] text-text-2 transition hover:bg-surface-3 hover:text-text"
        >
          <svg
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>

          Редактировать
        </button>
      </div>
    </div>

    <table class="w-full border-collapse text-13 tracking-[-0.01em]">
      <thead>
        <tr>
          <th
            class="whitespace-nowrap bg-surface-2 px-14 py-8 text-left text-10 font-semibold uppercase tracking-[0.04em] text-text-3 first:pl-24"
          >
            Позиция
          </th>
          <th
            class="whitespace-nowrap bg-surface-2 px-14 py-8 text-left text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Кол-во
          </th>
          <th
            class="whitespace-nowrap bg-surface-2 px-14 py-8 text-left text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Цена
          </th>
          <th
            class="whitespace-nowrap bg-surface-2 px-14 py-8 text-left text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Объём / мес
          </th>
          <th
            class="whitespace-nowrap bg-surface-2 px-14 py-8 pr-24 text-right text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            ₽/мес
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="sd-divider-row">
          <td
            colspan="5"
            class="border-b border-t text-right border-border bg-surface-2 px-14 py-7 pl-24 text-10 font-semibold uppercase tracking-[0.06em] text-text-3"
          >
            Расходники — ежемесячная закупка
          </td>
        </tr>

        <SetItemRow />
        <SetItemRow />
        <SetItemRow />

        <SetItemsTotal />
      </tbody>
    </table>

    <div class="border-t border-border">
      <button
        type="button"
        class="open flex w-full items-center gap-8 px-24 py-13 text-left text-13 font-medium tracking-[-0.01em] text-text-2 transition-colors hover:text-text"
        @click="isDetailsVisible = !isDetailsVisible"
      >
        <svg
          width="13"
          height="13"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="shrink-0 text-text-3"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4M12 8h.01"></path>
        </svg>

        Как считается сумма?

        <svg
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="ml-auto shrink-0 text-text-3 transition-transform duration-200"
          :class="{ 'rotate-180': isDetailsVisible }"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <div v-if="isDetailsVisible" class="px-24 pb-18">
        <div
          class="text-13 leading-[1.65] tracking-[-0.01em] text-text-2 [&_strong]:font-semibold [&_strong]:text-text"
        >
          Набор показывает не «сколько потратить», а
          <strong>сколько откладывать ежемесячно</strong> — чтобы деньги были в
          нужный момент. Стоимость каждой вещи делится на срок службы в месяцах.
        </div>

        <div
          class="mt-12 rounded-10 border border-border bg-surface-2 px-16 py-12 font-secondary text-12 leading-[1.9] text-text-2"
        >
          <span class="font-medium text-accent-green">Амортизация:</span>
          цена × кол-во / (срок_лет × 12)<br />
          <span class="font-medium text-accent-green">Цена с масштабом:</span>
          базовая_цена × коэффициент<br />
          <span class="font-medium text-accent-green">Итог:</span>
          сумма амортизаций всех позиций
        </div>
      </div>
    </div>
  </div>
</template>
