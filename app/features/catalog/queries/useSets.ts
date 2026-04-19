import { useQuery } from '@pinia/colada'
import type { CustomSet, SetCategory } from '~/types'

export const useSets = (filters: Ref<any>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => [
      'sets',
      filters.value.categories.map((c: SetCategory) => c.id).join(','),
      filters.value.q,
      filters.value.source,
      filters.value.setType,
      filters.value.sort
    ],
    query: async () => {
      return await $api<{ data: CustomSet[] }>(
        `/catalog?category_ids=${filters.value.categories.map((c: SetCategory) => c.id).join(',')}&q=${filters.value.q}&source=${filters.value.source}&set_type=${filters.value.setType}&sort=${filters.value.sort}`,
        { method: 'GET' }
      )
    }
  })
}
