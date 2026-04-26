import { useQuery } from '@pinia/colada'
import type { Company } from '~/types'

export const useFetchCompanies = (q?: Ref<string>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['companies', q ? q.value : ''],
    enabled: () => {
      if (typeof q === 'undefined') {
        return true
      }

      return q.value.length > 0
    },
    query: async () => {
      return await $api<{ data: Company[] }>(
        `/companies?q=${q ? q.value : ''}`,
        {
          method: 'GET'
        }
      )
    }
  })
}
