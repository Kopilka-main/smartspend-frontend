<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

type OptionItem = {
  label: string
  value: string
}

const modelValue = defineModel<string>({ default: 'popular' })

const isOpened = ref(false)

const options: OptionItem[] = [
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

const onSelectOption = (option: OptionItem) => {
  modelValue.value = option.value
  isOpened.value = false
}

const dropdownElem = useTemplateRef('dropdownElem')

onClickOutside(dropdownElem, () => {
  isOpened.value = false
})
</script>

<template>
  <div class="sort-wrap">
    <span class="sort-label-txt">Сортировка:</span>

    <button
      :class="`sort-btn${isOpened ? ' open' : ''}${modelValue !== 'popular' ? ' active' : ''}`"
      @click="isOpened = !isOpened"
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

    <div ref="dropdownElem" :class="`sort-dropdown${isOpened ? ' open' : ''}`">
      <div
        v-for="option in options"
        :key="option.value"
        :class="`sort-option${modelValue === option.value ? ' active' : ''}`"
        @click="onSelectOption(option)"
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
