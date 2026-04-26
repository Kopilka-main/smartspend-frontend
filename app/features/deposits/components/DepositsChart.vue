<script setup lang="ts">
import type { DepositChartRate } from '~/types'

type DepositsChartProps = {
  rates: DepositChartRate[]
}

const props = defineProps<DepositsChartProps>()

const monthModelValue = defineModel<number>({ default: 3 })

const DESKTOP_MONTHS = [1, 2, 3, 4, 5, 6, 9, 12, 15, 18, 24, 36]
const CHART_H = 140
const MIN_BAR = 28

const isSelected = (month: number) => {
  return monthModelValue.value === month
}

const filteredRates = computed(() => {
  return props.rates.filter((r) => DESKTOP_MONTHS.includes(r.months))
})

const validRates = computed(() => {
  return props.rates.filter((r) => r.maxRate > 0).map((r) => r.maxRate)
})

const minRate = computed(() => {
  return validRates.value.length ? Math.min(...validRates.value) : 0
})

const maxRate = computed(() => {
  return validRates.value.length ? Math.max(...validRates.value) : 1
})

const getBarHeight = (rate: number) => {
  if (rate <= 0) return 4

  if (maxRate.value === minRate.value) return CHART_H

  return Math.round(
    MIN_BAR +
      ((rate - minRate.value) / (maxRate.value - minRate.value)) *
        (CHART_H - MIN_BAR)
  )
}
</script>

<template>
  <div id="sp-dep-chart" class="dep-chart-card">
    <div class="dep-chart-title">Максимальная эффективная ставка по срокам</div>

    <div class="dep-chart">
      <div
        v-for="rate in filteredRates"
        :key="rate.months"
        :class="`dep-bar-col${isSelected(rate.months) ? ' selected' : ''}`"
        @click="monthModelValue = rate.months"
      >
        <div class="dep-bar-rate">
          {{ rate.maxRate > 0 ? `${rate.maxRate}%` : '—' }}
        </div>

        <div class="dep-bar-spacer" />

        <div
          class="dep-bar"
          :style="{ height: `${getBarHeight(rate.maxRate)}px` }"
        />

        <div class="dep-bar-label">{{ rate.label }}</div>
      </div>
    </div>
  </div>
</template>
