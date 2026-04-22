import { useFetchSet } from '~/features/sets/queries/useFetchSet'

export const useSet = (id: string) => {
  const { data, isLoading } = useFetchSet(id)
  const { currentUser } = useCurrentUser()

  const set = computed(() => {
    return data.value ? data.value.data : null
  })

  const title = computed(() => {
    return set.value ? set.value.title : ''
  })

  const isPersonal = computed(() => {
    return set.value?.author?.id === currentUser.value?.id
  })

  const isConsumable = computed(() => {
    return set.value?.categoryId === 'food'
  })

  return { set, title, isPersonal, isConsumable, isLoading }
}
