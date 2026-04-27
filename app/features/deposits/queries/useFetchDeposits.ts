import { useQuery } from '@pinia/colada'
import type { Deposit } from '~/types'

export const useFetchDeposits = (filters: Ref<any>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => [
      'deposits',
      filters.value.sort,
      filters.value.amount,
      filters.value.selectedMonth
    ],
    query: async () => {
      return $api<{ data: Deposit[] }>(
        `/deposits?sort=${filters.value.sort}&amount=${filters.value.amount}&months=${filters.value.selectedMonth}`,
        { method: 'GET' }
      )
    }
  })
}
