import { useQuery } from '@pinia/colada'

export const useReactions = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['reactions'],
    query: async () => {
      return await $api('/reactions/my', { method: 'GET' })
    }
  })
}
