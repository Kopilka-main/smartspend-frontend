<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Лента'
})
</script>

<template>
  <div>
    <main class="min-w-0 w-full max-w-860 mx-auto">
      <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
        <!-- Inner -->
        <!-- Head -->
        <div class="flex flex-col gap-16 pb-4">
          <div class="flex flex-col gap-5">
            <div
              class="flex items-center gap-10 text-26 font-bold leading-none tracking-[-0.03em]"
            >
              Лента
              <button
                type="button"
                class="w-22 h-22 rounded-full bg-surface-2 border-1.5 border-border text-text-3 text-12 font-bold font-secondary inline-flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-150 leading-none hover:border-accent-green hover:text-accent-green hover:bg-accent-green-light"
                title="Как устроена страница"
              >
                ?
              </button>
            </div>
          </div>

          <div class="">
            <div
              class="sticky border-b-1 px-16 900:px-32 -mx-16 900:-mx-32 border-border pb-12 top-12 z-20"
            >
              <div class="">
                <div class="flex flex-wrap items-center gap-8 pb-2">
                  <button
                    type="button"
                    class="h-30 rounded-full border border-text bg-text px-12 text-12 font-medium text-surface"
                  >
                    Все
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Еда и Супермаркеты
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Кафе, Бары, Рестораны
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Авто и Транспорт
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Дом и Техника
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Одежда и Обувь
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Развлечения и Хобби
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Красота и Здоровье
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Образование и Дети
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Путешествия и Отдых
                  </button>
                  <button
                    type="button"
                    class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                  >
                    Прочие расходы
                  </button>
                </div>

                <div class="mt-10 flex flex-wrap items-center gap-8">
                  <div
                    class="inline-flex rounded-8 border border-border bg-surface p-3"
                  >
                    <button
                      type="button"
                      class="rounded-6 bg-surface-2 border-1 border-border px-10 py-4 text-12 font-medium text-text shadow-app-sm"
                    >
                      Все
                    </button>
                    <button
                      type="button"
                      class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
                    >
                      Статьи
                    </button>
                    <button
                      type="button"
                      class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
                    >
                      Купоны
                    </button>
                  </div>

                  <div class="flex-1"></div>

                  <div
                    class="relative z-10 flex justify-between mr-0 w-full md:w-max items-center gap-8"
                  >
                    <span class="text-12 text-text-3">Сортировка:</span>
                    <button
                      type="button"
                      class="inline-flex h-28 items-center gap-6 rounded-8 border border-border bg-surface px-10 text-12 text-text-2 hover:text-text hover:bg-surface-2"
                    >
                      <span class="font-medium">За 7 дней</span>
                      <svg
                        class="shrink-0"
                        width="12"
                        height="12"
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
                      class="absolute feed-sort-dropdown-panel rounded-10 border border-border bg-surface p-8 shadow-app-md"
                    >
                      <div>
                        <div
                          class="px-8 pb-6 text-10 uppercase tracking-[0.03em] text-text-3"
                        >
                          Новизна
                        </div>
                        <div
                          class="flex items-center justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                        >
                          <span>Сначала новые</span>
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
                      </div>

                      <div class="my-8 h-1 bg-border"></div>

                      <div>
                        <div
                          class="px-8 pb-6 text-10 uppercase tracking-[0.03em] text-text-3"
                        >
                          По популярности
                        </div>
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
                  <div
                    class="sm:hidden z-9 relative flex justify-between mr-0 w-full md:w-max items-center gap-8"
                  >
                    <span class="text-12 text-text-3">Фильтры:</span>
                    <button
                      type="button"
                      class="inline-flex h-28 items-center gap-6 rounded-8 border border-border bg-surface px-10 text-12 text-text-2 hover:text-text hover:bg-surface-2"
                    >
                      <span class="font-medium">За 7 дней</span>
                      <svg
                        class="shrink-0"
                        width="12"
                        height="12"
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
                      class="absolute feed-sort-dropdown-panel rounded-10 border border-border bg-surface p-8 shadow-app-md"
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

                <div class="mt-10">
                  <div
                    class="hidden sm:inline-flex rounded-8 border border-border bg-surface p-3"
                  >
                    <button
                      type="button"
                      class="rounded-6 bg-surface-2 border-1 border-border px-10 py-4 text-12 font-medium text-text shadow-app-sm"
                    >
                      Непрочитанное
                    </button>
                    <button
                      type="button"
                      class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
                    >
                      Подписки
                    </button>
                    <button
                      type="button"
                      class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
                    >
                      Мои наборы
                    </button>
                    <button
                      type="button"
                      class="rounded-6 px-10 py-5 text-12 text-text-2 hover:text-text"
                    >
                      Понравившиеся
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="max-h-500 -mx-16 900:-mx-32 custom-scroll overflow-y-auto"
            >
              <div class="pt-20 px-16 900:px-32">
                <div class="flex flex-col gap-12">
                  <!-- Feed list -->
                  <div class="flex flex-col gap-12">
                    <div class="flex items-center gap-10 text-12 text-text-3">
                      <span>4 материала</span>
                      <button
                        type="button"
                        class="rounded-6 border border-border bg-surface-2 px-8 py-4 text-11 text-text-2 hover:bg-surface-3 hover:text-text"
                      >
                        Сбросить
                      </button>
                    </div>

                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                    <article
                      class="rounded-14 border border-border bg-surface shadow-app-sm"
                    >
                      <div class="px-16 pt-14">
                        <div class="flex flex-col gap-10">
                          <div class="flex items-start justify-start gap-10">
                            <button
                              type="button"
                              class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
                            >
                              <span
                                class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
                              >
                                АС
                              </span>
                              <span
                                class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
                                >Анна Соколова</span
                              >
                            </button>
                            <span
                              class="pt-2 shrink-0 font-secondary text-11 text-text-3"
                              >3 д назад</span
                            >
                          </div>

                          <h3
                            class="text-16 font-semibold tracking-[-0.02em] text-text"
                          >
                            Капсульный гардероб: как выбрать базу и не
                            переплатить
                          </h3>
                        </div>

                        <p class="mt-8 text-13 leading-[1.45] text-text-2">
                          Разбираю набор «Базовый гардероб» по деталям — какие
                          бренды выбрать, где лучше соотношение цена/качество, и
                          почему 10 вещей лучше 40.
                        </p>
                      </div>

                      <div
                        class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
                      >
                        <div class="inline-flex items-center gap-10">
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
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
                            >
                              <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                              ></path>
                              <path
                                d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                              ></path>
                            </svg>
                            <span>204</span>
                          </button>
                          <button
                            type="button"
                            class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
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
                            >
                              <path
                                d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                              ></path>
                              <path
                                d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                              ></path>
                            </svg>
                            <span>0</span>
                          </button>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                          <span>47</span>
                        </div>

                        <div
                          class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>21&nbsp;700</span>
                        </div>

                        <div class="flex-1"></div>

                        <div
                          class="inline-flex items-center gap-5 text-11 tracking-[-0.01em] text-text-3"
                        >
                          <span
                            class="h-7 w-7 rounded-full bg-set-dot-slate"
                          ></span>
                          <span>Набор: Базовый гардероб</span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
