import { useMutation, useQueryCache } from '@pinia/colada'

export const useAddSetComment = (id: string, onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: { text: string }) => {
      return await $api(`/catalog/${id}/comments`, {
        method: 'POST',
        body: { ...vars }
      })
    },
    onSuccess: async () => {
      await queryCache.invalidateQueries({ key: ['set-comments', id] })

      onSuccess()
    }
  })
}
