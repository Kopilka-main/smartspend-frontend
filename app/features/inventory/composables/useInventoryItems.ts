import { useFetchInventoryItems } from '~/features/inventory/queries/useFetchInventoryItems'

export const useInventoryItems = () => {
  const { data } = useFetchInventoryItems()

  const items = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    items
  }
}
