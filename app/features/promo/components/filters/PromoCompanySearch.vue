<script setup lang="ts">
import { useCompanies } from '~/composables/useCompanies'
import type { Company } from '~/types'

const query = ref('')
const q = ref('')
const isDisabled = ref(false)

const { companies } = useCompanies(q)

const modelValue = defineModel<string>({ default: '' })

watchDebounced(
  query,
  () => {
    if (isDisabled.value) return

    q.value = query.value
  },
  { debounce: 500, maxWait: 1000 }
)

const onSelectCompany = (company: Company) => {
  isDisabled.value = true

  modelValue.value = company.id
  q.value = ''
  query.value = company.name

  setTimeout(() => {
    isDisabled.value = false
  }, 1500)
}
</script>

<template>
  <div class="co-search-wrap">
    <div class="catalog-search-wrap">
      <svg
        class="catalog-search-icon"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>

      <input
        v-model="query"
        class="catalog-search-input"
        placeholder="Поиск компании..."
      />

      <button v-if="query" class="catalog-search-clear" @click="query = ''">
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
    </div>

    <div v-if="companies.length > 0" class="co-search-panel">
      <div
        v-for="company in companies"
        :key="company.id"
        class="co-search-option"
        @click="onSelectCompany(company)"
      >
        <div class="co-search-logo" :style="{ background: company.color }">
          {{ company.abbr }}
        </div>

        <div class="co-search-info">
          <span class="co-search-name">{{ company.name }}</span>

          <span v-if="company.categoryName" class="co-search-cat">
            {{ company.categoryName }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
