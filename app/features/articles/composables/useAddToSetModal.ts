import { useModal } from 'vue-final-modal'
import AddToSetModal from '~/features/articles/components/AddToSetModal.vue'

export const useAddToSetModal = () => {
  const { close, ...rest } = useModal({
    component: AddToSetModal,
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
