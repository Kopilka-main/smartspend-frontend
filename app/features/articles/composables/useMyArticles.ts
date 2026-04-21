import { useFetchMyArticles } from '~/features/articles/queries/useFetchMyArticles'

export const useMyArticles = () => {
  const { data } = useFetchMyArticles()

  const myArticles = computed(() => {
    return data.value ? data.value.data : []
  })

  return { myArticles }
}
