import { useModal } from 'vue-final-modal'
import ChangeEmailModal from '~/features/settings/components/ChangeEmailModal.vue'

export const useChangeEmailModal = () => {
  const { close, ...rest } = useModal({
    component: ChangeEmailModal,
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
