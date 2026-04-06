import { useMutation, useQueryCache } from '@pinia/colada'

export const useAddToEnvelope = (id: string) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async () => {
      return $api(`/envelopes/sets/${id}`, { method: 'POST' })
    },
    onSuccess: async () => {
      await queryCache.invalidateQueries({ key: ['envelopes'] })
    }
  })
}
