import { useQuery } from '@pinia/colada'

export const useFetchBanks = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['banks'],
    query: async () => {
      return await $api<{ data: string[] }>('/cards/banks', { method: 'GET' })
    }
  })
}
