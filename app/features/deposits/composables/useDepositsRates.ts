import { useFetchDepositsChartRates } from '~/features/deposits/queries/useFetchDepositsChartRates'

export const useDepositsRates = (filters: Ref<any>) => {
  const { data, isLoading } = useFetchDepositsChartRates(filters)

  const rates = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    rates,
    isLoading
  }
}
