import { useQuery } from '@pinia/colada'

export const useFetchSpending = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['spending'],
    query: async () => {
      return await $api<{ data: Record<string, number> }>('/cards/spending', {
        method: 'GET'
      })
    }
  })
}
