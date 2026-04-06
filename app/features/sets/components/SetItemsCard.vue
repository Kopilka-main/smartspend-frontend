<script setup lang="ts">
import type { CustomSetDetails } from '~/types'

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
            class="border-b border-border bg-surface-2 px-14 py-7 pl-24 text-10 font-semibold uppercase tracking-[0.06em] text-text-3"
          >
            Расходники — ежемесячная закупка
          </td>
        </tr>
        <tr class="group">
          <td
            class="border-b border-border px-14 py-11 pl-24 align-middle first:pl-24 group-hover:bg-surface-2"
          >
            <div class="font-medium tracking-[-0.01em]">Крупы</div>
            <div class="mt-1 text-11 text-text-3">Гречка, рис, овсянка</div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                −
              </button>
              <span class="min-w-16 text-center font-secondary text-12">3</span>
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                +
              </button>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <input
              class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              step="100"
              type="number"
              value="158"
            />
            <span
              class="mt-4 block whitespace-nowrap font-secondary text-12 text-text-2"
              >4.2 кг</span
            >
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <input
                class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                min="0.25"
                step="0.5"
                type="number"
                value="0.08333333333333333"
              />
              <span class="font-secondary text-11 text-text-3">лет</span>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2 last:pr-24"
          >
            <span
              class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
              >473 ₽</span
            >
          </td>
        </tr>
        <tr class="group">
          <td
            class="border-b border-border px-14 py-11 pl-24 align-middle group-hover:bg-surface-2"
          >
            <div class="font-medium tracking-[-0.01em]">Овощи и фрукты</div>
            <div class="mt-1 text-11 text-text-3">Сезонные</div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                −
              </button>
              <span class="min-w-16 text-center font-secondary text-12">5</span>
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                +
              </button>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <input
              class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              step="100"
              type="number"
              value="126"
            />
            <span
              class="mt-4 block whitespace-nowrap font-secondary text-12 text-text-2"
              >4.2 кг</span
            >
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <input
                class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                min="0.25"
                step="0.5"
                type="number"
                value="0.08333333333333333"
              />
              <span class="font-secondary text-11 text-text-3">лет</span>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2"
          >
            <span
              class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
              >630 ₽</span
            >
          </td>
        </tr>
        <tr class="group">
          <td
            class="border-b border-border px-14 py-11 pl-24 align-middle group-hover:bg-surface-2"
          >
            <div class="font-medium tracking-[-0.01em]">Мясо и рыба</div>
            <div class="mt-1 text-11 text-text-3">Курица, рыба</div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                −
              </button>
              <span class="min-w-16 text-center font-secondary text-12">4</span>
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                +
              </button>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <input
              class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              step="100"
              type="number"
              value="368"
            />
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <input
                class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                min="0.25"
                step="0.5"
                type="number"
                value="0.08333333333333333"
              />
              <span class="font-secondary text-11 text-text-3">лет</span>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2"
          >
            <span
              class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
              >1&nbsp;470 ₽</span
            >
          </td>
        </tr>
        <tr class="group">
          <td
            class="border-b border-border px-14 py-11 pl-24 align-middle group-hover:bg-surface-2"
          >
            <div class="font-medium tracking-[-0.01em]">Молочные продукты</div>
            <div class="mt-1 text-11 text-text-3">Молоко, творог, кефир</div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                −
              </button>
              <span class="min-w-16 text-center font-secondary text-12">6</span>
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                +
              </button>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <input
              class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              step="100"
              type="number"
              value="95"
            />
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <input
                class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                min="0.25"
                step="0.5"
                type="number"
                value="0.08333333333333333"
              />
              <span class="font-secondary text-11 text-text-3">лет</span>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2"
          >
            <span
              class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
              >567 ₽</span
            >
          </td>
        </tr>
        <tr class="group">
          <td
            class="border-b border-border px-14 py-11 pl-24 align-middle group-hover:bg-surface-2"
          >
            <div class="font-medium tracking-[-0.01em]">Яйца</div>
            <div class="mt-1 text-11 text-text-3">2 десятка</div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                −
              </button>
              <span class="min-w-16 text-center font-secondary text-12"
                >20</span
              >
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                +
              </button>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <input
              class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              step="100"
              type="number"
              value="13"
            />
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <input
                class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                min="0.25"
                step="0.5"
                type="number"
                value="0.08333333333333333"
              />
              <span class="font-secondary text-11 text-text-3">лет</span>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2"
          >
            <span
              class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
              >252 ₽</span
            >
          </td>
        </tr>
        <tr class="group">
          <td
            class="border-b border-border px-14 py-11 pl-24 align-middle group-hover:bg-surface-2"
          >
            <div class="font-medium tracking-[-0.01em]">Масло</div>
            <div class="mt-1 text-11 text-text-3">Растительное + слив.</div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                −
              </button>
              <span class="min-w-16 text-center font-secondary text-12">2</span>
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                +
              </button>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <input
              class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              step="100"
              type="number"
              value="210"
            />
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <input
                class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                min="0.25"
                step="0.5"
                type="number"
                value="0.08333333333333333"
              />
              <span class="font-secondary text-11 text-text-3">лет</span>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2"
          >
            <span
              class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
              >420 ₽</span
            >
          </td>
        </tr>
        <tr class="group">
          <td
            class="border-b border-border px-14 py-11 pl-24 align-middle group-hover:bg-surface-2"
          >
            <div class="font-medium tracking-[-0.01em]">Бакалея</div>
            <div class="mt-1 text-11 text-text-3">Макароны, хлеб, мука</div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                −
              </button>
              <span class="min-w-16 text-center font-secondary text-12">3</span>
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                +
              </button>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <input
              class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              step="100"
              type="number"
              value="137"
            />
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <input
                class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                min="0.25"
                step="0.5"
                type="number"
                value="0.08333333333333333"
              />
              <span class="font-secondary text-11 text-text-3">лет</span>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2"
          >
            <span
              class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
              >410 ₽</span
            >
          </td>
        </tr>
        <tr class="group">
          <td
            class="border-b border-border px-14 py-11 pl-24 align-middle group-hover:bg-surface-2"
          >
            <div class="font-medium tracking-[-0.01em]">Специи и соусы</div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                −
              </button>
              <span class="min-w-16 text-center font-secondary text-12">3</span>
              <button
                type="button"
                class="flex h-20 w-20 shrink-0 items-center justify-center rounded-4 border border-border bg-surface-2 text-12 leading-none text-text-2 transition hover:bg-surface-3 hover:text-text"
              >
                +
              </button>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <input
              class="w-80 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              step="100"
              type="number"
              value="158"
            />
          </td>
          <td
            class="border-b border-border px-14 py-11 align-middle group-hover:bg-surface-2"
          >
            <div class="flex items-center gap-5">
              <input
                class="w-60 rounded-5 border border-accent-green-border bg-surface-2 px-7 py-3 font-secondary text-12 text-text outline-hidden transition [appearance:textfield] focus:border-accent-green focus:bg-surface [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                min="0.25"
                step="0.5"
                type="number"
                value="0.16666666666666666"
              />
              <span class="font-secondary text-11 text-text-3">лет</span>
            </div>
          </td>
          <td
            class="border-b border-border px-14 py-11 pr-24 text-right align-middle group-hover:bg-surface-2"
          >
            <span
              class="whitespace-nowrap font-secondary text-13 font-medium text-accent-green"
              >236 ₽</span
            >
          </td>
        </tr>
        <tr class="sd-total-row">
          <td
            colspan="4"
            class="border-t border-accent-green-border bg-accent-green-light py-11 pl-24 pr-14 font-semibold tracking-[-0.01em] text-text"
          >
            Итого в месяц

            <span
              class="ml-6 font-secondary text-11 font-normal text-accent-green"
            >
              (×1.00)
            </span>
          </td>

          <td
            class="border-t border-accent-green-border bg-accent-green-light py-11 pr-24 text-right font-secondary text-15 font-bold text-accent-green"
          >
            {{ item.amount }}&nbsp;₽
          </td>
        </tr>
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
