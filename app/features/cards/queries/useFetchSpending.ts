import { useQuery } from '@pinia/colada'

export const useFetchSpending = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['spending'],
    query: async () => {
      return await $api<{ data: any }>('/cards/spending', { method: 'GET' })
    }
  })
}
