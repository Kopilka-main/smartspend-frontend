import { useMutation, useQueryCache } from '@pinia/colada'
import type { SettingsResponse } from '~/types'

export const useUpdateSettings = () => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: Partial<SettingsResponse>) => {
      return await $api('/me/settings', { method: 'PUT', body: { ...vars } })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['settings'] })
    }
  })
}
