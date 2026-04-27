import { useQuery } from '@pinia/colada'
import type { CustomSet } from '~/types'

export const useFetchAuthorSets = (id: string) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['author-sets', id],
    query: async () => {
      return await $api<{ data: CustomSet[] }>(`/users/${id}/sets`, {
        method: 'GET'
      })
    }
  })
}
