import { useFetchBankCards } from '~/features/cards/queries/useFetchBankCards'

export const useBankCards = () => {
  const { data, isLoading } = useFetchBankCards()

  const bankCards = computed(() => {
    return data.value ? data.value.data : []
  })

  return { bankCards, isLoading }
}
