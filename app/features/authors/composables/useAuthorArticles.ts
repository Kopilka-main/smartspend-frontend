import { useFetchAuthorArticles } from '~/features/authors/queries/useFetchAuthorArticles'

export const useAuthorArticles = (id: string) => {
  const { data } = useFetchAuthorArticles(id)

  const articles = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    articles
  }
}
