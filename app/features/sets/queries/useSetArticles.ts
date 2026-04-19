import { useQuery } from '@pinia/colada'
import type { ArticleDetails } from '~/types'

export const useSetArticles = (id: string) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['set-articles', id],
    query: async () => {
      return await $api<{ data: ArticleDetails[] }>(`/catalog/${id}/articles`, {
        method: 'GET'
      })
    }
  })
}
