<script setup lang="ts">
import { formatMoney } from '~/utils/formatMoney'
import { useSpending } from '~/features/cards/composables/useSpending'
import { useCategories } from '~/composables/useCategories'
import { useBankCardSpendingModal } from '~/features/cards/composables/useBankCardSpendingModal'
import type { BankCardItem } from '~/types'

import AppAccordion from '~/components/ui/AppAccordion.vue'

type BankCardProps = {
  card: BankCardItem
}

const props = defineProps<BankCardProps>()

const bankCardSpendingModal = useBankCardSpendingModal()
const { spending, totalSpendingAmount } = useSpending()
const { categories } = useCategories()

const isOpened = ref(false)

const typeLabel = computed(() => {
  return props.card.cardType === 'debit' ? 'Дебетовая' : 'Кредитная'
})

const tags = computed(() => {
  return props.card.tags.slice(0, 2)
})

const bonusValue = computed(() => {
  return categories.value.reduce((total, category) => {
    const rate =
      props.card.cashback[category.id] ?? props.card.cashback.other ?? 0

    return total + ((spending.value[category.id] || 0) * rate) / 100
  }, 0)
})

const graceValue = computed(() => {
  if (!props.card.graceDays) return 0

  let totalMonthly = 0

  Object.keys(spending.value).forEach((key) => {
    totalMonthly += Number(spending.value[key])
  })

  return totalMonthly * 0.25 * (props.card.graceDays / 365)
})

const bonusTypeLabel = computed(() => {
  return props.card.bonusType === 'rubles'
    ? 'Рубли'
    : props.card.bonusType === 'points'
      ? 'Баллы'
      : 'Мили'
})

const graceDaysLabel = computed(() => {
  return props.card.graceDays > 0 ? `${props.card.graceDays} дней` : 'нет'
})

const onShowSpendingModal = () => {
  bankCardSpendingModal.open()
}
</script>

<template>
  <div
    :class="`crd-card${isOpened ? ' open' : ''}`"
    @click="isOpened = !isOpened"
  >
    <div class="crd-card-main">
      <div class="crd-card-body">
        <div class="crd-card-names">
          <span class="crd-bank-name">{{ card.bankName }}</span>
        </div>
        <div class="crd-card-name">{{ card.name }}</div>
        <div class="crd-tags">
          <span class="crd-tag crd-tag-type">{{ typeLabel }}</span>

          <span v-if="card.graceDays > 0" class="crd-tag crd-tag-grace">
            {{ card.graceDays }}д без %
          </span>

          <span v-for="tag in tags" :key="tag" class="crd-tag">{{ tag }}</span>
        </div>

        <div class="crd-card-pills">
          <template v-if="totalSpendingAmount > 0">
            <span class="crd-pill crd-pill-bonus">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>

              {{ formatMoney(bonusValue) }}

              <span class="crd-pill-sub">/мес</span>
            </span>

            <span v-if="graceValue > 0" class="crd-pill crd-pill-grace">
              +{{ formatMoney(graceValue) }}

              <span class="crd-pill-sub"> экономия</span>
            </span>
          </template>

          <template v-else>
            <span
              class="crd-pill crd-pill-empty"
              @click.stop="onShowSpendingModal"
            >
              Укажи расходы → увидишь кешбэк
            </span>
          </template>
        </div>
      </div>

      <div class="crd-card-aside">
        <div
          class="crd-bank-logo"
          :style="{ background: card.bankColor, color: card.bankTextColor }"
        >
          {{ card.bankAbbr }}
        </div>

        <div :class="`crd-expand-btn${isOpened ? ' open' : ''}`">
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

    <div v-if="isOpened" class="crd-card-detail">
      <div class="crd-detail-grid">
        <div class="crd-detail-item">
          <span class="crd-detail-lbl">Тип карты</span>

          <span class="crd-detail-val">{{ typeLabel }}</span>
        </div>
        <div class="crd-detail-item">
          <span class="crd-detail-lbl">Льготный период</span>

          <span class="crd-detail-val">
            {{ graceDaysLabel }}
          </span>
        </div>
        <div class="crd-detail-item">
          <span class="crd-detail-lbl">Базовый кешбэк</span>

          <span class="crd-detail-val green">
            {{ card.cashback.other ?? 0 }}%
          </span>
        </div>

        <div class="crd-detail-item">
          <span class="crd-detail-lbl">Тип бонуса</span>

          <span class="crd-detail-val">
            {{ bonusTypeLabel }}
          </span>
        </div>

        <div class="crd-detail-item" :style="{ gridColumn: '1 / -1' }">
          <span class="crd-detail-lbl">Обслуживание</span>

          <span class="crd-detail-val">{{ card.feeDesc }}</span>
        </div>
      </div>

      <button v-if="totalSpendingAmount === 0" class="crd-fill-spend-btn">
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

        Укажи расходы, чтобы увидеть реальный кешбэк
      </button>

      <AppAccordion title="Бонусная система">
        <p class="crd-acc-text">{{ card.bonusDesc }}</p>
      </AppAccordion>

      <AppAccordion title="Условия обслуживания">
        <p class="crd-acc-text">{{ card.feeDesc }}</p>
      </AppAccordion>

      <a
        class="dep-cta-link"
        :href="card.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        Узнать подробнее
      </a>
    </div>
  </div>
</template>
