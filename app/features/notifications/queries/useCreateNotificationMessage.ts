import { useMutation, useQueryCache } from '@pinia/colada'

export const useCreateNotificationMessage = (
  id: number,
  onSuccess: () => void
) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: { text: string }) => {
      return await $api(`/notifications/${id}/messages`, {
        method: 'POST',
        body: { ...vars }
      })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['notifications'] })
      queryCache.invalidateQueries({ key: ['notification-messages', id] })

      onSuccess()
    }
  })
}
