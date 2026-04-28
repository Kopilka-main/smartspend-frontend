import { useQuery } from '@pinia/colada'
import type { NotificationItem } from '~/types'

export const useFetchNotifications = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['notifications'],
    query: async () => {
      return await $api<{ data: NotificationItem[] }>('/notifications', {
        method: 'GET'
      })
    }
  })
}
