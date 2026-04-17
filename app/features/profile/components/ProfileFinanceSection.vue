<script setup lang="ts">
import { useSetCategories } from '~/queries/useSetCategories'
import { useCurrentUser } from '~/composables/useCurrentUser'
import { useEnvelopes } from '~/features/sets/queries/useEnvelopes'

import BudgetGroup from '~/features/profile/components/BudgetGroup.vue'

const { currentUser } = useCurrentUser()
const { data: categoriesData } = useSetCategories()
const { data: envelopesData } = useEnvelopes()

const categories = computed(() => {
  return categoriesData.value ? categoriesData.value.data : []
})

const envelopes = computed(() => {
  return envelopesData.value ? envelopesData.value.data : []
})

const calcItemMonthly = (item: any) => {
  if (item.itemType === 'consumable') {
    const qty = item.qty || 100
    return Math.round(((item.basePrice || 0) / qty) * (item.dailyUse || 1) * 30)
  }
  return Math.round(((item.basePrice || 0) / (item.wearLifeWeeks || 52)) * 4.33)
}

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

const FEDERAL_PM_2026 = 20644
const SMART_SPEND_BASE = Math.round(FEDERAL_PM_2026 * 0.75)

// const personalByCat = computed(() => {
//   const base = inventoryGroups.flatMap((g) =>
//     g.items.map((item) => ({ ...item, groupId: g.id }))
//   )
//   const extra = loadInventoryExtra().map((i) => ({ ...i, isExtra: true }))
//   const allItems = [...base, ...extra]
//
//   const map = {}
//
//   categories.value.forEach((cat) => {
//     if (cat.id === 'all') return
//     const matchIds = new Set(
//       inventoryGroups
//         .filter((g) => (GROUP_CATS[g.id] || []).includes(cat.id))
//         .map((g) => g.id)
//     )
//     const orphans = allItems.filter((i) => matchIds.has(i.groupId) && !i.setId)
//     if (orphans.length > 0) map[cat.id] = orphans
//   })
//
//   return map
// })

const hasUpdatedAt = computed(() => {
  return false
})

const updatedAt = computed(() => {
  return ''
})

const grandTotal = computed(() => {
  return 0
  // return categories.value.reduce((sum, cat) => {
  //   const envItems = envelopes.value.filter(
  //     (envelope) => envelope.categoryId === cat.id
  //   )
  //
  //   const envAmt = envItems
  //     .filter((x) => !x.paused)
  //     .reduce((s, x) => s + x.amount, 0)
  //
  //   const personalAmt = (personalByCat.value[cat.id] || []).reduce(
  //     (s, i) => s + calcItemMonthly(i),
  //     0
  //   )
  //   return sum + envAmt + personalAmt
  // }, 0)
})

const totalExpenses = computed(() => {
  return finance.value.housing + finance.value.credit + grandTotal.value
})

const savings = computed(() => {
  return finance.value.income - totalExpenses.value
})

const savingsPct = computed(() => {
  return finance.value.income > 0
    ? Math.round((savings.value / finance.value.income) * 100)
    : 0
})

const netIncome = computed(() => {
  return finance.value.income > 0
    ? Math.max(
        0,
        finance.value.income - finance.value.housing - finance.value.credit
      )
    : 0
})

const showPmWarn = computed(() => {
  return finance.value.income > 0 && netIncome.value < SMART_SPEND_BASE
})

const housingPct = computed(() => {
  return finance.value.income > 0
    ? Math.round((finance.value.housing / finance.value.income) * 100)
    : null
})

const creditPct = computed(() => {
  return finance.value.income > 0
    ? Math.round((finance.value.credit / finance.value.income) * 100)
    : null
})

const budgetGroups = computed(() => {
  return [
    {
      id: 'housing',
      label: 'Жильё',
      total: -finance.value.housing,
      pct: housingPct,
      rows: [
        {
          label: 'Аренда / ипотека + ЖКХ',
          value: -finance.value.housing
        }
      ],
      hint:
        housingPct.value != null
          ? housingPct.value > 30
            ? `${housingPct.value}% дохода на жильё — выше рекомендуемых 25–30%. Если аренда выросла, возможно стоит пересмотреть бюджет.`
            : `${housingPct.value}% дохода на жильё — в норме.`
          : null,
      hintType:
        housingPct.value != null && housingPct.value > 30 ? 'warn' : 'info'
    },
    {
      id: 'credit',
      label: 'Кредиты',
      total: -finance.value.credit,
      pct: creditPct.value,
      rows:
        finance.value.credit > 0
          ? [
              {
                label: 'Кредиты и кредитные карты',
                value: -finance.value.credit
              }
            ]
          : [],
      hint:
        finance.value.credit > 0 && creditPct.value != null
          ? `Кредитная нагрузка ${creditPct.value}% дохода — ${creditPct.value <= 20 ? 'в норме.' : 'выше рекомендуемых 20%. Рассмотрите досрочное погашение.'}`
          : null,
      hintType:
        creditPct.value == null || creditPct.value <= 20 ? 'info' : 'warn'
    },
    {
      id: 'envelopes',
      label: 'Конверты',
      total: -grandTotal.value,
      pct:
        finance.value.income > 0
          ? Math.round((grandTotal.value / finance.value.income) * 100)
          : null,
      hint: showPmWarn.value
        ? `Чистый доход ${netIncome.value.toLocaleString('ru')} ₽ ниже базового минимума — рекомендуем сначала увеличить доход.`
        : null,
      hintType: 'warn',
      rows: []
    },
    {
      id: 'other',
      label: 'Прочие расходы',
      total: null,
      pct: null,
      rows: []
    }
  ].filter((g) => (g.total !== null && g.total !== 0) || g.rows.length > 0)
})
</script>

<template>
  <div id="sp-finance">
    <div class="section-heading">
      <div>
        <span class="section-title">Бюджет месяца</span>
        <div class="section-subtitle">
          Сколько приходит и куда уходит каждый месяц
        </div>
      </div>
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '2px'
        }"
      >
        <button id="sp-btn-finance" class="section-link">
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
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Обновить данные
        </button>

        <span
          v-if="hasUpdatedAt"
          :style="{
            fontSize: '10px',
            color: 'var(--text-3)',
            letterSpacing: '0.01em'
          }"
        >
          {{ updatedAt }}
        </span>
      </div>
    </div>

    <template v-if="finance.income > 0 && grandTotal === 0">
      <button class="zero-state-banner zero-state-banner--warn">
        <span class="zero-state-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </span>
        <span class="zero-state-text">
          <span class="zero-state-title">Конверты не заполнены</span>
          <span class="zero-state-sub">
            Расходы по категориям не учтены — свободный остаток завышен
          </span>
        </span>
        <svg
          class="zero-state-arrow"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </template>

    <template v-if="finance.income === 0">
      <button class="zero-state-banner zero-state-banner--warn">
        <span class="zero-state-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </span>
        <span class="zero-state-text">
          <span class="zero-state-title">Укажите доход и расходы</span>
          <span class="zero-state-sub">
            Все расчёты будут нулевыми, пока не заполнены данные
          </span>
        </span>
        <svg
          class="zero-state-arrow"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </template>

    <div class="profile-card">
      <div class="bl-row income">
        <span class="bl-label">Доход</span>
        <span class="bl-value">
          {{ finance.income.toLocaleString('ru') }} ₽
        </span>
      </div>

      <BudgetGroup
        v-for="group in budgetGroups"
        :key="group.id"
        :group="group"
      />

      <div class="bl-row total-expenses">
        <span class="bl-label">Итого расходов</span>
        <span class="bl-value">
          −{{ totalExpenses.toLocaleString('ru') }} ₽

          <span v-if="finance.income > 0" class="bl-tag-neutral">
            {{ Math.round((totalExpenses / finance.income) * 100) }}%
          </span>
        </span>
      </div>

      <div
        :class="`bl-row remainder${savings < 0 ? ' remainder--deficit' : savingsPct >= 20 ? ' remainder--good' : ''}`"
      >
        <span class="bl-label">Свободный остаток</span>

        <span class="bl-value">
          {{ savings < 0 ? '-' : '' }}
          {{ Math.abs(savings).toLocaleString('ru') }} ₽

          <span v-if="finance.income > 0" class="bl-tag">
            {{ Math.round((savings / finance.income) * 100) }}%
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
