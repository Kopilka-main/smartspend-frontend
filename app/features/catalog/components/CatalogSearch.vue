<script setup lang="ts">
const modelValue = defineModel<string>({ default: '' })
const query = ref('')

watchDebounced(
  query,
  () => {
    modelValue.value = query.value
  },
  { debounce: 500, maxWait: 1000 }
)
</script>

<template>
  <div class="catalog-search-wrap">
    <svg
      class="catalog-search-icon"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>

    <input
      v-model="query"
      class="catalog-search-input"
      type="text"
      placeholder="Поиск по составу набора..."
    />

    <button v-if="query" class="catalog-search-clear" @click="query = ''">
      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
