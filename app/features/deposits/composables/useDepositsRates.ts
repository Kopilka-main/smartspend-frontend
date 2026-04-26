import { useFetchDepositsChartRates } from '~/features/deposits/queries/useFetchDepositsChartRates'

export const useDepositsRates = () => {
  const { data, isLoading } = useFetchDepositsChartRates()

  const rates = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    rates,
    isLoading
  }
}
