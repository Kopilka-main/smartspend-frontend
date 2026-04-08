import { useQuery } from '@pinia/colada'
import type { FeedSet, FeedArticle } from '~/types'

export const useFeed = (filters: Ref<any>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => [
      'articles',
      filters.value.categoryId,
      filters.value.sort,
      filters.value.articleType,
      filters.value.mode
    ],
    query: async () => {
      return await $api<{ data: FeedArticle[] | FeedSet[] }>(
        `/feed?cat=${filters.value.categoryId}&sort=${filters.value.sort}&type=${filters.value.articleType}&mode=${filters.value.mode}`,
        { method: 'GET' }
      )
    }
  })
}
