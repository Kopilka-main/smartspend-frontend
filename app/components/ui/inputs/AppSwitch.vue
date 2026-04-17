<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
</script>

<template>
  <label
    class="relative inline-flex h-24 w-42 shrink-0 cursor-pointer items-center"
  >
    <input v-model="model" type="checkbox" class="peer sr-only" />

    <span
      class="absolute inset-0 rounded-full border border-border bg-surface-2 transition-colors peer-checked:border-accent-green peer-checked:bg-accent-green"
    />

    <span
      class="absolute left-3 h-18 w-18 rounded-full bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.14)] transition-transform peer-checked:translate-x-18"
    />
  </label>
</template>
