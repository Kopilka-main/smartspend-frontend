import { useFetchMySubscriptions } from '~/features/account/queries/useFetchMySubscriptions'

export const useMySubscriptions = () => {
  const { data } = useFetchMySubscriptions()

  const mySubscriptions = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    mySubscriptions
  }
}
