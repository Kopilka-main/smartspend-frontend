<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-12">
    <!-- Top -->
    <div class="flex items-baseline justify-between mb-12 gap-16">
      <span class="text-14 font-semibold text-text-2 tracking-[-0.01em]">
        Конверты и наборы
      </span>

      <button
        style="display: none"
        type="button"
        id="sp-btn-envelopes"
        class="flex items-center gap-5 text-12 font-medium text-text-2 bg-surface-2 border border-border rounded-20 px-12 py-5 cursor-pointer tracking-[-0.01em] transition-all duration-150 hover:text-text hover:bg-surface-3 hover:border-text-3"
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

      <button
        type="button"
        class="flex items-center gap-5 text-12 py-5 font-medium bg-accent-green-ulight border border-accent-green-border text-accent-green rounded-20 px-12 tracking-[-0.01em] hover:text-surface hover:bg-accent-green"
      >
        <svg
          class="w-11 h-11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Готово
      </button>
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-12">
      <div
        class="bg-surface rounded-16 shadow-main px-32 pt-36 pb-32 flex flex-col items-center text-center gap-16"
      >
        <div
          class="w-72 h-72 rounded-full bg-surface-2 flex items-center justify-center"
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="6"
              y="14"
              width="40"
              height="28"
              rx="5"
              fill="#f6f5f2"
              stroke="rgba(0, 0, 0, 0.07)"
              stroke-width="1.5"
            ></rect>
            <path
              d="M6 20l20 13 20-13"
              stroke="rgba(0, 0, 0, 0.07)"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
            <circle
              cx="38"
              cy="36"
              r="9"
              fill="#eeede9"
              stroke="rgba(0, 0, 0, 0.07)"
              stroke-width="1.5"
            ></circle>
            <path
              d="M38 32v4M38 38v.5"
              stroke="#4e8268"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>

        <div class="text-17 font-semibold text-text tracking-[-0.02em]">
          Конверты пока пусты
        </div>

        <div class="text-13 text-text-2 leading-[1.6] max-w-420">
          Добавьте готовые наборы из каталога — и SmartSpend автоматически
          рассчитает ваши расходы по категориям и покажет сколько откладывать
          каждый месяц.
        </div>

        <ul class="w-full max-w-400 mt-4 flex flex-col gap-10">
          <li
            class="flex items-start gap-12 bg-surface-2 rounded-10 px-12 py-14 text-left"
          >
            <div
              class="min-w-22 h-22 rounded-full bg-accent-green text-white text-12 font-bold flex items-center justify-center shrink-0"
            >
              1
            </div>
            <div class="text-12 text-text-2 leading-normal">
              Откройте каталог и выберите набор, подходящий вашему образу жизни
            </div>
          </li>

          <li
            class="flex items-start gap-12 bg-surface-2 rounded-10 px-12 py-14 text-left"
          >
            <div
              class="min-w-22 h-22 rounded-full bg-accent-green text-white text-12 font-bold flex items-center justify-center shrink-0"
            >
              2
            </div>
            <div class="text-12 text-text-2 leading-normal">
              Нажмите «Добавить в конверт» — набор появится в нужной категории
            </div>
          </li>

          <li
            class="flex items-start gap-12 bg-surface-2 rounded-10 px-12 py-14 text-left"
          >
            <div
              class="min-w-22 h-22 rounded-full bg-accent-green text-white text-12 font-bold flex items-center justify-center shrink-0"
            >
              3
            </div>
            <div class="text-12 text-text-2 leading-normal">
              Укажите доход в настройках — и система покажет, сколько остаётся
              на накопления
            </div>
          </li>
        </ul>

        <button
          type="button"
          class="mt-4 flex items-center gap-8 px-22 h-40 rounded-10 bg-accent-green text-white text-14 font-semibold border-0 cursor-pointer transition-opacity duration-150 hover:opacity-90"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
          </svg>
          Перейти в каталог
        </button>
      </div>

      <div
        class="mt-10 flex items-center justify-between px-20 py-16 bg-accent-green-light border border-accent-green-border rounded-16 shadow-main"
      >
        <span class="text-14 font-semibold text-text tracking-[-0.01em]">
          Итого в конвертах
        </span>
        <span class="font-secondary text-15 font-medium text-accent-green">
          0 ₽
          <span
            class="font-primary text-11 font-normal text-accent-green-slight"
            >/ месяц</span
          >
        </span>
      </div>
    </div>

    <!-- Content edited -->
    <div class="bg-surface rounded-16 shadow-main overflow-hidden">
      <div class="px-20 py-18 flex items-center gap-14">
        <div class="w-3 h-38 rounded-2 shrink-0 bg-[#b0a898]"></div>

        <div class="flex-1 min-w-0">
          <div class="text-15 font-semibold tracking-[-0.02em] text-text">
            Прочие расходы
          </div>
          <div class="mt-2 text-12 text-text-3">Нет наборов</div>
        </div>

        <div class="text-right shrink-0">
          <button
            type="button"
            class="hover:opacity-50 font-secondary text-20 font-medium tracking-[-0.02em] text-text"
          >
            —
          </button>
        </div>
      </div>

      <div class="px-18 py-14 border-t border-border bg-surface-2">
        <div
          class="flex items-start gap-8 px-14 pt-10 pb-8 text-12 text-text-3 leading-normal"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="shrink-0 mt-1 opacity-50"
            aria-hidden="true"
          >
            <polyline points="20 12 20 22 4 22 4 12"></polyline>
            <rect x="2" y="7" width="20" height="5"></rect>
            <path
              d="M12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
            ></path>
          </svg>
          <span>
            Например,
            <strong class="text-text-2 font-semibold">«Подарки близким»</strong>
            — незапланированные праздничные траты часто ломают бюджет
          </span>
        </div>

        <button
          type="button"
          class="w-full flex items-center gap-10 px-20 py-16 border-1.5 border-dashed border-border border-1 rounded-12 bg-transparent text-13 font-medium text-text-3 cursor-pointer transition-all duration-150 hover:border-[#8DBFA8] hover:bg-accent-green-light hover:text-accent-green"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14"></path>
          </svg>
          Добавить первый набор в этот конверт
        </button>
      </div>
    </div>
  </div>
</template>