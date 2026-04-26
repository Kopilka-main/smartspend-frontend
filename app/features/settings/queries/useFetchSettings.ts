import { useQuery } from '@pinia/colada'
import type { SettingsResponse } from '~/types'

export const useFetchSettings = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['settings'],
    query: async () => {
      return await $api<{ data: SettingsResponse }>('/me/settings', {
        method: 'GET'
      })
    }
  })
}
