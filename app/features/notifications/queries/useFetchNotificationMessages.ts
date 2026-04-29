import { useQuery } from '@pinia/colada'
import type { NotificationMessage } from '~/types'

export const useFetchNotificationMessages = (id: number) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['notification-messages', id],
    query: async () => {
      return await $api<{ data: NotificationMessage[] }>(
        `/notifications/${id}/messages`,
        { method: 'GET' }
      )
    }
  })
}
