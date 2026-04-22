import { useQuery } from '@pinia/colada'
import type { CustomSetDetails } from '~/types'

export const useFetchSet = (id: string) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['set-details', id],
    query: async () => {
      return await $api<{ data: CustomSetDetails }>(`/catalog/${id}`, {
        method: 'GET'
      })
    }
  })
}
