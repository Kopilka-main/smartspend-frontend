import { useQuery } from '@pinia/colada'
import type { PromoItem, SetCategory } from '~/types'

export const useFetchPromo = (filters: Ref<any>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => [
      'promo',
      filters.value.scope,
      filters.value.categories.map((c: SetCategory) => c.id).join(','),
      filters.value.company,
      filters.value.sort
    ],
    query: async () => {
      return await $api<{ data: PromoItem[] }>(
        `/promos?scope=${filters.value.scope}&categoryIds=${filters.value.categories.map((c: SetCategory) => c.id).join(',')}&companyIds=${filters.value.company}&sort=${filters.value.sort}`,
        { method: 'GET' }
      )
    }
  })
}
