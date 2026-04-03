import { useModal } from 'vue-final-modal'

import QuizModal from '~/features/home/components/modals/QuizModal.vue'

export const useQuizModal = () => {
  const { close, ...restParams } = useModal({
    component: QuizModal,
    attrs: {
      onClose: () => {
        close()
      }
    }
  })

  return {
    close,
    ...restParams
  }
}
