<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex items-baseline mb-12">
      <span class="text-14 font-semibold text-text-2 tracking-[-0.01em]">
        Капитал и свободные расходы
      </span>
    </div>

    <div class="bg-surface rounded-16 shadow-main overflow-hidden">
      <div
        class="flex items-start justify-between px-24 pt-24 pb-20 border-b border-border"
      >
        <div>
          <div
            class="text-12 font-medium uppercase tracking-[0.06em] text-text-3"
          >
            Размер капитала
          </div>
          <div
            class="font-secondary text-36 font-medium tracking-[-0.02em] leading-none mt-6 text-text"
          >
            186&nbsp;400 ₽
          </div>

          <div class="mt-8 flex items-center gap-10 flex-wrap">
            <span class="text-12 text-text-3"> Обновлено: </span>
            <span
              class="text-11 text-text-3 px-8 py-3 rounded-6 bg-surface-2 border border-border"
            >
              Рекомендуется обновлять раз в год
            </span>
          </div>
        </div>
      </div>

      <div class="px-24 py-20 flex flex-col gap-0">
        <div>
          <div class="text-16 font-bold tracking-[-0.02em] text-text">
            EmoSpend
          </div>
          <div class="text-12 text-text-3 mt-3">
            Покупки на повседневные желания без вреда для роста капитала
          </div>
        </div>

        <div class="grid grid-cols-2 gap-10 mt-16">
          <div
            class="p-16 rounded-12 bg-accent-green-light border border-accent-green-border"
          >
            <div
              class="text-11 font-medium tracking-[0.05em] uppercase text-accent-green"
            >
              В месяц
            </div>
            <div
              class="font-secondary text-22 font-medium tracking-[-0.02em] mt-6 leading-none text-accent-green-dark"
            >
              1&nbsp;553 ₽
            </div>
            <div class="text-11 mt-3 text-accent-green-slight">
              можно потратить
            </div>
          </div>

          <div class="p-16 rounded-12 bg-surface-2 border border-border">
            <div
              class="text-11 font-medium tracking-[0.05em] uppercase text-text-3"
            >
              В год
            </div>
            <div
              class="font-secondary text-22 font-medium tracking-[-0.02em] mt-6 leading-none text-text"
            >
              18&nbsp;640 ₽
            </div>
            <div class="text-11 mt-3 text-text-3">10% от капитала</div>
          </div>
        </div>

        <div class="flex items-center gap-8 flex-wrap mt-16">
          <span class="text-13 text-text-2 flex-1 min-w-90">
            Уровень удовольствия:
          </span>

          <div class="flex gap-4">
            <button
              type="button"
              class="min-w-44 flex flex-col items-center gap-1 px-10 py-5 rounded-8 bg-surface-2 border border-border text-text-2 hover:bg-surface-3 hover:text-text"
            >
              <!-- bg-accent-blue-bg border-accent-blue-border text-white -->
              <span class="font-secondary text-12 font-semibold"> 4% </span>
              <span class="text-9 tracking-[0.04em] uppercase opacity-60">
                low
              </span>
            </button>

            <!-- bg-accent-emerald-bg border-accent-emerald-border text-white -->
            <button
              type="button"
              class="min-w-44 flex flex-col items-center gap-1 px-10 py-5 rounded-8 bg-surface-2 border border-border text-text-2 hover:bg-surface-3 hover:text-text"
            >
              <span class="font-secondary text-12 font-semibold"> 5% </span>
              <span class="text-9 tracking-[0.04em] uppercase opacity-60">
                medium
              </span>
            </button>

            <!-- bg-accent-orange-bg border-accent-orange-border text-white -->
            <button
              type="button"
              class="min-w-44 flex flex-col items-center gap-1 px-10 py-5 rounded-8 bg-surface-2 border border-border text-text-2 hover:bg-surface-3 hover:text-text"
            >
              <span class="font-secondary text-12 font-semibold"> 7% </span>
              <span class="text-9 tracking-[0.04em] uppercase opacity-60">
                high
              </span>
            </button>

            <!-- bg-accent-brown-bg border-accent-brown-border text-white -->
            <button
              type="button"
              class="min-w-44 flex flex-col items-center gap-1 px-10 py-5 rounded-8 bg-accent-brown-bg border border-accent-brown-border text-white"
            >
              <span class="font-secondary text-12 font-semibold"> 10% </span>
              <span class="text-9 tracking-[0.04em] uppercase opacity-70">
                extra
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="px-24 py-20 border-t border-border">
        <div
          class="text-12 font-medium uppercase tracking-[0.06em] text-text-3 mb-14"
        >
          Прогноз накоплений · без учёта доходности
        </div>

        <div class="flex gap-16 mb-14">
          <span class="flex items-center gap-6 text-12 text-text-2">
            <span class="inline-block w-10 h-3 rounded-2 bg-[#8DBFA8]"></span>
            Капитал
          </span>
          <span class="flex items-center gap-6 text-12 text-text-2">
            <span class="inline-block w-10 h-3 rounded-2 bg-[#D4C9B8]"></span>
            EmoSpend / мес
          </span>
        </div>

        <div class="w-full">
          <canvas height="220" width="740" class="w-full h-220"></canvas>
        </div>

        <div
          class="mt-16 grid grid-cols-3 gap-10 p-16 border-t border-accent-green-border bg-accent-green-light rounded-b-16 -mx-24 -mb-20"
        >
          <div class="flex flex-col gap-4">
            <span class="text-11 text-text-3"> Капитал через 10 лет </span>
            <span class="font-secondary text-14 font-medium text-accent-green">
              7&nbsp;786&nbsp;378 ₽
            </span>
            <span
              class="font-secondary text-10 text-[#C05050] mt-2 font-medium"
            >
              −2&nbsp;600&nbsp;022 ₽ от базовой
            </span>
          </div>

          <div class="flex flex-col gap-4">
            <span class="text-11 text-text-3">
              EmoSpend / мес через 10 лет
            </span>
            <span class="font-secondary text-14 font-medium text-accent-green">
              64&nbsp;886 ₽
            </span>
          </div>

          <div class="flex flex-col gap-4">
            <span class="text-11 text-text-3"> Пополнение за 10 лет </span>
            <span class="font-secondary text-14 font-medium text-text">
              +10&nbsp;200&nbsp;000 ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
