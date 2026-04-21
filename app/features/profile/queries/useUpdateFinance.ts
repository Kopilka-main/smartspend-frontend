import { useMutation, useQueryCache } from '@pinia/colada'
import type { Finance } from '~/types'

export const useUpdateFinance = (onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (finance: Partial<Finance>) => {
      return await $api('/profile/finance', {
        method: 'PUT',
        body: { ...finance }
      })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['finance'] })

      onSuccess()
    }
  })
}
