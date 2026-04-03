<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Инвентарь'
})
</script>

<template>
  <div>
    <main class="min-w-0 w-full max-w-[106rem] mx-auto">
      <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
        <!-- Inner -->

        <div class="flex flex-col gap-16 pb-4">
          <!-- Head -->
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-5">
              <div
                class="flex items-center gap-10 text-26 font-bold leading-none tracking-[-0.03em]"
              >
                Инвентарь
                <button
                  type="button"
                  class="w-22 h-22 rounded-full bg-surface-2 border-1.5 border-border text-text-3 text-12 font-bold font-secondary inline-flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-150 leading-none hover:border-accent-green hover:text-accent-green hover:bg-accent-green-light"
                  title="Как устроена страница"
                >
                  ?
                </button>
              </div>
              <div
                class="entry-subtitle text-[14px] text-text-2 mt-1.25 tracking-[-0.01em] leading-[1.4]"
              >
                0 позиций
              </div>
            </div>

            <button
              type="button"
              class="rounded-10 border items-center border-border bg-surface px-16 flex gap-6 h-35 text-14 font-medium tracking-[-0.01em] text-text-2 transition-colors duration-150 hover:bg-surface-2 hover:text-text"
            >
              <svg
                class="w-13 h-13"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                ></path>
                <path
                  d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                ></path>
              </svg>
              Редактировать
            </button>
          </div>

          <!-- Cards -->
          <ul class="grid grid-cols-1 900:grid-cols-[1.5fr_1fr] gap-12">
            <!-- Card 1 -->
            <li
              class="bg-status-urgent-bg border-[1.5px] border-status-urgent-border rounded-14 shadow-main py-20 px-22 cursor-pointer transition-[box-shadow,border-color] duration-150 flex flex-col justify-between hover:shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.03),0_0_0_2px_#e8c8c8]"
            >
              <div class="flex items-start justify-between">
                <div
                  class="font-secondary text-40 font-semibold tracking-[-0.04em] leading-none text-status-urgent"
                >
                  1
                </div>
                <div
                  class="w-36 h-36 rounded-10 bg-status-urgent flex items-center justify-center shrink-0"
                >
                  <svg
                    class="w-18 h-18"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div>
                <div
                  class="mt-10 text-13 font-semibold tracking-[-0.01em] text-status-urgent"
                >
                  нужно купить сейчас
                </div>
                <div
                  class="mt-4 font-secondary text-13 font-semibold tracking-[-0.01em] text-status-urgent"
                >
                  780 руб.
                </div>
                <div class="mt-2 text-11 text-status-urgent/60">
                  нажмите для фильтра
                </div>
              </div>
            </li>

            <!-- Card 2 -->
            <li
              class="bg-surface rounded-14 border-[1.5px] border-transparent shadow-main py-20 px-22 cursor-pointer transition-[box-shadow,border-color] duration-150 flex flex-col justify-between hover:shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.03),0_0_0_1px_#ead898]"
            >
              <div
                class="font-secondary text-40 font-semibold tracking-[-0.03em] leading-[1.1] text-status-soon"
              >
                0
              </div>
              <div class="text-12 text-text-3">заканчиваются скоро</div>
              <div class="text-11 text-text-3">нажмите для фильтра</div>
            </li>
          </ul>

          <!-- Filters -->
          <div
            class="w-max inline-flex items-center gap-6 rounded-8 border border-border bg-surface-2 px-12 py-6 text-12 text-text-2"
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
              <polygon
                points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
              ></polygon>
            </svg>
            <span>Фильтр: Срочно</span>
            <button
              type="button"
              class="inline-flex items-center gap-4 rounded-4 px-6 py-2 text-11 text-text-3 transition-colors duration-150 hover:bg-surface-3 hover:text-text"
            >
              <svg
                width="11"
                height="11"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                class="shrink-0"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span>Сбросить</span>
            </button>
          </div>

          <!-- Not found -->
          <div
            class="rounded-14 border border-border bg-surface px-18 py-24 900:py-48 900:px-24 text-center shadow-app-sm"
          >
            <div
              class="mx-auto mb-10 inline-flex h-40 w-40 items-center justify-center rounded-full bg-surface-2 text-text-3"
            >
              <svg
                class="w-20 h-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="1.5"
              >
                <polygon
                  points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                ></polygon>
              </svg>
            </div>
            <div class="text-14 font-semibold tracking-[-0.01em] text-text">
              Нет позиций с таким статусом
            </div>
            <div class="mt-4 text-13 text-text-3">
              Попробуйте сбросить фильтр
            </div>
            <button
              type="button"
              class="mt-12 inline-flex items-center justify-center rounded-8 border border-border bg-surface-2 px-12 py-7 text-13 font-medium text-text-2 transition-colors duration-150 hover:bg-surface-3 hover:text-text"
            >
              Показать все
            </button>
          </div>

          <!-- Items -->
          <div class="flex flex-col gap-16">
            <div class="bg-surface rounded-14 shadow-main">
              <!-- Items Head -->
              <div
                class="flex items-center gap-10 px-18 py-10 border-b border-border bg-surface-2"
              >
                <div class="w-3 h-18 rounded-2 shrink-0 bg-set-dot-mint"></div>
                <div
                  class="flex-1 text-13 font-semibold text-text tracking-[-0.01em]"
                >
                  Еда и Супермаркеты
                </div>
                <span
                  class="text-10 font-semibold text-status-urgent bg-status-urgent-bg border border-status-urgent-border rounded-6 px-7 py-0"
                  >Срочно</span
                >
                <span class="text-11 text-text-3 font-secondary">6 поз.</span>
              </div>

              <!-- Items List -->
              <ul class="flex flex-col">
                <li
                  class="bg-surface hover:bg-surface-2 transition-colors duration-120"
                >
                  <div
                    class="flex items-center gap-12 px-16 py-12 border-l-3 border-transparent"
                  >
                    <div class="relative w-44 h-44 shrink-0">
                      <svg
                        viewBox="0 0 44 44"
                        width="44"
                        height="44"
                        class="-rotate-90"
                      >
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#efeee9"
                          stroke-width="3.5"
                        ></circle>
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#5B8FD4"
                          stroke-width="3.5"
                          stroke-linecap="round"
                          stroke-dasharray="53.40707511102649 106.81415022205297"
                          stroke-dashoffset="0"
                        ></circle>
                      </svg>
                      <div
                        class="absolute inset-0 flex flex-col items-center justify-center leading-none"
                      >
                        <span class="font-secondary text-11 font-semibold"
                          >⏸</span
                        >
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div
                        class="text-14 font-semibold tracking-[-0.02em] truncate"
                      >
                        Протеин
                      </div>
                      <div class="flex items-center gap-4 mt-2">
                        <span class="text-12 tracking-[-0.01em] text-[#5B8FD4]"
                          >не активирован</span
                        >
                        <button
                          type="button"
                          class="inline-flex items-center gap-4 px-8 py-4 rounded-6 text-accent-green text-12 font-medium hover:opacity-80"
                        >
                          <svg
                            class="w-10 h-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                          Запустить
                        </button>
                      </div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      class="text-text-3 shrink-0 transition-transform duration-200"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                  <div class="max-h-0"></div>
                </li>

                <li
                  class="border-t border-border bg-surface hover:bg-surface-2 overflow-hidden transition-colors duration-120"
                >
                  <div
                    class="flex items-center gap-12 px-16 py-12 border-l-3 border-transparent"
                  >
                    <div class="relative w-44 h-44 shrink-0">
                      <svg
                        viewBox="0 0 44 44"
                        width="44"
                        height="44"
                        class="-rotate-90"
                      >
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#efeee9"
                          stroke-width="3.5"
                        ></circle>
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#5B8FD4"
                          stroke-width="3.5"
                          stroke-linecap="round"
                          stroke-dasharray="53.40707511102649 106.81415022205297"
                          stroke-dashoffset="0"
                        ></circle>
                      </svg>
                      <div
                        class="absolute inset-0 flex flex-col items-center justify-center leading-none"
                      >
                        <span
                          class="font-secondary text-11 font-semibold text-[#5B8FD4]"
                          >⏸</span
                        >
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div
                        class="text-14 font-semibold tracking-[-0.02em] truncate"
                      >
                        Куриная грудка
                      </div>
                      <div class="flex items-center gap-4 mt-2">
                        <span class="text-12 tracking-[-0.01em] text-[#5B8FD4]"
                          >не активирован</span
                        >
                        <button
                          type="button"
                          class="inline-flex items-center gap-4 px-8 py-4 rounded-6 text-accent-green text-12 font-medium hover:opacity-80"
                        >
                          <svg
                            class="w-10 h-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                          Запустить
                        </button>
                      </div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      class="text-text-3 shrink-0 transition-transform duration-200"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                  <div class="max-h-0"></div>
                </li>

                <!-- Opened Item -->
                <li
                  class="border-t border-border bg-surface-2 shadow-[inset_0_0_0_1.5px_#c8ddd3] relative z-2 overflow-hidden"
                >
                  <div
                    class="flex items-center gap-12 px-14 py-12 border-l-3 border-status-urgent"
                  >
                    <div class="relative w-44 h-44 shrink-0">
                      <svg
                        viewBox="0 0 44 44"
                        width="44"
                        height="44"
                        class="-rotate-90"
                      >
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#efeee9"
                          stroke-width="3.5"
                        ></circle>
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#b85555"
                          stroke-width="3.5"
                          stroke-linecap="round"
                          stroke-dasharray="106.81415022205297 106.81415022205297"
                          stroke-dashoffset="0"
                        ></circle>
                      </svg>
                      <div
                        class="absolute inset-0 flex flex-col items-center justify-center leading-none"
                      >
                        <span
                          class="font-secondary text-11 font-semibold text-status-urgent"
                          >0</span
                        >
                        <span class="font-secondary text-8 text-text-3 mt-1"
                          >дн</span
                        >
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div
                        class="text-14 font-semibold tracking-[-0.02em] truncate"
                      >
                        Греческий йогурт
                      </div>
                      <div
                        class="text-12 tracking-[-0.01em] mt-2 text-status-urgent font-semibold"
                      >
                        закончилось
                      </div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      class="text-text-3 shrink-0 transition-transform duration-200 rotate-180"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>

                  <div class="max-h-875">
                    <div class="px-16 pb-14">
                      <div
                        class="rounded-10 border border-border overflow-hidden"
                      >
                        <div
                          class="px-12 py-8 text-10 uppercase tracking-[0.04em] text-text-3 bg-surface"
                        >
                          Этот месяц
                        </div>
                        <div
                          class="px-12 py-10 bg-status-urgent-bg flex items-center justify-between gap-8"
                        >
                          <span
                            class="font-secondary text-16 font-semibold tracking-[-0.02em] text-status-urgent"
                            >780 руб.</span
                          >
                          <span class="text-12 text-text-3 tracking-[-0.01em]"
                            >нужно пополнить на
                            <strong class="text-text-2 font-semibold"
                              >3.9&nbsp;шт</strong
                            ></span
                          >
                        </div>
                      </div>

                      <div class="mt-12 flex items-start">
                        <div
                          class="flex-1 pr-14 border-r border-border flex flex-wrap gap-x-20 gap-y-10"
                        >
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Расход/день
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              0.13 шт
                            </div>
                          </div>
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Стоимость/день
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              26 руб.
                            </div>
                          </div>
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Потребность/мес.
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              4 шт
                            </div>
                          </div>
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Бюджет/мес.
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              800 руб.
                            </div>
                          </div>
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Цена за шт
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              200.00 руб.
                            </div>
                          </div>
                        </div>
                        <div class="pl-14 w-200">
                          <div
                            class="text-11 text-text-3 tracking-[-0.01em] mb-8"
                          >
                            Текущий остаток (шт)
                          </div>
                          <div
                            class="h-36 rounded-10 border border-border bg-surface flex items-center overflow-hidden"
                          >
                            <button
                              type="button"
                              class="bg-accent-green w-40 flex-none h-full text-14 font-medium text-surface hover:opacity-80"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              value="0"
                              class="w-full bg-transparent border-0 outline-hidden text-center font-secondary text-14 font-medium text-text [appearance:textfield]"
                            />
                            <span class="text-11 text-text-3 px-8">шт</span>
                            <button
                              type="button"
                              class="w-40 bg-accent-green flex-none h-full text-14 font-medium text-surface hover:opacity-80"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <div
                        class="mt-12 px-12 py-10 rounded-8 border border-border text-12 text-text-3 flex items-center gap-8 hover:text-accent-green cursor-pointer"
                      >
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                        >
                          <path
                            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                          ></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        Добавить заметку...
                      </div>
                      <div class="mt-10 flex items-center gap-6 text-12">
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          class="opacity-40 shrink-0"
                        >
                          <path
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          ></path>
                        </svg>
                        <span class="text-text-3">Набор:</span>
                        <a
                          href="#/set/s10"
                          class="inline-flex items-center gap-4 text-accent-green font-medium hover:opacity-70"
                        >
                          Правильное питание v: 26-03-26
                          <svg
                            width="11"
                            height="11"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke-width="2.5"
                          >
                            <path d="M7 17L17 7M17 7H7M17 7v10"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <!-- Opened Item Notice add -->
                <li
                  class="border-t border-border bg-surface-2 shadow-[inset_0_0_0_1.5px_#c8ddd3] relative z-2 overflow-hidden"
                >
                  <div
                    class="flex items-center gap-12 px-14 py-12 border-l-3 border-status-urgent"
                  >
                    <div class="relative w-44 h-44 shrink-0">
                      <svg
                        viewBox="0 0 44 44"
                        width="44"
                        height="44"
                        class="-rotate-90"
                      >
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#efeee9"
                          stroke-width="3.5"
                        ></circle>
                        <circle
                          cx="22"
                          cy="22"
                          r="17"
                          fill="none"
                          stroke="#b85555"
                          stroke-width="3.5"
                          stroke-linecap="round"
                          stroke-dasharray="106.81415022205297 106.81415022205297"
                          stroke-dashoffset="0"
                        ></circle>
                      </svg>
                      <div
                        class="absolute inset-0 flex flex-col items-center justify-center leading-none"
                      >
                        <span
                          class="font-secondary text-11 font-semibold text-status-urgent"
                          >0</span
                        >
                        <span class="font-secondary text-8 text-text-3 mt-1"
                          >дн</span
                        >
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div
                        class="text-14 font-semibold tracking-[-0.02em] truncate"
                      >
                        Греческий йогурт
                      </div>
                      <div
                        class="text-12 tracking-[-0.01em] mt-2 text-status-urgent font-semibold"
                      >
                        закончилось
                      </div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      class="text-text-3 shrink-0 transition-transform duration-200 rotate-180"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>

                  <div class="max-h-875">
                    <div class="px-16 pb-14">
                      <div
                        class="rounded-10 border border-border overflow-hidden"
                      >
                        <div
                          class="px-12 py-8 text-10 uppercase tracking-[0.04em] text-text-3 bg-surface"
                        >
                          Этот месяц
                        </div>
                        <div
                          class="px-12 py-10 bg-status-urgent-bg flex items-center justify-between gap-8"
                        >
                          <span
                            class="font-secondary text-16 font-semibold tracking-[-0.02em] text-status-urgent"
                            >780 руб.</span
                          >
                          <span class="text-12 text-text-3 tracking-[-0.01em]"
                            >нужно пополнить на
                            <strong class="text-text-2 font-semibold"
                              >3.9&nbsp;шт</strong
                            ></span
                          >
                        </div>
                      </div>

                      <div class="mt-12 flex items-start">
                        <div
                          class="flex-1 pr-14 border-r border-border flex flex-wrap gap-x-20 gap-y-10"
                        >
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Расход/день
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              0.13 шт
                            </div>
                          </div>
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Стоимость/день
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              26 руб.
                            </div>
                          </div>
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Потребность/мес.
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              4 шт
                            </div>
                          </div>
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Бюджет/мес.
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              800 руб.
                            </div>
                          </div>
                          <div class="flex flex-col gap-2">
                            <div
                              class="text-10 uppercase tracking-[0.03em] text-text-3"
                            >
                              Цена за шт
                            </div>
                            <div class="text-12 font-secondary font-medium">
                              200.00 руб.
                            </div>
                          </div>
                        </div>
                        <div class="pl-16 w-200">
                          <div
                            class="text-11 text-text-3 tracking-[-0.01em] mb-8"
                          >
                            Текущий остаток (шт)
                          </div>
                          <div
                            class="h-36 rounded-10 border border-border bg-surface flex items-center overflow-hidden"
                          >
                            <button
                              type="button"
                              class="bg-accent-green w-40 flex-none h-full text-14 font-medium text-surface hover:opacity-80"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              value="0"
                              class="w-full bg-transparent border-0 outline-hidden text-center font-secondary text-14 font-medium text-text [appearance:textfield]"
                            />
                            <span class="text-11 text-text-3 px-8">шт</span>
                            <button
                              type="button"
                              class="w-40 bg-accent-green flex-none h-full text-14 font-medium text-surface hover:opacity-80"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Notes add -->
                      <div
                        class="mt-12 rounded-10 border border-border bg-surface-2 p-10"
                      >
                        <div
                          class="mb-8 inline-flex items-center gap-6 text-11 text-text-2 tracking-[-0.01em]"
                        >
                          <svg
                            width="12"
                            height="12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="shrink-0 opacity-50"
                          >
                            <path
                              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                            ></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                          </svg>
                          <span>Заметки</span>
                        </div>

                        <textarea
                          class="w-full min-h-80 resize-y rounded-8 border border-border bg-surface px-10 py-8 text-12 text-text outline-hidden placeholder:text-text-3 focus:border-accent-green"
                          placeholder="Добавьте заметку..."
                        ></textarea>

                        <div class="mt-10 flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-6 rounded-8 border-dashed border-1 hover:border-accent-green text-text-3 hover:text-accent-green border-border bg-transparent px-10 py-5 text-11 font-medium"
                          >
                            <svg
                              width="12"
                              height="12"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="shrink-0"
                            >
                              <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                              ></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <span>Добавить фото</span>
                          </button>

                          <div
                            class="relative h-56 w-56 overflow-hidden rounded-8 border border-border bg-surface"
                          >
                            <img
                              alt="07-scaled.jpg"
                              src="data:image/jpeg;base64,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"
                              class="h-full w-full object-cover"
                            />
                            <button
                              type="button"
                              class="absolute right-4 top-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-black/55 text-surface hover:bg-black/70"
                            >
                              <svg
                                width="9"
                                height="9"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                stroke-width="3"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          class="hidden"
                        />
                      </div>

                      <div class="mt-10 flex items-center gap-6 text-12">
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          class="opacity-40 shrink-0"
                        >
                          <path
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          ></path>
                        </svg>
                        <span class="text-text-3">Набор:</span>
                        <a
                          href="#/set/s10"
                          class="inline-flex items-center gap-4 text-accent-green font-medium hover:opacity-70"
                        >
                          Правильное питание v: 26-03-26
                          <svg
                            width="11"
                            height="11"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke-width="2.5"
                          >
                            <path d="M7 17L17 7M17 7H7M17 7v10"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div
          class="rounded-14 bg-surface px-20 py-14 shadow-app-sm flex items-center gap-20"
        >
          <div class="flex flex-col gap-2">
            <div class="text-13 tracking-[-0.01em] text-text-3">
              стоимость инвентаря
            </div>
            <div
              class="font-secondary text-20 font-semibold tracking-[-0.03em] text-text"
            >
              603&nbsp;₽
            </div>
          </div>
          <div class="ml-auto flex items-start gap-20">
            <div class="flex flex-col items-end gap-1">
              <span class="font-secondary text-13 font-medium text-text-2"
                >603&nbsp;₽</span
              >
              <span class="text-10 text-text-3">расходники</span>
            </div>
            <div class="flex flex-col items-end gap-1">
              <span class="font-secondary text-13 font-medium text-text-2"
                >0&nbsp;₽</span
              >
              <span class="text-10 text-text-3">вещи</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
