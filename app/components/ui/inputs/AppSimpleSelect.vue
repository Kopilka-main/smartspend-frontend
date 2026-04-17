<script setup lang="ts">
type AppSimpleSelectProps = {
  label: string
  items: any[]
}

const props = defineProps<AppSimpleSelectProps>()

const modelValue = defineModel<string>({ default: 'all' })

const dropdownElem = useTemplateRef('dropdownElem')
const isOpened = ref(false)

const isDefault = computed(() => {
  return modelValue.value === 'all'
})

const selectedItem = computed(() => {
  return props.items.find((item) => item.value === modelValue.value)
})

const onSelectOption = (option: any) => {
  modelValue.value = option.value

  isOpened.value = false
}

onClickOutside(dropdownElem, () => {
  isOpened.value = false
})
</script>

<template>
  <div class="ssel-wrap">
    <button
      :class="`ssel-btn${isOpened ? ' open' : ''}${!isDefault ? ' active' : ''}`"
      @click="isOpened = !isOpened"
    >
      <span class="ssel-label">{{ label }}</span>

      <span v-if="!isDefault" class="ssel-value">{{ selectedItem.label }}</span>

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
        v-for="option in items"
        :key="option.value"
        :class="`ssel-option${modelValue === option.value ? ' active' : ''}`"
        @click="onSelectOption(option)"
      >
        {{ option.label }}

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
