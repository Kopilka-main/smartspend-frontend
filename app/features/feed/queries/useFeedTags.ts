import { useQuery } from '@pinia/colada'

export const useFeedTags = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['feed-tags'],
    query: async () => {
      return await $api<{ data: string[] }>('/feed/tags', { method: 'GET' })
    }
  })
}
