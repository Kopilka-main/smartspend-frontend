<script setup lang="ts">
const isOpened = ref(false)
const modelValue = defineModel<string>({ default: 'newest' })
const dropdownElem = useTemplateRef('dropdownElem')

const PROMO_SORT_OPTIONS = [
  { group: 'Новизна', value: 'newest', label: 'Сначала новые' },
  { group: 'По популярности', value: 'votes_7d', label: 'За 7 дней' },
  { group: 'По популярности', value: 'votes_30d', label: 'За месяц' },
  { group: 'По популярности', value: 'votes_all', label: 'За всё время' }
]

const currentOption = computed(() => {
  return PROMO_SORT_OPTIONS.find((option) => option.value === modelValue.value)
})

const groups = [
  {
    label: 'Новизна',
    options: [
      {
        label: 'Сначала новые',
        value: 'newest'
      }
    ]
  },
  {
    label: 'По популярности',
    options: [
      {
        label: 'За 7 дней',
        value: 'votes_7d'
      },
      {
        label: 'За месяц',
        value: 'votes_30d'
      },
      {
        label: 'За всё время',
        value: 'votes_all'
      }
    ]
  }
]

const btnLabel = computed(() => {
  return currentOption.value?.group === 'По популярности'
    ? `По популярности ${currentOption.value.label.toLowerCase()}`
    : currentOption.value?.label
})

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
      :class="`sort-btn${isOpened ? ' open' : ''}${modelValue !== 'newest' ? ' active' : ''}`"
      @click="isOpened = !isOpened"
    >
      <span>{{ btnLabel }}</span>

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
      <div v-for="(group, index) in groups" :key="group.label">
        <div v-if="index > 0" class="sort-divider" />

        <div class="sort-group-label">{{ group.label }}</div>

        <div
          v-for="option in group.options"
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
