<script setup lang="ts">
import { useAuthModal } from '~/features/home/composables/useAuthModal'
import { useQuizModal } from '~/features/home/composables/useQuizModal'

const authModal = useAuthModal()
const quizModal = useQuizModal()

const onSignUp = () => {
  authModal.patchOptions({
    attrs: {
      mode: 'sign-up'
    }
  })

  authModal.open()
}

const onOpenQuiz = () => {
  quizModal.open()
}
</script>

<template>
  <section class="relative overflow-hidden 900:pb-72 900:pt-88 py-56">
    <div
      class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(106,158,132,0.09)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(200,221,211,0.1)_0%,transparent_50%)]"
      aria-hidden="true"
    ></div>
    <div class="relative z-10 mx-auto max-w-[110rem] px-16 900:px-32">
      <div
        class="grid grid-cols-1 items-center gap-52 lg:grid-cols-[1fr_46rem]"
      >
        <div>
          <div
            class="mb-28 inline-flex items-center gap-7 rounded-full border border-accent-green-border bg-accent-green-light px-14 py-4 text-12 font-medium tracking-[-0.01em] text-accent-green before:inline-block before:h-5 before:w-5 before:shrink-0 before:rounded-full before:bg-accent-green before:content-['']"
          >
            Осознанное потребление
          </div>
          <h1
            class="mb-20 text-[clamp(38px,4.5vw,58px)] font-bold leading-[1.1] tracking-[-0.035em] text-text"
          >
            Зарплата пришла —<br />
            и сразу
            <em class="font-bold not-italic text-accent-green">ушла?</em>
          </h1>
          <p class="mb-32 max-w-460 text-16 leading-1.65 text-text-2">
            SmartSpend покажет, куда уходят деньги, и научит тратить так, чтобы
            капитал рос — без жертв и без боли.
          </p>
          <div class="mb-48 flex flex-col 900:flex-row gap-10 w-max">
            <button
              type="button"
              class="rounded-10 bg-text px-24 h-40 text-14 font-medium tracking-[-0.01em] text-surface transition-opacity duration-150 hover:opacity-80"
              @click="onSignUp"
            >
              Создать аккаунт →
            </button>

            <button
              type="button"
              class="rounded-10 border border-border bg-surface px-22 h-40 text-14 font-medium tracking-[-0.01em] text-text-2 transition-colors duration-150 hover:bg-surface-2 hover:text-text"
              @click="onOpenQuiz"
            >
              Пройти тест (2 мин)
            </button>
          </div>
        </div>

        <div class="hidden lg:block relative">
          <div
            class="overflow-hidden rounded-14 border border-border bg-surface shadow-app-900"
          >
            <div
              class="flex items-center gap-6 border-b border-border bg-surface-2 px-16 py-10"
            >
              <div class="h-8 w-8 rounded-full bg-[#F2BDB3]"></div>
              <div class="h-8 w-8 rounded-full bg-[#F2DDB3]"></div>
              <div class="h-8 w-8 rounded-full bg-[#B3D4C4]"></div>
              <span
                class="ml-6 font-secondary text-11 tracking-[-0.01em] text-text-3"
                >SmartSpend / Профиль</span
              >
            </div>
            <div class="flex flex-col gap-10 p-18">
              <div class="rounded-10 border border-border bg-surface-2 p-14">
                <div
                  class="mb-5 text-10 font-medium uppercase tracking-[0.05em] text-text-3"
                >
                  Капитал
                </div>
                <div
                  class="mb-10 font-secondary text-24 font-medium leading-none tracking-[-0.03em] text-text"
                >
                  186 400 ₽
                </div>
                <div class="flex flex-wrap gap-6">
                  <span
                    class="rounded-6 border border-accent-green-border bg-accent-green-light px-8 py-3 text-10 font-medium tracking-[-0.01em] text-accent-green"
                    >↑ +4.2% за месяц</span
                  >
                  <span
                    class="rounded-6 border border-border bg-surface-3 px-8 py-3 text-10 font-medium tracking-[-0.01em] text-text-3"
                    >EmoSpend: 8 200 ₽</span
                  >
                </div>
              </div>

              <div class="flex flex-col gap-5">
                <div
                  class="flex items-center gap-8 rounded-8 border border-border bg-surface-2 px-10 py-9"
                >
                  <div
                    class="flex h-24 w-24 shrink-0 items-center justify-center rounded-6 border border-accent-green-border bg-accent-green-light"
                  >
                    <svg
                      class="h-11 w-11"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#6A9E84"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      aria-hidden="true"
                    >
                      <path d="M1 3h10M1 6h6M1 9h4"></path>
                    </svg>
                  </div>
                  <span
                    class="flex-1 text-11 font-medium tracking-[-0.01em] text-text"
                    >Smart-база</span
                  >
                  <div class="text-right">
                    <div
                      class="font-secondary text-11 font-medium leading-none tracking-[-0.01em] text-text"
                    >
                      22 000 ₽
                    </div>
                    <div class="mt-px text-10 text-text-3">из 22 000 ₽</div>
                  </div>
                </div>
                <div class="my-2 h-2 overflow-hidden rounded-2 bg-border">
                  <div class="h-full w-full rounded-2 bg-accent-green"></div>
                </div>
                <div
                  class="flex items-center gap-8 rounded-8 border border-border bg-surface-2 px-10 py-9"
                >
                  <div
                    class="flex h-24 w-24 shrink-0 items-center justify-center rounded-6 border border-accent-green-border bg-accent-green-light"
                  >
                    <svg
                      class="h-11 w-11"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#6A9E84"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      aria-hidden="true"
                    >
                      <circle cx="6" cy="6" r="4.5"></circle>
                      <path d="M6 3.5v2.5l2 1"></path>
                    </svg>
                  </div>
                  <span
                    class="flex-1 text-11 font-medium tracking-[-0.01em] text-text"
                    >Инвестиционное ядро</span
                  >
                  <div class="text-right">
                    <div
                      class="font-secondary text-11 font-medium leading-none tracking-[-0.01em] text-text"
                    >
                      40 000 ₽
                    </div>
                    <div class="mt-px text-10 text-text-3">накоплено</div>
                  </div>
                </div>
                <div class="my-2 h-2 overflow-hidden rounded-2 bg-border">
                  <div class="h-full w-[72%] rounded-2 bg-accent-green"></div>
                </div>
              </div>

              <div class="grid 900:grid-cols-3 grid-cols-1 gap-5">
                <div
                  class="rounded-7 border border-[#F2C9B8] bg-[#FFF8F4] px-9 py-7"
                >
                  <div
                    class="mb-2 text-10 font-medium tracking-[-0.01em] text-text"
                  >
                    Протеин
                  </div>
                  <div
                    class="font-secondary text-10 font-medium text-[#C06040]"
                  >
                    2 дня
                  </div>
                </div>
                <div
                  class="rounded-7 border border-border bg-surface-2 px-9 py-7"
                >
                  <div
                    class="mb-2 text-10 font-medium tracking-[-0.01em] text-text"
                  >
                    Шампунь
                  </div>
                  <div class="font-secondary text-10 font-medium text-text-3">
                    8 дней
                  </div>
                </div>
                <div
                  class="rounded-7 border border-border bg-surface-2 px-9 py-7"
                >
                  <div
                    class="mb-2 text-10 font-medium tracking-[-0.01em] text-text"
                  >
                    Кроссовки
                  </div>
                  <div class="font-secondary text-10 font-medium text-text-3">
                    42 дня
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="absolute -bottom-14 -right-18 flex items-center gap-10 rounded-12 border border-border bg-surface px-14 py-10 shadow-app-900"
          >
            <div
              class="flex h-30 w-30 shrink-0 items-center justify-center rounded-8 border border-accent-green-border bg-accent-green-light"
            >
              <svg
                class="h-13 w-13"
                viewBox="0 0 14 14"
                fill="none"
                stroke="#6A9E84"
                stroke-width="1.5"
                stroke-linecap="round"
                aria-hidden="true"
              >
                <polyline points="2,9 5,5 8,7 12,3"></polyline>
              </svg>
            </div>
            <div>
              <div class="text-10 text-text-3">Пассивный доход</div>
              <div
                class="font-secondary text-14 font-semibold leading-tight tracking-[-0.02em] text-accent-green"
              >
                4 400 ₽/мес
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
