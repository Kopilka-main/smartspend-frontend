<script setup lang="ts"></script>

<template>
  <section id="landing-features" class="py-48 900:py-72">
    <div class="mx-auto max-w-[110rem] px-16 900:px-32">
      <div
        class="mb-16 inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-4 text-11 font-semibold uppercase tracking-[0.06em] text-accent-green"
      >
        Инструменты
      </div>
      <h2
        class="mb-16 text-32 font-bold leading-[1.2] tracking-[-0.03em] text-text"
      >
        Что делает SmartSpend
      </h2>
      <p class="mb-40 max-w-325 text-15 leading-[1.6] text-text-2">
        Четыре инструмента, которые работают вместе как единая система.
      </p>

      <div class="grid grid-cols-1 gap-16 900:grid-cols-2">
        <div
          class="rounded-16 border border-border bg-surface p-28 shadow-main"
        >
          <div
            class="mb-16 flex h-36 w-36 items-center justify-center rounded-9 border border-accent-green-border bg-accent-green-light"
          >
            <svg
              class="h-16 w-16"
              viewBox="0 0 18 18"
              fill="none"
              stroke="#6A9E84"
              stroke-width="1.5"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="14" height="14" rx="3"></rect>
              <path d="M6 9h6M6 12h4M6 6h6"></path>
            </svg>
          </div>
          <h3 class="mb-8 text-15 font-semibold tracking-[-0.02em] text-text">
            Инвентарь вещей
          </h3>
          <p class="mb-16 text-13 leading-[1.6] text-text-2">
            Отслеживайте срок службы продуктов, косметики, одежды и техники.
            Больше не нужно держать это в голове — система помнит за вас.
          </p>
          <span
            class="inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-3 text-11 font-medium text-accent-green"
            >↑ Меньше просрочки и ненужных покупок</span
          >
        </div>

        <div
          class="rounded-16 border border-border bg-surface p-28 shadow-main"
        >
          <div
            class="mb-16 flex h-36 w-36 items-center justify-center rounded-9 border border-accent-green-border bg-accent-green-light"
          >
            <svg
              class="h-16 w-16"
              viewBox="0 0 18 18"
              fill="none"
              stroke="#6A9E84"
              stroke-width="1.5"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path d="M4 5h10M4 9h7M4 13h5"></path>
              <circle cx="14" cy="13" r="2.5"></circle>
              <path d="M13.3 13l.7.7 1.5-1.5"></path>
            </svg>
          </div>
          <h3 class="mb-8 text-15 font-semibold tracking-[-0.02em] text-text">
            Умный список покупок
          </h3>
          <p class="mb-16 text-13 leading-[1.6] text-text-2">
            Список обновляется автоматически на основе инвентаря. Сортировка по
            приоритету — сначала то, что нужно срочно.
          </p>
          <span
            class="inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-3 text-11 font-medium text-accent-green"
            >↑ Нулевой умственный ресурс на рутину</span
          >
        </div>

        <div
          class="rounded-16 border border-border bg-surface p-28 shadow-main"
        >
          <div
            class="mb-16 flex h-36 w-36 items-center justify-center rounded-9 border border-accent-green-border bg-accent-green-light"
          >
            <svg
              class="h-16 w-16"
              viewBox="0 0 18 18"
              fill="none"
              stroke="#6A9E84"
              stroke-width="1.5"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <polyline points="2,13 6,8 9,10 13,5 16,7"></polyline>
              <path d="M2 16h14"></path>
            </svg>
          </div>
          <h3 class="mb-8 text-15 font-semibold tracking-[-0.02em] text-text">
            Копилка (Smart-ядро)
          </h3>
          <p class="mb-16 text-13 leading-[1.6] text-text-2">
            Финансовый советник, который анализирует доходы и расходы, ведёт
            накопительные конверты и показывает путь к точке финансовой
            безопасности.
          </p>
          <span
            class="inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-3 text-11 font-medium text-accent-green"
            >↑ Капитал растёт предсказуемо</span
          >
        </div>

        <div
          class="rounded-16 border border-border bg-surface p-28 shadow-main"
        >
          <div
            class="mb-16 flex h-36 w-36 items-center justify-center rounded-9 border border-accent-green-border bg-accent-green-light"
          >
            <svg
              class="h-16 w-16"
              viewBox="0 0 18 18"
              fill="none"
              stroke="#6A9E84"
              stroke-width="1.5"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path d="M9 2a7 7 0 1 0 0 14A7 7 0 0 0 9 2z"></path>
              <path d="M9 6v3.5l2.5 1.5"></path>
            </svg>
          </div>
          <h3 class="mb-8 text-15 font-semibold tracking-[-0.02em] text-text">
            База знаний
          </h3>
          <p class="mb-16 text-13 leading-[1.6] text-text-2">
            Статьи об осознанном потреблении, финансовой грамотности и
            рациональном гедонизме — от экспертов, не от копирайтеров.
          </p>
          <span
            class="inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-3 text-11 font-medium text-accent-green"
            >↑ Понимаете систему, а не просто следуете</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
