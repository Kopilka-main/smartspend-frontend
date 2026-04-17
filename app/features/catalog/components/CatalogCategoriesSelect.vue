<script setup lang="ts">
import { useSetCategories } from '~/queries/useSetCategories'

import type { SetCategory } from '~/types'

const { data: categoriesData } = useSetCategories()

const categories = computed(() => {
  return categoriesData.value ? categoriesData.value.data : []
})

const modelValue = defineModel<SetCategory[]>({ default: () => [] })

const selectableCategories = computed(() => {
  return categories.value.filter(
    (category) => !modelValue.value.find((c) => c.id === category.id)
  )
})

const isOpened = ref(false)

const isSelectedCategory = (category: SetCategory) => {
  return !!modelValue.value.find((c) => c.id === category.id)
}

const onSelectCategory = (category: SetCategory) => {
  modelValue.value.push(category)
}

const dropdownElem = useTemplateRef('dropdownElem')

onClickOutside(dropdownElem, () => {
  isOpened.value = false
})
</script>

<template>
  <div class="fsel-wrap">
    <div class="fsel-bar">
      <button
        v-for="category in modelValue"
        :key="category.id"
        class="fsel-chip"
      >
        {{ category.name }}

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

      <button
        :class="`fsel-btn${isOpened ? ' open' : ''}`"
        @click="isOpened = !isOpened"
      >
        <span v-if="modelValue.length === 0">Категории</span>

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

    <div v-if="isOpened" ref="dropdownElem" class="fsel-panel">
      <button
        v-if="modelValue.length"
        class="fsel-clear"
        @click="modelValue = []"
      >
        Сбросить выбор
      </button>

      <button
        v-for="category in selectableCategories"
        :key="category.id"
        :class="`fsel-option${isSelectedCategory(category) ? ' active' : ''}`"
        @click="onSelectCategory(category)"
      >
        {{ category.name }}

        <svg
          v-if="isSelectedCategory(category)"
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
