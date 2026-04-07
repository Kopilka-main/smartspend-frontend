import { useQuery } from '@pinia/colada'
import type { Reaction } from '~/types'

export const useReactions = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['reactions'],
    query: async () => {
      return await $api<{ data: Reaction[] }>('/reactions/my', {
        method: 'GET'
      })
    }
  })
}
