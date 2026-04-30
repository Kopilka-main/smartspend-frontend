import { useMutation, useQueryCache } from '@pinia/colada'

export const useDeleteNotification = (id: number) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async () => {
      return await $api(`/notifications/${id}`, { method: 'DELETE' })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['notifications'] })
    }
  })
}
