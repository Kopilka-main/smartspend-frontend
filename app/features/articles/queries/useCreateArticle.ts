import { useMutation, useQueryCache } from '@pinia/colada'

type ArticleBlock = {
  position: number
  type: string
  text: string
  html: any
  items: any
  title: any
}

type CreateArticlePayload = {
  title: string
  isPrivate: boolean
  linkedSetIds: string[]
  preview: string
  categoryId: string
  blocks: ArticleBlock[]
}

export const useCreateArticle = (onSuccess: () => void) => {
  const { $api } = useNuxtApp()
  const queryCache = useQueryCache()

  return useMutation({
    mutation: async (vars: CreateArticlePayload) => {
      return await $api('/articles', { method: 'POST', body: { ...vars } })
    },
    onSuccess: () => {
      queryCache.invalidateQueries({ key: ['my-articles'] })

      onSuccess()
    }
  })
}
