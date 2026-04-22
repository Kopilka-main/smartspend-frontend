import { useFinance } from '~/features/profile/composables/useFinance'
import { useCategories } from '~/composables/useCategories'
import { useEnvelopes } from '~/features/sets/composables/useEnvelopes'

import type { BudgetGroupItem } from '~/types'

export const useBudgetGroups = () => {
  const { finance, grandTotal, housingPct, creditPct, showPmWarn, netIncome } =
    useFinance()
  const { categories } = useCategories()
  const { envelopes } = useEnvelopes()

  const rowsForEnvelopes = computed(() => {
    const result: { label: string; value: number }[] = []

    const activeEnvelopes = envelopes.value.filter(
      (envelope) => !envelope.paused
    )

    categories.value.forEach((category) => {
      const envelopesForCategory = activeEnvelopes.filter(
        (envelope) => envelope.categoryId === category.id
      )

      if (envelopesForCategory.length > 0) {
        result.push({
          label: category.name,
          value: -envelopesForCategory.reduce((acc, envelope) => {
            return acc + envelope.amount
          }, 0)
        })
      }
    })

    return result
  })

  const budgetGroups = computed<BudgetGroupItem[]>(() => {
    return [
      {
        id: 'housing',
        label: 'Жильё',
        total: -finance.value.housing,
        pct: housingPct.value,
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
        rows: rowsForEnvelopes.value
      },
      {
        id: 'other',
        label: 'Прочие расходы',
        total: null,
        pct: null,
        rows: []
      }
    ]
  })

  return { budgetGroups }
}
