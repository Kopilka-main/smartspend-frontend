import { useMutation } from '@pinia/colada'
import type { SettingsResponse } from '~/types'

export const useUpdateSettings = () => {
  const { $api } = useNuxtApp()

  return useMutation({
    mutation: async (vars: Partial<SettingsResponse>) => {
      return await $api('/me/settings', { method: 'PUT', body: { ...vars } })
    }
  })
}
