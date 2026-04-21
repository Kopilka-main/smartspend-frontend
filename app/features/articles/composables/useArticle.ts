import { useFetchArticle } from '~/features/articles/queries/useFetchArticle'
import { useCurrentUser } from '~/composables/useCurrentUser'

export const useArticle = (id: string) => {
  const { data, isLoading } = useFetchArticle(id)
  const { currentUser } = useCurrentUser()

  const article = computed(() => {
    return data.value ? data.value.data : null
  })

  const isMine = computed(() => {
    return currentUser.value?.id === article.value?.author?.id
  })

  const title = computed(() => {
    return article.value ? article.value.title : ''
  })

  return { article, title, isMine, isLoading }
}
