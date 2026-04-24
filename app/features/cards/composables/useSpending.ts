import { useFetchSpending } from '~/features/cards/queries/useFetchSpending'

export const useSpending = () => {
  const { data } = useFetchSpending()

  const spending = computed(() => {
    return data.value ? data.value.data : {}
  })

  const totalSpendingAmount = computed(() => {
    let result = 0

    Object.keys(spending.value).forEach((key) => {
      result += Number(spending.value[key])
    })

    return result
  })

  return { spending, totalSpendingAmount }
}
