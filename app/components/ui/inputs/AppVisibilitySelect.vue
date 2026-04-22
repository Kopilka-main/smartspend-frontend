<script setup lang="ts">
const modelValue = defineModel<string>({ default: 'all' })

const items = [
  { value: 'all', label: 'Все' },
  { value: 'followers', label: 'Подписчики' },
  { value: 'only_me', label: 'Только я' }
]
</script>

<template>
  <div class="vis-select">
    <button
      v-for="item in items"
      :key="item.value"
      :class="`vis-btn${modelValue === item.value ? ' active' : ''}`"
      @click="modelValue = item.value"
    >
      {{ item.label }}
    </button>
  </div>
</template>
