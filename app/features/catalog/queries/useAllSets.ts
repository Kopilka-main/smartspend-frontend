import { useQuery } from '@pinia/colada'
import type { CustomSet } from '~/types'

export const useAllSets = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['all-sets'],
    query: async () => {
      return await $api<{ data: CustomSet[] }>('/catalog', { method: 'GET' })
    }
  })
}
