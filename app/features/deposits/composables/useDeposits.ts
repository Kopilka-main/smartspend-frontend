import { useFetchDeposits } from '~/features/deposits/queries/useFetchDeposits'

export const useDeposits = () => {
  const { data } = useFetchDeposits()

  const deposits = computed(() => {
    return data.value ? data.value.data : []
  })

  return { deposits }
}
