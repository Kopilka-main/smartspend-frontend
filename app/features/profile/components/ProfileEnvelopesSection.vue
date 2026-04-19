<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

const FEDERAL_PM_2026 = 20644 // Прожиточный минимум РФ 2026, ₽/мес
const SMART_SPEND_BASE = Math.round(FEDERAL_PM_2026 * 0.75) // 75% — конверты (без жилья ~25%)

const { currentUser } = useCurrentUser()

const finance = computed(() => {
  return currentUser.value
    ? currentUser.value.finance
    : {
        income: 0,
        housing: 0,
        credit: 0,
        creditMonths: 0,
        capital: 0,
        emoRate: 0
      }
})

const grandTotal = ref(0)

const emoMonthly = computed(() => {
  return Math.round(
    (finance.value.capital * Number(finance.value.emoRate)) / 12
  )
})

const available = computed(() => {
  return SMART_SPEND_BASE + emoMonthly.value
})

const diff = computed(() => {
  return available.value - grandTotal.value
})

const over = computed(() => {
  return diff.value < 0
})

const isBsOpened = ref(false)
</script>

<template>
  <div id="sp-envelopes">
    <div class="section-heading">
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '2px' }">
        <span class="section-title">Конверты и наборы</span>

        <div class="section-subtitle">
          Распределяйте бюджет по конвертам раз в месяц
        </div>
      </div>
    </div>

    <div class="env-budget-summary">
      <div
        :class="`env-bs-details${isBsOpened ? ' env-bs-details--open' : ''}`"
      >
        <div class="env-bs-details-inner" @click="isBsOpened = false">
          <div class="env-bs-row">
            <div class="env-bs-left">
              <span class="env-bs-label">Минимальные расходы</span>
              <span class="env-bs-hint">
                75% федерального прожиточного минимума · ₽{{
                  SMART_SPEND_BASE.toLocaleString('ru')
                }}
              </span>
            </div>

            <span class="env-bs-val">
              ₽{{ SMART_SPEND_BASE.toLocaleString('ru') }}
            </span>
          </div>
          <div class="env-bs-row">
            <div class="env-bs-left">
              <span class="env-bs-label">Доход от капитала</span>

              <span class="env-bs-hint">
                {{ Math.round(Number(finance.emoRate) * 100) }}% годовых ·
                капитал {{ finance.capital.toLocaleString('ru') }} ₽
              </span>
            </div>

            <span class="env-bs-val env-bs-val--income">
              + ₽{{ emoMonthly.toLocaleString('ru') }}
            </span>
          </div>
          <div class="env-bs-row">
            <div class="env-bs-left">
              <span class="env-bs-label">План расходов по наборам</span>
              <span class="env-bs-hint">сумма активных конвертов</span>
            </div>

            <span class="env-bs-val env-bs-val--minus">
              − ₽{{ grandTotal.toLocaleString('ru') }}
            </span>
          </div>
        </div>
      </div>
      <button
        :class="`env-bs-row env-bs-row--total${over ? ' env-bs-row--over' : ''}`"
        @click="isBsOpened = !isBsOpened"
      >
        <span class="env-bs-left">
          <span class="env-bs-label">
            {{ over ? 'Превышен расход' : 'Ещё можно потратить' }}
          </span>

          <span class="env-bs-hint">
            {{
              over
                ? 'нажмите чтобы увидеть разбивку'
                : 'нажмите чтобы увидеть разбивку'
            }}
          </span>
        </span>

        <span class="env-bs-total-right">
          <span class="env-bs-val env-bs-val--total">
            {{ over ? '−' : '+' }}₽{{ Math.abs(diff).toLocaleString('ru') }}
          </span>

          <svg
            :class="`env-bs-chevron${isBsOpened ? ' env-bs-chevron--open' : ''}`"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>
