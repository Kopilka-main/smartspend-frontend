<script setup lang="ts">
import { formatMoney } from '~/utils/formatMoney'
import { formatMonth } from '~/utils/formatMonth'
import type { Deposit } from '~/types'

import AppAccordion from '~/components/ui/AppAccordion.vue'

type DepositCardProps = {
  deposit: Deposit
  amount: number
  selectedMonth: number
}

const props = defineProps<DepositCardProps>()

const isOpened = ref(false)

const rate = computed(() => {
  return props.deposit.rates[props.selectedMonth]
})

const effectiveRate = computed(() => {
  if (props.deposit.freq === 'monthly') {
    return +((Math.pow(1 + rate.value / 100 / 12, 12) - 1) * 100).toFixed(2)
  }

  return rate.value
})

const minAmount = computed(() => {
  return props.deposit.minAmount
})

const income = computed(() => {
  return Math.round(
    props.amount * (rate.value / 100) * (props.selectedMonth / 12)
  )
})

const belowMin = computed(() => {
  return props.amount < minAmount.value
})

const freqLabel = computed(() => {
  return props.deposit.freq === 'monthly' ? 'Ежемесячно' : 'В конце срока'
})

const amountRange = computed(() => {
  return props.deposit.maxAmount
    ? `от\u00a0${formatMoney(props.deposit.minAmount)}\u00a0до\u00a0${formatMoney(props.deposit.maxAmount)}`
    : `от\u00a0${formatMoney(props.deposit.minAmount)}`
})

const insuranceLabel = computed(() => {
  return props.deposit.isSystemic
    ? 'Системообразующий банк\u00a0— гарантия ЦБ\u00a0РФ на всю сумму'
    : 'Страхование АСВ до\u00a01,4\u00a0млн\u00a0₽'
})

const belowMinAlertLabel = computed(() => {
  return `Ваша сумма ${formatMoney(props.amount)} меньше минимальной (${formatMoney(
    minAmount.value
  )}) — открыть вклад не получится`
})
</script>

<template>
  <div :class="`dep-card${isOpened ? ' open' : ''}`">
    <div class="dep-card-main" @click="isOpened = !isOpened">
      <div class="dep-card-body">
        <div class="dep-card-names">
          <span class="dep-bank-name">{{ deposit.bankName }}</span>
        </div>

        <div class="dep-dep-name">{{ deposit.name }}</div>

        <div class="dep-tags">
          <span v-for="tag in deposit.tags" :key="tag" class="dep-tag">
            {{ tag }}
          </span>
        </div>

        <div class="dep-card-pills">
          <span class="dep-pill dep-pill-rate">% {{ rate }}</span>
          <span :class="`dep-pill dep-pill-income${belowMin ? ' warn' : ''}`">
            <svg
              v-if="belowMin"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>

            {{ formatMoney(income) }}
          </span>
        </div>
      </div>

      <div class="dep-card-aside">
        <div
          class="dep-bank-logo"
          :style="{
            background: deposit.bankColor,
            color: deposit.bankTextColor
          }"
        >
          {{ deposit.bankAbbr }}
        </div>

        <div :class="`dep-expand-btn${isOpened ? ' open' : ''}`">
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
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>

    <div v-if="isOpened" class="dep-card-detail">
      <div v-if="belowMin" class="dep-amount-warn">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>

        {{ belowMinAlertLabel }}
      </div>

      <div class="dep-detail-grid">
        <div class="dep-detail-item">
          <span class="dep-detail-lbl">Ставка банка</span>

          <span class="dep-detail-val green">{{ rate }}%</span>
        </div>

        <div class="dep-detail-item">
          <span class="dep-detail-lbl">Эффективная ставка</span>

          <span class="dep-detail-val green">
            {{ effectiveRate }}%

            <span v-if="deposit.freq === 'monthly'" class="dep-detail-hint">
              с кап.
            </span>
          </span>
        </div>

        <div class="dep-detail-item">
          <span class="dep-detail-lbl">Выплата %</span>

          <span class="dep-detail-val">{{ freqLabel }}</span>
        </div>

        <div class="dep-detail-item">
          <span class="dep-detail-lbl">Срок вклада</span>

          <span class="dep-detail-val">{{ formatMonth(selectedMonth) }}</span>
        </div>

        <div class="dep-detail-item">
          <span class="dep-detail-lbl">Сумма вклада</span>

          <span class="dep-detail-val">{{ amountRange }}</span>
        </div>

        <div class="dep-detail-item" :style="{ gridColumn: '1 / -1' }">
          <span class="dep-detail-lbl">Защита вкладов</span>

          <span class="dep-detail-val">
            {{ insuranceLabel }}
          </span>
        </div>

        <div class="dep-detail-item">
          <span class="dep-detail-lbl">Пополнение</span>

          <span class="dep-detail-val">
            {{ deposit.replenishment ? 'Да' : 'Нет' }}
          </span>
        </div>

        <div class="dep-detail-item">
          <span class="dep-detail-lbl">Снятие</span>

          <span class="dep-detail-val">
            {{ deposit.withdrawal ? 'Да' : 'Нет' }}
          </span>
        </div>

        <div class="dep-detail-item" :style="{ gridColumn: '1 / -1' }">
          <span class="dep-detail-lbl">
            Ваш доход за {{ formatMonth(selectedMonth) }}
          </span>

          <span :class="`dep-detail-val${belowMin ? ' warn' : ' green'}`">
            {{ formatMoney(income) }}
          </span>
        </div>
      </div>

      <AppAccordion title="Условия для открытия">
        <p class="dep-acc-text">{{ deposit.conditionsText }}</p>
      </AppAccordion>

      <AppAccordion title="Параметры вклада">
        <p class="dep-acc-text">{{ deposit.params }}</p>
      </AppAccordion>

      <div v-if="deposit.tariff" class="dep-tariff-block">
        <div class="dep-tariff-header">
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
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>

          <span class="dep-tariff-name">{{ deposit.tariff.name }}</span>

          <span class="dep-tariff-cost">{{ deposit.tariff.cost }}</span>
        </div>

        <p class="dep-tariff-cond">{{ deposit.tariff.conditions }}</p>

        <ul class="dep-tariff-benefits">
          <li
            v-for="benefit in deposit.tariff.benefits"
            :key="benefit"
            class="dep-tariff-benefit"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>

            {{ benefit }}
          </li>
        </ul>

        <a
          v-if="deposit.tariff.url"
          class="dep-tariff-link"
          :href="deposit.tariff.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          Подробнее
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      <span class="dep-cta-link">Узнать подробнее</span>
    </div>
  </div>
</template>
