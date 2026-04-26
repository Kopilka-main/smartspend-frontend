<script setup lang="ts">
import { useCategories } from '~/composables/useCategories'
import { useMyCompanies } from '~/features/companies/composables/useMyCompanies'
import { useCompanies } from '~/composables/useCompanies'

import type { Company } from '~/types'

import CompanyDetails from '~/features/companies/components/CompanyDetails.vue'
import CompanyRow from '~/features/companies/components/CompanyRow.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Подбор компаний'
})

const { myCompanies } = useMyCompanies()
const { categories } = useCategories()
const { companies } = useCompanies()

const selectedCompanies = ref<string[]>([])
const currentStep = ref(0)

watch(
  myCompanies,
  () => {
    selectedCompanies.value = myCompanies.value.map((company) => company.id)
  },
  { immediate: true }
)

const companiesForCurrentCategory = computed(() => {
  return companies.value.filter(
    (company) => company.categoryId === currentCategory.value?.id
  )
})

const totalSteps = computed(() => {
  return categories.value.length
})

const progress = computed(() => {
  return Math.round(((currentStep.value + 1) / totalSteps.value) * 100)
})

const currentCategory = computed(() => {
  return categories.value[currentStep.value]
})

const currentCategoryLabel = computed(() => {
  if (currentCategory.value) {
    return currentCategory.value.name
  }

  return ''
})

const selectedCategoriesLength = computed(() => {
  return 0
})

const isCompanySelected = (company: Company) => {
  return selectedCompanies.value.includes(company.id)
}

const activeCompany = ref<Company | null>(null)

const cNoun = (n: number) => {
  const m = n % 10,
    c = n % 100
  if (c >= 11 && c <= 14) return 'компаний'
  if (m === 1) return 'компания'
  if (m >= 2 && m <= 4) return 'компании'
  return 'компаний'
}

const dir = ref(1)

const onPrev = () => {
  dir.value = -1

  if (currentStep.value === 0) {
    // go back
    return
  }

  currentStep.value = currentStep.value - 1
}

const onResetCategory = () => {}

const onFinish = () => {}

const onNext = () => {
  if (currentStep.value < totalSteps.value - 1) {
    dir.value = 1
    currentStep.value = currentStep.value + 1
  }
}

const onSelectCompany = (company: Company) => {
  const existingCompany = selectedCompanies.value.find((c) => c === company.id)

  if (existingCompany) {
    selectedCompanies.value = selectedCompanies.value.filter(
      (c) => c !== company.id
    )
  } else {
    selectedCompanies.value.push(company.id)
  }
}
</script>

<template>
  <main class="cpicker-main">
    <div class="cpicker-container">
      <div class="cpicker-breadcrumb-row">
        <div class="breadcrumb">
          <span class="breadcrumb-current">Подбор компаний</span>
        </div>

        <div class="cpicker-header-right">
          <span class="cpicker-selected-total">
            Выбрано {{ selectedCompanies.length }}
            {{ cNoun(selectedCompanies.length) }}
          </span>

          <span class="cpicker-step-counter">
            {{ currentStep + 1 }} / {{ totalSteps }}
          </span>
        </div>
      </div>

      <div id="sp-cpicker-progress" class="cpicker-progress-wrap">
        <div class="cpicker-progress-bar" :style="{ width: `${progress}%` }" />
      </div>

      <div id="sp-cpicker-step" class="cpicker-cat-header">
        <span class="cpicker-cat-title">{{ currentCategoryLabel }}</span>

        <span v-if="selectedCategoriesLength > 0" class="cpicker-cat-count">
          {{ selectedCategoriesLength }} выбрано
        </span>
      </div>

      <div id="sp-cpicker-actions" class="cpicker-actions cpicker-actions--new">
        <div class="cpicker-actions-left">
          <button class="cpicker-btn-back" @click="onPrev">← Назад</button>

          <button
            v-if="selectedCategoriesLength > 0"
            class="cpicker-btn-reset"
            @click="onResetCategory"
          >
            Сбросить
          </button>
        </div>
        <div class="cpicker-actions-right">
          <button class="cpicker-btn-finish" @click="onFinish">Готово</button>

          <button
            v-if="currentStep < totalSteps - 1"
            class="cpicker-btn-next"
            @click="onNext"
          >
            Далее →
          </button>
        </div>
      </div>

      <div
        :class="`cpicker-two-col cpicker-step-anim cpicker-step-anim--${dir > 0 ? 'fwd' : 'back'}`"
      >
        <div class="cpicker-list">
          <CompanyRow
            v-for="company in companiesForCurrentCategory"
            :key="company.id"
            :company="company"
            :is-selected="isCompanySelected(company)"
            :is-active="false"
            @select="onSelectCompany"
          />
        </div>

        <CompanyDetails :company="activeCompany" />
      </div>
    </div>
  </main>
</template>
