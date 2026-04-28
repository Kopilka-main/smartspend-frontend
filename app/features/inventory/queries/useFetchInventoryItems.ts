import { useQuery } from '@pinia/colada'
import type { InventoryItem } from '~/types'

export const useFetchInventoryItems = () => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: ['inventory-items'],
    query: async () => {
      return await $api<{ data: InventoryItem[] }>('/inventory/items', {
        method: 'GET'
      })
    }
  })
}
