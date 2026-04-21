import { useMutation } from '@pinia/colada'

export const useCreateArticleNote = (id: string, onSuccess: () => void) => {
  const { $api } = useNuxtApp()

  return useMutation({
    mutation: async () => {},
    onSuccess: () => {
      onSuccess()
    }
  })
}
