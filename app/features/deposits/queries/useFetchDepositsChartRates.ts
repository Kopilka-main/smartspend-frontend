import { useQuery } from '@pinia/colada'
import type { DepositChartRate } from '~/types'

export const useFetchDepositsChartRates = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['deposit-chart-rates'],
    query: async () => {
      return await $api<{ data: DepositChartRate[] }>('/deposits/chart', {
        method: 'GET'
      })
    }
  })
}
