import { useQuery } from '@pinia/colada'
import type { BankCardItem } from '~/types'

export const useFetchBankCards = (filters: Ref<any>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => [
      'bank-cards',
      filters.value.sort,
      filters.value.banks.join(','),
      filters.value.conditions.join(','),
      filters.value.types.join(',')
    ],
    query: async () => {
      return await $api<{ data: BankCardItem[] }>(
        `/cards?sort=${filters.value.sort}&cardType=${filters.value.types.join(',')}&condition=${filters.value.conditions.join(',')}&bankName=${filters.value.banks.join(',')}`,
        { method: 'GET' }
      )
    }
  })
}
