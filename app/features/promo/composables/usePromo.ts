import { useFetchPromo } from '~/features/promo/queries/useFetchPromo'

export const usePromo = (filters: Ref<any>) => {
  const { data, isLoading } = useFetchPromo(filters)

  const items = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    items,
    isLoading
  }
}
