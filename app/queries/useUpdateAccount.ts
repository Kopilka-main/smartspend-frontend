import { useMutation } from '@pinia/colada'

export const useUpdateAccount = (onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const { refresh } = useAuth()

  return useMutation({
    mutation: async (vars: {
      displayName: string
      bio: string
      username: string
    }) => {
      await $api('/me', {
        method: 'PUT',
        body: {
          ...vars
        }
      })
    },
    onSuccess: async () => {
      await refresh()

      onSuccess()
    }
  })
}
