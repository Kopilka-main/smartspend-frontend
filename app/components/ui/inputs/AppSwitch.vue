<script setup lang="ts">
const modelValue = defineModel<boolean>({ default: false })
</script>

<template>
  <label class="toggle-wrap">
    <input v-model="modelValue" class="toggle-input" type="checkbox" />

    <span class="toggle-track">
      <span class="toggle-thumb" />
    </span>
  </label>
</template>
