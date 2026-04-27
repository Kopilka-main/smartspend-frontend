import { useFetchMyWhispers } from '~/features/account/queries/useFetchMyWhispers'

export const useMyWhispers = () => {
  const { data, isLoading } = useFetchMyWhispers()

  const myWhispers = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    myWhispers,
    isLoading
  }
}
