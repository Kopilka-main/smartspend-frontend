import { useMutation, useQueryCache } from '@pinia/colada'

type CreateWhisperPayload = {
  type: 'whisper'
  title: string
  code?: string
  channel?: string
  expiresAt?: Date
  companyId: string
}

export const useCreateWhisper = (onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: CreateWhisperPayload) => {
      return await $api('/promos', { method: 'POST', body: { ...vars } })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['my-whispers'] })

      onSuccess()
    }
  })
}
