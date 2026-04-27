import { useFetchDeposits } from '~/features/deposits/queries/useFetchDeposits'

export const useDeposits = (filters: Ref<any>) => {
  const { data, isLoading } = useFetchDeposits(filters)

  const deposits = computed(() => {
    return data.value ? data.value.data : []
  })

  return { deposits, isLoading }
}
