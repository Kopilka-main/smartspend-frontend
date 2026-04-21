import { useQuery } from '@pinia/colada'
import type { CustomSet } from '~/types'

export const useFetchPublicSets = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['public-sets'],
    query: async () => {
      return await $api<{ data: CustomSet[] }>('/catalog', { method: 'GET' })
    }
  })
}
