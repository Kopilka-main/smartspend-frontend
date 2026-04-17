<script setup lang="ts">
const modelValue = defineModel<string>({ default: 'popular' })

const isOpened = ref(false)

const options = [
  {
    label: 'По популярности',
    value: 'popular'
  },
  {
    label: 'Сначала новые',
    value: 'newest'
  }
]

const selectedOptionLabel = computed(() => {
  return (
    options.find((option) => option.value === modelValue.value)?.label || ''
  )
})
</script>

<template>
  <div class="sort-wrap">
    <span class="sort-label-txt">Сортировка:</span>

    <button
      :class="`sort-btn${isOpened ? ' open' : ''}${modelValue !== 'popular' ? ' active' : ''}`"
    >
      <span>{{ selectedOptionLabel || 'По популярности' }}</span>

      <svg
        class="sort-btn-chevron"
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

    <div :class="`sort-dropdown${isOpened ? ' open' : ''}`">
      <div
        v-for="option in options"
        :key="option.value"
        :class="`sort-option${modelValue === option.value ? ' active' : ''}`"
      >
        {{ option.label }}

        <svg
          class="sort-option-check"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  </div>
</template>
