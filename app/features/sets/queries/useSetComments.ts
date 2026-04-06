import { useQuery } from '@pinia/colada'
import type { SetComment } from '~/types'

export const useSetComments = (id: string, sort: Ref<string>) => {
  const { $api } = useNuxtApp()

  return useQuery({
    key: () => ['set-comments', id, sort.value],
    query: async () => {
      return await $api<{ data: SetComment[] }>(
        `/catalog/${id}/comments?sort=${sort.value}`,
        {
          method: 'GET'
        }
      )
    }
  })
}
