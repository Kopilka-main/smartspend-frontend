<script setup lang="ts">
import { useSetCategories } from '~/queries/useSetCategories'

const modelValue = defineModel<string>()

const { data } = useSetCategories()

const categories = computed(() => {
  return data.value ? data.value.data : []
})
</script>

<template>
  <div class="grid grid-cols-1 gap-12">
    <div class="text-11 font-semibold uppercase tracking-[-0.05em] text-text-3">
      Категория
    </div>

    <div class="flex flex-wrap items-center gap-8 pb-2">
      <button
        v-for="category in categories"
        :key="category.id"
        type="button"
        class="h-30 rounded-full border border-border bg-surface-2 px-12 text-12 text-text-2 hover:bg-surface hover:text-text"
        :class="{ 'bg-surface! text-text!': modelValue === category.id }"
        @click="modelValue = category.id"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>
