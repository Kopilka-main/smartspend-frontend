import { useQuery } from '@pinia/colada'
import type { ArticleDetails } from '~/types'

export const useFetchArticle = (id: string) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['article', id],
    query: async () => {
      return await $api<{ data: ArticleDetails }>(`/articles/${id}`, {
        method: 'GET'
      })
    }
  })
}
