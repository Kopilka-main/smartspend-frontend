import { useQuery } from '@pinia/colada'
import type { Deposit } from '~/types'

export const useFetchDeposits = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['deposits'],
    query: async () => {
      return $api<{ data: Deposit[] }>('/deposits', { method: 'GET' })
    }
  })
}
