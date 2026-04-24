<script setup lang="ts">
import { useDeposits } from '~/features/deposits/composables/useDeposits'

const { deposits } = useDeposits()

const selectedMonth = ref(1)

const CHART_H = 140
const MIN_BAR = 28
const DESKTOP_MONTHS = [1, 2, 3, 4, 5, 6, 9, 12, 15, 18, 24, 36]

const chartFiltered = computed(() => {
  return deposits.value.filter((deposit) => {
    return true
    // if (filterBanks.size > 0 && !filterBanks.has(d.bank)) return false
    // if (filterFreq.size > 0 && !filterFreq.has(d.freq)) return false
    // if (filterConds.size > 0 && !d.conditions.some((c) => filterConds.has(c)))
    //   return false
    // if (filterLiquid.has('replenishment') && !d.replenishment) return false
    // if (filterLiquid.has('no_replenishment') && d.replenishment) return false
    // return true
  })
})

const monthRates = computed(() => {
  return DESKTOP_MONTHS.map((m) => ({
    month: m,
    rate:
      chartFiltered.value.length > 0
        ? Math.max(0, ...chartFiltered.value.map((d) => d.rates[m] || 0))
        : 0
  })).filter((i) => i.rate > 0)
})

const validRates = computed(() => {
  return monthRates.value.filter((r) => r.rate > 0).map((r) => r.rate)
})

const minRate = computed(() => {
  return validRates.value.length ? Math.min(...validRates.value) : 0
})

const maxRate = computed(() => {
  return validRates.value.length ? Math.max(...validRates.value) : 1
})

const isSelected = (month: number) => {
  return selectedMonth.value === month
}

const barHeight = (rate: number) => {
  if (rate <= 0) return 4

  if (maxRate.value === minRate.value) return CHART_H

  return Math.round(
    MIN_BAR +
      ((rate - minRate.value) / (maxRate.value - minRate.value)) *
        (CHART_H - MIN_BAR)
  )
}

const fmtMonth = (m: number) =>
  m < 12
    ? `${m}\u00a0мес`
    : m === 12
      ? '1\u00a0год'
      : m === 15
        ? '15\u00a0мес'
        : m === 18
          ? '1.5\u00a0года'
          : m === 24
            ? '2\u00a0года'
            : m === 36
              ? '3\u00a0года'
              : `${m}\u00a0мес`
</script>

<template>
  <div id="sp-dep-chart" class="dep-chart-card">
    <div class="dep-chart-title">Максимальная эффективная ставка по срокам</div>

    <div class="dep-chart" ref="{chartRef}">
      <div
        v-for="rate in monthRates"
        :key="rate.month"
        :class="`dep-bar-col${isSelected(rate.month) ? ' selected' : ''}`"
      >
        <div class="dep-bar-rate">
          {{ rate.rate > 0 ? `${rate.rate}%` : '—' }}
        </div>
        <div class="dep-bar-spacer" />
        <div class="dep-bar" :style="{ height: barHeight(rate.rate) }" />
        <div class="dep-bar-label">{{ fmtMonth(rate.month) }}</div>
      </div>
    </div>
  </div>
</template>
