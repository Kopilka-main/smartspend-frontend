import { useMutation, useQueryCache } from '@pinia/colada'

export const useVotePromo = (id: string) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: { vote: 'down' | 'up' }) => {
      return await $api(`/promos/${id}/vote`, {
        method: 'POST',
        body: { ...vars }
      })
    },
    onSuccess() {
      queryCache.invalidateQueries({ key: ['promo'] })
    }
  })
}
