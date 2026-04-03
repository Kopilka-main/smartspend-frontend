import { useQuery } from '@pinia/colada'
import type { CustomSet } from '~/types'

export const useMySets = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['my-sets'],
    query: async () => {
      return await $api<{ data: CustomSet[] }>('/catalog/my', { method: 'GET' })
    }
  })
}
