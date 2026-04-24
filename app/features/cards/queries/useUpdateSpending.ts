import { useMutation, useQueryCache } from '@pinia/colada'

export const useUpdateSpending = (onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: { spending: Record<string, number> }) => {
      return await $api('/cards/spending', { method: 'PUT', body: { ...vars } })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['spending'] })

      onSuccess()
    }
  })
}
