import { useFetchNotifications } from '~/features/notifications/queries/useFetchNotifications'

export const useNotifications = () => {
  const { data } = useFetchNotifications()

  const notifications = computed(() => {
    return data.value ? data.value.data : []
  })

  return {
    notifications
  }
}
