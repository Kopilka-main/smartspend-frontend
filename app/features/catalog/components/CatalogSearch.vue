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
  <div class="mt-10">
    <div class="relative max-w-340">
      <svg
        class="pointer-events-none absolute left-10 top-1/2 h-14 w-14 -translate-y-1/2 text-text-3"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="M21 21l-4.35-4.35"></path>
      </svg>

      <input
        v-model="query"
        type="text"
        placeholder="Поиск по составу набора..."
        class="h-32 w-full rounded-10 border border-border bg-surface pl-34 pr-12 text-12 text-text outline-hidden placeholder:text-text-3 focus:border-accent-green"
      />
    </div>
  </div>
</template>
