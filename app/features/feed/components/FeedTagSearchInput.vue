<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const modelValue = defineModel<string>({ default: '' })

const isFocused = ref(false)
const suggestions = ref<string[]>(['hello world'])
const dropdownElem = useTemplateRef('dropdownElem')

const onSelectSuggestion = (suggestion: string) => {
  modelValue.value = suggestion
  isFocused.value = false
}

onClickOutside(dropdownElem, () => {
  isFocused.value = false
})
</script>

<template>
  <div class="catalog-search-wrap">
    <svg
      class="catalog-search-icon"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>

    <input
      v-model="modelValue"
      class="catalog-search-input"
      placeholder="Поиск по хэштегу..."
      @focus="isFocused = true"
    />

    <button
      v-if="modelValue"
      class="catalog-search-clear"
      @click="modelValue = ''"
    >
      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>

    <div
      v-if="isFocused && suggestions.length"
      ref="dropdownElem"
      class="tag-suggestions"
    >
      <button
        v-for="suggestion in suggestions"
        :key="suggestion"
        class="tag-suggestion"
        @click="onSelectSuggestion(suggestion)"
      >
        #{{ suggestion }}
      </button>
    </div>
  </div>
</template>
