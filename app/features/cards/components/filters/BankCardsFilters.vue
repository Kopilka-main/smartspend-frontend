<script setup lang="ts">
import { useBankCardFiltersModal } from '~/features/cards/composables/useBankCardFiltersModal'
import { useBankCardSpendingModal } from '~/features/cards/composables/useBankCardSpendingModal'
import { useSpending } from '~/features/cards/composables/useSpending'

const { spending } = useSpending()

const sortModel = defineModel<string>('sort', { required: true })
const banksModel = defineModel<string[]>('banks', { default: [] })
const conditionsModel = defineModel<string[]>('conditions', { default: [] })
const typesModel = defineModel<string[]>('types', { default: [] })

const totalSpending = computed(() => {
  let result = 0

  Object.keys(spending.value).forEach((key) => {
    if (spending.value[key]) {
      result += Number(spending.value[key])
    }
  })

  return result
})

const totalActiveFilters = computed(() => {
  return (
    banksModel.value.length +
    conditionsModel.value.length +
    typesModel.value.length
  )
})

const spendingLabel = computed(() => {
  return totalSpending.value
    ? `${formatMoney(totalSpending.value)}/мес`
    : 'Указать'
})

const bankCardFiltersModal = useBankCardFiltersModal((payload) => {
  banksModel.value = payload.banks
  conditionsModel.value = payload.conditions
  typesModel.value = payload.types
})

const bankCardSpendingModal = useBankCardSpendingModal()

const onShowFiltersModal = () => {
  bankCardFiltersModal.patchOptions({
    attrs: {
      banks: banksModel.value,
      conditions: conditionsModel.value,
      types: typesModel.value
    }
  })
  bankCardFiltersModal.open()
}

const onShowSpendingModal = () => {
  bankCardSpendingModal.open()
}
</script>

<template>
  <div class="dep-filters-card">
    <div class="dep-filters-row" id="sp-crd-spend">
      <div class="dep-filter-group">
        <span class="dep-filter-label">Мои расходы</span>

        <button
          :class="`crd-spend-btn${totalSpending > 0 ? ' filled' : ''}`"
          @click="onShowSpendingModal"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>

          {{ spendingLabel }}
        </button>
      </div>

      <div class="dep-filter-group" id="sp-crd-sort">
        <span class="dep-filter-label">Сортировка</span>

        <div class="dep-sort-toggle">
          <button
            :class="`dep-sort-btn${sortModel === 'cashback_grace' ? ' active' : ''}`"
            @click="sortModel = 'cashback_grace'"
          >
            Кешбэк + Период
          </button>

          <button
            :class="`dep-sort-btn${sortModel === 'cashback' ? ' active' : ''}`"
            @click="sortModel = 'cashback'"
          >
            Кешбэк
          </button>

          <button
            :class="`dep-sort-btn${sortModel === 'grace' ? ' active' : ''}`"
            @click="sortModel = 'grace'"
          >
            Льготный период
          </button>
        </div>
      </div>

      <div class="dep-filter-group">
        <span class="dep-filter-label">Фильтры</span>

        <button
          :class="`dep-filter-toggle-btn${totalActiveFilters > 0 ? ' active' : ''}`"
          @click="onShowFiltersModal"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>

          Фильтры

          <span v-if="totalActiveFilters > 0" class="dep-filter-badge">
            {{ totalActiveFilters }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
