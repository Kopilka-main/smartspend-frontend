import { useMutation, useQueryCache } from '@pinia/colada'

export const useRemoveFromEnvelope = (id: string) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async () => {
      return await $api(`/envelopes/sets/${id}`, { method: 'DELETE' })
    },
    onSuccess: async () => {
      await queryCache.invalidateQueries({ key: ['envelopes'] })
    }
  })
}
