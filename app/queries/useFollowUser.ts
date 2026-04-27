import { useMutation, useQueryCache } from '@pinia/colada'

export const useFollowUser = (id: string) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (isFollowing: boolean) => {
      if (isFollowing) {
        return $api(`/users/${id}/follow`, { method: 'DELETE' })
      } else {
        return $api(`/users/${id}/follow`, { method: 'POST' })
      }
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['author', id] })
    }
  })
}
