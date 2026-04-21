import { useMutation, useQueryCache } from '@pinia/colada'

export const useRemoveArticleNote = (id: string) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (id: string) => {
      return await $api(`/articles/notes/${id}`, { method: 'DELETE' })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['article', id] })
    }
  })
}
