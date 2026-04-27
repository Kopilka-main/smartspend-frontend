import { useFetchAuthorSets } from '~/features/authors/queries/useFetchAuthorSets'

export const useAuthorSets = (id: string) => {
  const { data } = useFetchAuthorSets(id)

  const sets = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    sets
  }
}
