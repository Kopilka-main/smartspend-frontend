<script setup lang="ts">
const selectedItems = ref<any[]>([])
const selectableItems = ref<any[]>([])

const isOpened = ref(false)

const isSelectedItem = (item: any) => {
  return false
}
</script>

<template>
  <div class="fsel-wrap">
    <div class="fsel-bar">
      <button v-for="item in selectedItems" :key="item.value" class="fsel-chip">
        {{ item.label }}

        <svg
          width="9"
          height="9"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <line x1="2" y1="2" x2="8" y2="8" />
          <line x1="8" y1="2" x2="2" y2="8" />
        </svg>
      </button>

      <button :class="`fsel-btn${isOpened ? ' open' : ''}`">
        <span v-if="selectedItems.length === 0">Категории</span>

        <svg
          class="fsel-arrow"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>

    <div v-if="isOpened" class="fsel-panel">
      <button v-if="selectedItems.length" class="fsel-clear">
        Сбросить выбор
      </button>

      <button
        v-for="item in selectableItems"
        :key="item.value"
        :class="`fsel-option${isSelectedItem(item) ? ' active' : ''}`"
      >
        {{ item.label }}

        <svg
          v-if="isSelectedItem(item)"
          class="fsel-check"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>
    </div>
  </div>
</template>
