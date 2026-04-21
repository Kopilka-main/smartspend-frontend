import { useFetchFinance } from '~/features/profile/queries/useFetchFinance'
import { DEFAULT_FINANCE } from '~/features/profile/constants/finance'

export const useFinance = () => {
  const { data } = useFetchFinance()

  const finance = computed(() => {
    return data.value ? data.value.data : DEFAULT_FINANCE
  })

  return { finance }
}
