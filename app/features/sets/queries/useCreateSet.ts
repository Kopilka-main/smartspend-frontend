import { useMutation, useQueryCache } from '@pinia/colada'
import type { CreateSetPayload } from '~/types'

export const useCreateSet = (onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: CreateSetPayload) => {
      return await $api('/catalog', { method: 'POST', body: { ...vars } })
    },
    onSuccess: async () => {
      await queryCache.invalidateQueries({ key: ['sets'] })

      onSuccess()
    }
  })
}
