import { useFetchNotificationMessages } from '~/features/notifications/queries/useFetchNotificationMessages'

export const useNotificationMessages = (id: number) => {
  const { data } = useFetchNotificationMessages(id)

  const messages = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    messages
  }
}
