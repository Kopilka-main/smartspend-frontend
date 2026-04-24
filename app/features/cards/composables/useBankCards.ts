import { useFetchBankCards } from '~/features/cards/queries/useFetchBankCards'

export const useBankCards = (filters: Ref<any>) => {
  const { data, isLoading } = useFetchBankCards(filters)

  const bankCards = computed(() => {
    return data.value ? data.value.data : []
  })

  return { bankCards, isLoading }
}
