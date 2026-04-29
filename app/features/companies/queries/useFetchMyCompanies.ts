import { useQuery } from '@pinia/colada'
import type { SavedCompany } from '~/types'

export const useFetchMyCompanies = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['my-companies'],
    query: async () => {
      return await $api<{ data: SavedCompany[] }>('/companies/user-companies', {
        method: 'GET'
      })
    }
  })
}
