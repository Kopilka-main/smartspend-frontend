import { useQuery } from '@pinia/colada'
import type { EnvelopeItem } from '~/types'

export const useEnvelopes = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['envelopes'],
    query: async () => {
      return await $api<{ data: EnvelopeItem[] }>('/envelopes', {
        method: 'GET'
      })
    }
  })
}
