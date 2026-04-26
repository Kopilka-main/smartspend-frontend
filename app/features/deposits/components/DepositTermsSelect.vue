<script setup lang="ts">
import { formatMonth } from '~/utils/formatMonth'
import { useDepositsRates } from '~/features/deposits/composables/useDepositsRates'

const dropdownElem = useTemplateRef('dropdownElem')
const isOpened = ref(false)

const modelValue = defineModel<number>({ required: true })

const { rates } = useDepositsRates()

const options = computed(() => {
  return rates.value.map((rate) => ({
    label: rate.months,
    value: rate.months
  }))
})

const onSelectOption = (value: number) => {
  modelValue.value = value
  isOpened.value = false
}

onClickOutside(dropdownElem, () => {
  isOpened.value = false
})
</script>

<template>
  <div class="ssel-wrap">
    <button
      :class="`ssel-btn${isOpened ? ' open' : ''}`"
      @click="isOpened = !isOpened"
    >
      <span class="ssel-value">{{ formatMonth(modelValue) }}</span>

      <svg
        class="ssel-arrow"
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

    <div v-if="isOpened" ref="dropdownElem" class="ssel-panel">
      <button
        v-for="option in options"
        :key="option.value"
        :class="`ssel-option${modelValue === option.value ? ' active' : ''}`"
        @click="onSelectOption(option.value)"
      >
        {{ formatMonth(option.value) }}

        <svg
          v-if="modelValue === option.value"
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
