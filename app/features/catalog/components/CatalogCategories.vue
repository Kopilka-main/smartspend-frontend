<script setup lang="ts">
import { useSetCategories } from '~/queries/useSetCategories'

const { data } = useSetCategories()

const categories = computed(() => {
  return data.value
    ? [{ id: 'all', name: 'Все' }, ...data.value.data]
    : [{ id: 'all', name: 'Все' }]
})

const modelValue = defineModel<string>({ default: 'all' })
</script>

<template>
  <div class="flex flex-wrap items-center gap-8 pb-2">
    <button
      v-for="category in categories"
      :key="category.id"
      type="button"
      class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
      :class="{
        'border-text! bg-text! text-surface!': modelValue === category.id
      }"
      @click="modelValue = category.id"
    >
      {{ category.name }}

      <!--      <span class="opacity-[0.45] text-10 font-semibold ml-5">4</span>-->
    </button>
  </div>
</template>
