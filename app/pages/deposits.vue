<script setup lang="ts">
import { useDeposits } from '~/features/deposits/composables/useDeposits'
import { useDepositsRates } from '~/features/deposits/composables/useDepositsRates'

import DepositsChart from '~/features/deposits/components/DepositsChart.vue'
import DepositsFilters from '~/features/deposits/components/DepositsFilters.vue'
import DepositCard from '~/features/deposits/components/DepositCard.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Вклады'
})

const filters = ref({
  amount: 500000,
  selectedMonth: 3,
  sort: 'rate',
  banks: [],
  conditions: [],
  frequency: [],
  liquidity: []
})

const { rates } = useDepositsRates(filters)
const { deposits, isLoading } = useDeposits(filters)
</script>

<template>
  <main class="dep-main">
    <div class="breadcrumb">
      <span class="breadcrumb-item">Профиль</span>

      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>

      <span class="breadcrumb-current">Вклады и накопительные счета</span>
    </div>

    <DepositsChart v-model="filters.selectedMonth" :rates="rates" />

    <DepositsFilters
      :rates="rates"
      v-model:term="filters.selectedMonth"
      v-model:sort="filters.sort"
      v-model:banks="filters.banks"
      v-model:conditions="filters.conditions"
      v-model:frequency="filters.frequency"
      v-model:liquidity="filters.liquidity"
    />

    <div id="sp-dep-list" class="dep-list">
      <div v-if="deposits.length === 0 && !isLoading" class="dep-empty">
        Нет предложений для выбранных фильтров
      </div>

      <template v-else>
        <DepositCard
          v-for="deposit in deposits"
          :key="deposit.id"
          :deposit="deposit"
          :amount="filters.amount"
          :selected-month="filters.selectedMonth"
        />
      </template>
    </div>

    <div class="dep-disclaimer">
      Данные носят информационный характер. Актуальные условия уточняйте на
      сайте банка. Вклады и накопительные счета застрахованы АСВ в пределах 1,4
      млн ₽.
    </div>
  </main>
</template>
