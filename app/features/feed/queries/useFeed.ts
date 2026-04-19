import { useQuery } from '@pinia/colada'
import type { FeedSet, FeedArticle, SetCategory } from '~/types'

export const useFeed = (filters: Ref<any>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => [
      'articles',
      filters.value.categories.map((cat: SetCategory) => cat.id).join(','),
      filters.value.sort,
      filters.value.articleType,
      filters.value.mode
    ],
    query: async () => {
      return await $api<{ data: FeedArticle[] }>(
        `/feed?categories=${filters.value.categories.map((cat: SetCategory) => cat.id).join(',')}&sort=${filters.value.sort}&type=${filters.value.articleType}&mode=${filters.value.mode}`,
        { method: 'GET' }
      )
    }
  })
}
