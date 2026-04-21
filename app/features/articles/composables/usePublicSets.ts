import { useFetchPublicSets } from '~/features/articles/queries/useFetchPublicSets'

export const usePublicSets = () => {
  const { data } = useFetchPublicSets()

  const publicSets = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    publicSets
  }
}
