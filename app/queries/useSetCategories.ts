import { useQuery } from '@pinia/colada'
import type { SetCategory } from '~/types'

export const useSetCategories = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['set-categories'],
    query: async () =>
      await $api<{ data: SetCategory[] }>('/envelopes/categories', {
        method: 'GET'
      })
  })
}
