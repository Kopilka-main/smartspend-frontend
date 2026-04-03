<script setup lang="ts">
const onEditFinance = () => {}
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-baseline justify-between mb-12 gap-4">
      <span class="text-14 font-semibold text-text-2 tracking-[-0.01em]">
        Финансовая картина ·
      </span>

      <button
        type="button"
        class="flex items-center gap-5 text-12 font-medium text-text-2 bg-surface-2 border border-border rounded-20 px-12 py-5 cursor-pointer tracking-[-0.01em] transition-all duration-150 hover:text-text hover:bg-surface-3 hover:border-text-3"
        @click="onEditFinance"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path
            d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
          ></path>
        </svg>

        Редактировать
      </button>
    </div>

    <!-- Content -->
    <div class="bg-surface rounded-16 shadow-main overflow-hidden">
      <div class="flex items-center gap-12 py-16 px-20 border-t-0">
        <span
          class="bl-label flex-1 text-15 font-semibold text-text tracking-[-0.01em]"
        >
          Доход
        </span>
        <span
          class="bl-value font-secondary text-22 font-medium text-text whitespace-nowrap tracking-[-0.02em]"
        >
          0 ₽
        </span>
      </div>

      <div
        class="flex items-center gap-12 py-10 px-20 bg-surface-2 border-t border-border cursor-pointer select-none transition-colors duration-120 hover:bg-surface-3"
      >
        <span
          class="bl-group-chevron flex items-center text-text-3 transition-transform duration-200 shrink-0 rotate-180"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <span
          class="bl-group-label flex-1 text-13 font-semibold text-text tracking-[-0.01em]"
        >
          Жильё
        </span>

        <span
          class="bl-group-total font-secondary text-13 font-medium text-text whitespace-nowrap tracking-[-0.02em]"
        >
          −0 ₽
        </span>

        <span
          class="min-w-38 text-center font-secondary text-11 font-semibold text-text-2 bg-surface-3 rounded-6 px-8 py-3"
        >
          -
        </span>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center gap-12 pt-13 pr-20 pb-13 pl-36">
          <span
            class="bl-label flex-1 text-13 font-normal text-text-3 tracking-[-0.01em]"
          >
            Аренда / ипотека + ЖКХ
          </span>

          <span
            class="bl-value font-secondary text-13 font-normal text-text-2 whitespace-nowrap tracking-[-0.02em]"
          >
            −0 ₽
          </span>
        </div>

        <!--        <div-->
        <!--          class="flex items-start gap-10 pt-11 pr-20 pb-11 pl-20 border-t border-[#BFDBFE] bg-[#F0F6FF] text-[#3A5FA0] text-[12.5px] leading-normal"-->
        <!--        >-->
        <!--          <svg-->
        <!--            class="shrink-0 mt-1 opacity-70"-->
        <!--            width="14"-->
        <!--            height="14"-->
        <!--            viewBox="0 0 24 24"-->
        <!--            fill="none"-->
        <!--            stroke="currentColor"-->
        <!--            stroke-width="2"-->
        <!--            stroke-linecap="round"-->
        <!--            stroke-linejoin="round"-->
        <!--            aria-hidden="true"-->
        <!--          >-->
        <!--            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>-->
        <!--            <polyline points="17 6 23 6 23 12"></polyline>-->
        <!--          </svg>-->

        <!--          <span class="flex-1"> 29% дохода на жильё — в норме. </span>-->

        <!--          <button-->
        <!--            type="button"-->
        <!--            class="shrink-0 bg-transparent border-0 cursor-pointer text-inherit opacity-40 text-14 px-2 leading-none transition-opacity duration-150 hover:opacity-80"-->
        <!--            title="Скрыть"-->
        <!--          >-->
        <!--            ✕-->
        <!--          </button>-->
        <!--        </div>-->
      </div>

      <div
        class="flex items-center gap-12 py-10 px-20 bg-surface-2 border-t border-border cursor-pointer select-none transition-colors duration-120 hover:bg-surface-3"
      >
        <span
          class="flex items-center text-text-3 transition-transform duration-200 shrink-0"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <span class="flex-1 text-13 font-semibold text-text tracking-[-0.01em]">
          Кредитные обязательства
        </span>

        <span
          class="font-secondary text-13 font-medium text-text whitespace-nowrap tracking-[-0.02em]"
        >
          −0 ₽
        </span>

        <span
          class="min-w-38 text-center font-secondary text-11 font-semibold text-text-2 bg-surface-3 rounded-6 px-8 py-3"
        >
          -
        </span>
      </div>

      <div
        class="collapsible flex items-center gap-12 py-10 px-20 bg-surface-2 border-t border-border cursor-pointer select-none transition-colors duration-120 hover:bg-surface-3"
      >
        <span
          class="bl-group-chevron flex items-center text-text-3 transition-transform duration-200 shrink-0"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <span class="flex-1 text-13 font-semibold text-text tracking-[-0.01em]">
          Конверты
        </span>

        <span
          class="font-secondary text-13 font-medium text-text whitespace-nowrap tracking-[-0.02em]"
        >
          −0 ₽
        </span>

        <span
          class="min-w-38 text-center font-secondary text-11 font-semibold text-text-2 bg-surface-3 rounded-6 px-8 py-3"
        >
          -
        </span>
      </div>

      <div
        class="collapsible flex items-center gap-12 py-10 px-20 bg-surface-2 border-t border-border cursor-pointer select-none transition-colors duration-120 hover:bg-surface-3"
      >
        <span
          class="flex items-center text-text-3 transition-transform duration-200 shrink-0"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <span class="flex-1 text-13 font-semibold text-text tracking-[-0.01em]">
          Прочие расходы
        </span>

        <span
          class="font-secondary text-13 font-medium text-text whitespace-nowrap tracking-[-0.02em]"
        >
          <span class="text-text-3 font-secondary">не указаны</span>
        </span>

        <span
          class="min-w-38 text-center font-secondary text-11 font-semibold text-text-2 bg-surface-3 rounded-6 px-8 py-3"
        >
          -
        </span>
      </div>

      <div
        class="flex items-center gap-12 py-13 pr-20 pb-13 pl-20 border-t border-border"
      >
        <span class="flex-1 text-14 font-semibold text-text tracking-[-0.01em]">
          Итого расходов
        </span>

        <span
          class="text-15 font-medium text-text whitespace-nowrap tracking-[-0.02em] flex items-center gap-10"
        >
          <span class="font-secondary">−0 ₽</span>

          <!--          <span-->
          <!--            class="text-10 font-semibold font-secondary rounded-6 bg-surface-3 border border-border px-8 py-3 text-text-2"-->
          <!--          >-->
          <!--            29% дохода-->
          <!--          </span>-->
        </span>
      </div>

      <div
        class="flex items-center gap-12 py-16 px-20 bg-accent-green-light border-t border-accent-green-border"
      >
        <span class="flex-1 text-14 font-semibold text-text tracking-[-0.01em]">
          Остаток — к инвестированию
        </span>

        <span
          class="text-18 font-medium text-accent-green whitespace-nowrap tracking-[-0.02em] flex items-center gap-10"
        >
          <span class="font-secondary">0 ₽</span>

          <!--          <span-->
          <!--            class="text-10 font-semibold rounded-6 bg-accent-green-border border border-accent-green-border px-8 py-3 text-accent-green"-->
          <!--          >-->
          <!--            <span class="font-secondary">71%</span>-->
          <!--          </span>-->
        </span>
      </div>
    </div>
  </div>
</template>
