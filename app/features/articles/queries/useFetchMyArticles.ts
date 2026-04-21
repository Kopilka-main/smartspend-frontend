import { useQuery } from '@pinia/colada'
import type { ArticleDetails } from '~/types'

export const useFetchMyArticles = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['my-articles'],
    query: async () => {
      return await $api<{ data: ArticleDetails[] }>('/articles/my', {
        method: 'GET'
      })
    }
  })
}
