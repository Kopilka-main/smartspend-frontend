import { useQuery } from '@pinia/colada'
import type { ArticleDetails } from '~/types'

export const useFetchAuthorArticles = (id: string) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['author-articles', id],
    query: async () => {
      return await $api<{ data: ArticleDetails[] }>(`/users/${id}/articles`, {
        method: 'GET'
      })
    }
  })
}
