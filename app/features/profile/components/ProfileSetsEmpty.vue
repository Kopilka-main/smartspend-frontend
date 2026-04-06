<script setup lang="ts">
const router = useRouter()

const onSwitchToCatalog = () => {
  router.push('/catalog')
}
</script>

<template>
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
      рассчитает ваши расходы по категориям и покажет сколько откладывать каждый
      месяц.
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
          Укажите доход в настройках — и система покажет, сколько остаётся на
          накопления
        </div>
      </li>
    </ul>

    <button
      type="button"
      class="mt-4 flex items-center gap-8 px-22 h-40 rounded-10 bg-accent-green text-white text-14 font-semibold border-0 cursor-pointer transition-opacity duration-150 hover:opacity-90"
      @click="onSwitchToCatalog"
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
</template>
