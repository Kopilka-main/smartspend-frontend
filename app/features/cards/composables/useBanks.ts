import { useFetchBanks } from '~/features/cards/queries/useFetchBanks'

export const useBanks = () => {
  const { data, isLoading } = useFetchBanks()

  const banks = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    banks,
    isLoading
  }
}
