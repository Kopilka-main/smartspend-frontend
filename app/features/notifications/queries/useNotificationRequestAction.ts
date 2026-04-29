import { useMutation, useQueryCache } from '@pinia/colada'

export const useNotificationRequestAction = (id: number) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: { status: string }) => {
      let url = ''

      if (vars.status === 'reject') {
        url = `/notifications/${id}/reject`
      }

      if (vars.status === 'approve') {
        url = `/notifications/${id}/approve`
      }

      if (vars.status === 'withdraw') {
        url = `/notifications/${id}/withdraw`
      }

      await $api(url, { method: 'POST' })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['notifications'] })
    }
  })
}
