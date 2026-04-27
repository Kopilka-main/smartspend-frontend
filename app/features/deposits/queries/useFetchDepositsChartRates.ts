import { useQuery } from '@pinia/colada'
import type { DepositChartRate } from '~/types'

export const useFetchDepositsChartRates = (filters: Ref<any>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => [
      'deposit-chart-rates',
      filters.value.banks.join(','),
      filters.value.frequency.join(','),
      filters.value.conditions.join(',')
    ],
    query: async () => {
      return await $api<{ data: DepositChartRate[] }>(
        `/deposits/chart?banks=${filters.value.banks.join(',')}&freq=${filters.value.frequency.join(',')}&conditions=${filters.value.conditions.join(',')}`,
        {
          method: 'GET'
        }
      )
    }
  })
}
