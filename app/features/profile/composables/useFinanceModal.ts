import { useModal } from 'vue-final-modal'
import FinancialModal from '~/features/profile/components/modals/financial/FinancialModal.vue'

export const useFinanceModal = () => {
  const { close, ...rest } = useModal({
    component: FinancialModal,
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
