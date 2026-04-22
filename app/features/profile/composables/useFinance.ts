import { useFetchFinance } from '~/features/profile/queries/useFetchFinance'
import { useEnvelopes } from '~/features/sets/composables/useEnvelopes'
import { DEFAULT_FINANCE } from '~/features/profile/constants/finance'

const FEDERAL_PM_2026 = 20644
const SMART_SPEND_BASE = Math.round(FEDERAL_PM_2026 * 0.75)

export const useFinance = () => {
  const { data } = useFetchFinance()
  const { envelopes } = useEnvelopes()

  const finance = computed(() => {
    return data.value ? data.value.data : DEFAULT_FINANCE
  })

  const hasUpdatedAt = computed(() => {
    return !!finance.value.updatedAt
  })

  const updatedAt = computed(() => {
    return hasUpdatedAt.value
      ? formatDate(finance.value.updatedAt as Date, 'PPP')
      : ''
  })

  const grandTotal = computed(() => {
    const activeEnvelopes = envelopes.value.filter(
      (envelope) => !envelope.paused
    )

    return activeEnvelopes.reduce((acc, envelope) => {
      return acc + envelope.amount
    }, 0)
  })

  const shouldFillFinance = computed(() => {
    return finance.value.income === 0
  })

  const shouldFillEnvelopes = computed(() => {
    return finance.value.income > 0 && grandTotal.value === 0
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

  return {
    finance,
    hasUpdatedAt,
    updatedAt,
    shouldFillFinance,
    shouldFillEnvelopes,
    grandTotal,
    totalExpenses,
    savings,
    savingsPct,
    netIncome,
    showPmWarn,
    housingPct,
    creditPct
  }
}
