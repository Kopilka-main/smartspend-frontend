import { useFetchMySets } from '~/features/account/queries/useFetchMySets'

export const useMySets = () => {
  const { data } = useFetchMySets()

  const mySets = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    mySets
  }
}
