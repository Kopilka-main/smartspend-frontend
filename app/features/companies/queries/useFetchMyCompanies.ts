import { useQuery } from '@pinia/colada'
import type { Company } from '~/types'

export const useFetchMyCompanies = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['my-companies'],
    query: async () => {
      return await $api<{ data: Company[] }>('/companies/user-companies', {
        method: 'GET'
      })
    }
  })
}
