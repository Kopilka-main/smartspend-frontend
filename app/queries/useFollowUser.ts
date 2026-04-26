import { useMutation } from '@pinia/colada'

export const useFollowUser = (id: string) => {
  const { $api } = useNuxtApp()

  return useMutation({
    mutation: async () => {
      return $api(`/users/${id}/follow`, { method: 'POST' })
    }
  })
}
