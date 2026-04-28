<script setup lang="ts">
import { useCategories } from '~/composables/useCategories'
import { useEnvelopes } from '~/features/sets/composables/useEnvelopes'

import type { EnvelopeItem, SetCategory } from '~/types'

const { categories } = useCategories()
const { envelopes } = useEnvelopes()

const filteredCategories = computed(() => {
  return categories.value.filter((category) =>
    envelopes.value.find((envelope) => envelope.categoryId === category.id)
  )
})

const selectedCategory = defineModel<SetCategory | null>('category', {
  default: null
})

const onToggleCategory = (category: SetCategory) => {
  if (selectedCategory.value?.id === category.id) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = category
  }
}

const setsInCategory = computed(() => {
  return envelopes.value.filter(
    (item) => item.categoryId === selectedCategory.value?.id
  )
})

const selectedSet = ref<EnvelopeItem | null>(null)

const onToggleSet = (set: EnvelopeItem) => {
  if (selectedSet.value?.id === set.id) {
    selectedSet.value = null
  } else {
    selectedSet.value = set
  }
}
</script>

<template>
  <div class="inv-filters-row">
    <div class="inv-filter-group">
      <span class="inv-filter-label">Категория</span>

      <div class="inv-filter-chips">
        <button
          v-for="category in filteredCategories"
          :key="category.id"
          :class="`inv-filter-chip${selectedCategory?.id === category.id ? ' active' : ''}`"
          @click="onToggleCategory(category)"
        >
          {{ category.name }}

          <svg
            v-if="selectedCategory?.id === category.id"
            width="9"
            height="9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="selectedCategory && setsInCategory.length > 0"
      class="inv-filter-group"
    >
      <span class="inv-filter-label">Набор</span>

      <div class="inv-filter-chips">
        <button
          v-for="set in setsInCategory"
          :key="set.id"
          :class="`inv-filter-chip inv-filter-chip--set${selectedSet?.id === set.id ? ' active' : ''}`"
          @click="onToggleSet(set)"
        >
          {{ set.name }}

          <svg
            v-if="selectedSet?.id === set.id"
            width="9"
            height="9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
