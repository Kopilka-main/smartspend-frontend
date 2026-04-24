import { useFetchSpending } from '~/features/cards/queries/useFetchSpending'

export const useSpending = () => {
  const { data } = useFetchSpending()

  const spending = computed(() => {
    return data.value ? data.value.data : []
  })

  return { spending }
}
