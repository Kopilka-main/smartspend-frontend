import { useMutation } from '@pinia/colada'

export const useUpdateReaction = () => {
  const { $api } = useNuxtApp()

  return useMutation({
    mutation: async (vars: {
      targetType: string
      targetId: string
      type: string
    }) => {
      return await $api('/reactions', { method: 'POST', body: { ...vars } })
    }
  })
}
