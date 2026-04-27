import { useMutation, useQueryCache } from '@pinia/colada'

export const useSaveMyCompanies = (onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: { companyIds: string[] }) => {
      return await $api('/companies/user-companies/batch', {
        method: 'POST',
        body: { ...vars }
      })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['my-companies'] })

      onSuccess()
    }
  })
}
