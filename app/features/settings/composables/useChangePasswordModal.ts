import { useModal } from 'vue-final-modal'
import ChangePasswordModal from '~/features/settings/components/ChangePasswordModal.vue'

export const useChangePasswordModal = () => {
  const { close, ...rest } = useModal({
    component: ChangePasswordModal,
    attrs: {
      onClose: () => {
        close()
      }
    }
  })

  return {
    close,
    ...rest
  }
}
