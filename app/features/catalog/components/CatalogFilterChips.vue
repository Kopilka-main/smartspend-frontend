<script setup lang="ts">
const sourceModel = defineModel('source', { default: 'all' })
const setTypeModel = defineModel('setType', { default: 'all' })
const sortModel = defineModel('sort', { default: 'popular' })
</script>

<template>
  <div class="mt-10 flex flex-wrap items-center gap-8 justify-between">
    <div class="flex flex-wrap items-center gap-8">
      <div class="inline-flex rounded-8 border border-border bg-surface p-3">
        <button
          type="button"
          class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
          :class="{
            'border-border! bg-surface-2! text-text! shadow-app-sm!':
              setTypeModel === 'all'
          }"
          @click="setTypeModel = 'all'"
        >
          Все
        </button>

        <button
          type="button"
          class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
          :class="{
            'border-border! bg-surface-2! text-text! shadow-app-sm!':
              setTypeModel === 'base'
          }"
          @click="setTypeModel = 'base'"
        >
          Основа
        </button>

        <button
          type="button"
          class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
          :class="{
            'border-border! bg-surface-2! text-text! shadow-app-sm!':
              setTypeModel === 'custom'
          }"
          @click="setTypeModel = 'custom'"
        >
          Дополнение
        </button>
      </div>

      <div class="inline-flex rounded-8 border border-border bg-surface p-3">
        <button
          type="button"
          class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
          :class="{
            'border-border! bg-surface-2! text-text! shadow-app-sm!':
              sourceModel === 'all'
          }"
          @click="sourceModel = 'all'"
        >
          Все источники
        </button>

        <button
          type="button"
          class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
          :class="{
            'border-border! bg-surface-2! text-text! shadow-app-sm!':
              sourceModel === 'smartspend'
          }"
          @click="sourceModel = 'smartspend'"
        >
          SmartSpend
        </button>

        <button
          type="button"
          class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
          :class="{
            'border-border! bg-surface-2! text-text! shadow-app-sm!':
              sourceModel === 'community'
          }"
          @click="sourceModel = 'community'"
        >
          Сообщество
        </button>

        <button
          type="button"
          class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
          :class="{
            'border-border! bg-surface-2! text-text! shadow-app-sm!':
              sourceModel === 'own'
          }"
          @click="sourceModel = 'own'"
        >
          Мои
        </button>

        <button
          type="button"
          class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
          :class="{
            'border-border! bg-surface-2! text-text! shadow-app-sm!':
              sourceModel === 'liked'
          }"
          @click="sourceModel = 'liked'"
        >
          Понравившиеся
        </button>
      </div>
    </div>

    <div class="inline-flex rounded-8 border border-border bg-surface p-3">
      <button
        type="button"
        class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
        :class="{
          'border-border! bg-surface-2! text-text! shadow-app-sm!':
            sortModel === 'popular'
        }"
        @click="sortModel = 'popular'"
      >
        По популярности
      </button>

      <button
        type="button"
        class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
        :class="{
          'border-border! bg-surface-2! text-text! shadow-app-sm!':
            sortModel === 'newest'
        }"
        @click="sortModel = 'newest'"
      >
        Сначала новые
      </button>
    </div>
  </div>
</template>
