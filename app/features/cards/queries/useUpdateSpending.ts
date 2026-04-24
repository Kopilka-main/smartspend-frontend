import { useMutation } from '@pinia/colada'

export const useUpdateSpending = () => {
  const { $api } = useNuxtApp()

  return useMutation({
    mutation: async (vars: { spending: Record<string, number> }) => {
      return await $api('/cards/spending', { method: 'PUT', body: { ...vars } })
    }
  })
}
