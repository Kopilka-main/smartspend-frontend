import { useMutation, useQueryCache } from '@pinia/colada'

export const useAddSetToArticle = (id: string, onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: { setId: string }) => {
      return await $api(`/articles/${id}/link-set`, {
        method: 'POST',
        body: { ...vars }
      })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['article', id] })

      onSuccess()
    }
  })
}
