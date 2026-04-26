import { useQuery } from '@pinia/colada'
import type { UserProfile } from '~/types'

export const useFetchAuthorProfile = (id: string) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['author', id],
    query: async () => {
      return await $api<{ data: UserProfile }>(`/users/${id}`, {
        method: 'GET'
      })
    }
  })
}
