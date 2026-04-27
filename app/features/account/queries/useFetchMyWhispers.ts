import { useQuery } from '@pinia/colada'
import type { PromoItem } from '~/types'

export const useFetchMyWhispers = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['my-whispers'],
    query: async () => {
      return await $api<{ data: PromoItem[] }>('/promos?scope=authored', {
        method: 'GET'
      })
    }
  })
}
