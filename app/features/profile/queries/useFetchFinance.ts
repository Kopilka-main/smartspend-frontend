import { useQuery } from '@pinia/colada'
import type { Finance } from '~/types'

export const useFetchFinance = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['finance'],
    query: async () => {
      return await $api<{ data: Finance }>('/profile/finance', {
        method: 'GET'
      })
    }
  })
}
