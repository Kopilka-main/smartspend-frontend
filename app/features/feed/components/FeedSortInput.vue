<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const modelValue = defineModel({ default: 'popular_7d' })
const isOpened = ref(false)
const dropdownElem = useTemplateRef('dropdownElem')

const SORT_OPTIONS = [
  {
    group: 'Новизна',
    value: 'newest',
    label: 'Сначала новые'
  },
  {
    group: 'По популярности',
    value: 'popular_7d',
    label: 'За 7 дней'
  },
  {
    group: 'По популярности',
    value: 'popular_30d',
    label: 'За месяц'
  },
  {
    group: 'По популярности',
    value: 'popular_all',
    label: 'За всё время'
  }
]

const current = computed(() => {
  return SORT_OPTIONS.find((o) => o.value === modelValue.value)
})

const groups = computed(() => {
  return [...new Set(SORT_OPTIONS.map((o) => o.group))]
})

const getOptions = (group: string) => {
  return SORT_OPTIONS.filter((o) => o.group === group)
}

const onSelectOption = (value: string) => {
  modelValue.value = value
  isOpened.value = false
}

onClickOutside(dropdownElem, () => {
  isOpened.value = false
})
</script>

<template>
  <div class="sort-wrap">
    <span class="sort-label-txt">Сортировка:</span>

    <button
      :class="`sort-btn${isOpened ? ' open' : ''}${modelValue !== 'popular_7d' ? ' active' : ''}`"
      @click="isOpened = !isOpened"
    >
      <span>
        {{
          current?.group === 'По популярности'
            ? `По популярности
        ${current.label.toLowerCase()}`
            : current?.label
        }}
      </span>

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
      <div v-for="(group, groupIndex) in groups" :key="group">
        <div v-if="groupIndex > 0" class="sort-divider" />

        <div class="sort-group-label">{{ group }}</div>

        <div
          v-for="option in getOptions(group)"
          :key="option.value"
          :class="`sort-option${modelValue === option.value ? ' active' : ''}`"
          @click="onSelectOption(option.value)"
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
  </div>
</template>
