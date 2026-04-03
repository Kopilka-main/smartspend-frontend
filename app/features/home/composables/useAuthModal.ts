import { useModal } from 'vue-final-modal'

import AuthModal from '~/features/home/components/modals/AuthModal/AuthModal.vue'

export const useAuthModal = () => {
  const { close, ...restOptions } = useModal({
    component: AuthModal,
    attrs: {
      mode: 'sign-in',

      onClose: () => {
        close()
      }
    }
  })

  return { close, ...restOptions }
}
