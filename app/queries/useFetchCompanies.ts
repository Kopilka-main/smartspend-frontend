import { useQuery } from '@pinia/colada'
import type { Company } from '~/types'

export const useFetchCompanies = (q: Ref<string>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['companies', q.value],
    enabled: () => q.value.length > 0,
    query: async () => {
      return await $api<{ data: Company[] }>(`/companies?q=${q.value}`, {
        method: 'GET'
      })
    }
  })
}
