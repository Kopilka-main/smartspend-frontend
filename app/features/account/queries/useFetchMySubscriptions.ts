import { useQuery } from '@pinia/colada'
import type { Subscription } from '~/types'

export const useFetchMySubscriptions = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['my-subscriptions'],
    query: async () => {
      return await $api<{ data: Subscription[] }>('/users/me/following', {
        method: 'GET'
      })
    }
  })
}
