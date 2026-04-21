import { useFetchCategories } from '~/queries/useFetchCategories'

export const useCategories = () => {
  const { data } = useFetchCategories()

  const categories = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    categories
  }
}
