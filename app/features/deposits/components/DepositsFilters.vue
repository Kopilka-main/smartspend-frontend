<script setup lang="ts">
import { useDepositsFiltersModal } from '~/features/deposits/composables/useDepositsFiltersModal'

import DepositTermsSelect from '~/features/deposits/components/DepositTermsSelect.vue'

const depositsFiltersModal = useDepositsFiltersModal((payload) => {
  banksModelValue.value = payload.banks
  conditionsModelValue.value = payload.conditions
  frequencyModelValue.value = payload.frequency
  liquidityModelValue.value = payload.liquidity
})

const amountModelValue = defineModel<number>('amount', { default: 500000 })
const sortModelValue = defineModel<string>('sort', { default: 'rate' })
const termModelValue = defineModel<number>('term', { default: 3 })

const banksModelValue = defineModel<string[]>('banks', { default: () => [] })

const conditionsModelValue = defineModel<string[]>('conditions', {
  default: () => []
})

const frequencyModelValue = defineModel<string[]>('frequency', {
  default: () => []
})

const liquidityModelValue = defineModel<string[]>('liquidity', {
  default: () => []
})

const onShowDepositsFiltersModal = () => {
  depositsFiltersModal.open()
}

const totalActiveFilters = computed(() => {
  return (
    banksModelValue.value.length +
    conditionsModelValue.value.length +
    frequencyModelValue.value.length +
    liquidityModelValue.value.length
  )
})
</script>

<template>
  <div id="sp-dep-filters" class="dep-filters-card">
    <div class="dep-filters-row">
      <div class="dep-filter-group">
        <span class="dep-filter-label">Сумма вклада</span>

        <div class="dep-amount-wrap">
          <input
            v-model.number="amountModelValue"
            class="dep-amount-input"
            type="number"
            placeholder="500 000"
          />

          <span class="dep-amount-unit">₽</span>
        </div>
      </div>

      <div class="dep-filter-group">
        <span class="dep-filter-label">Срок вклада</span>

        <DepositTermsSelect v-model="termModelValue" />
      </div>

      <div class="dep-filter-group">
        <span class="dep-filter-label">Сортировка</span>
        <div class="dep-sort-toggle">
          <button
            :class="`dep-sort-btn${sortModelValue === 'rate' ? ' active' : ''}`"
            @click="sortModelValue = 'rate'"
          >
            Ставка
          </button>

          <button
            :class="`dep-sort-btn${sortModelValue === 'income' ? ' active' : ''}`"
            @click="sortModelValue = 'income'"
          >
            Доход
          </button>
        </div>
      </div>

      <div class="dep-filter-group">
        <span class="dep-filter-label">Фильтры</span>

        <button
          :class="`dep-filter-toggle-btn${totalActiveFilters > 0 ? ' active' : ''}`"
          @click="onShowDepositsFiltersModal"
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
