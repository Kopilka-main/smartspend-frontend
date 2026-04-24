import { useQuery } from '@pinia/colada'
import type { BankCardItem } from '~/types'

export const useFetchBankCards = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['bank-cards'],
    query: async () => {
      return await $api<{ data: BankCardItem[] }>('/cards', { method: 'GET' })
    }
  })
}
