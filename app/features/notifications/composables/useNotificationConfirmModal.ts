import { useModal } from 'vue-final-modal'
import NotificationConfirmModal from '~/features/notifications/components/modals/NotificationConfirmModal.vue'

export const useNotificationConfirmModal = () => {
  const { close, ...rest } = useModal({
    component: NotificationConfirmModal,
    attrs: {
      onClose: () => close()
    }
  })

  return {
    close,
    ...rest
  }
}
