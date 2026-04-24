<script setup lang="ts">
import { useBankCardFiltersModal } from '~/features/cards/composables/useBankCardFiltersModal'
import { useBankCardSpendingModal } from '~/features/cards/composables/useBankCardSpendingModal'

const hasSpending = ref(false)
const totalSpending = ref(0)
const totalActiveFilters = ref(0)

const sortModel = defineModel<string>('sort', { required: true })

const spendingLabel = computed(() => {
  return hasSpending.value
    ? `${formatMoney(totalSpending.value)}/мес`
    : 'Указать'
})

const bankCardFiltersModal = useBankCardFiltersModal()
const bankCardSpendingModal = useBankCardSpendingModal()

const onShowFiltersModal = () => {
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
          :class="`crd-spend-btn${hasSpending ? ' filled' : ''}`"
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
