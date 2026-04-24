import { useModal } from 'vue-final-modal'

import BankCardSpendingModal from '~/features/cards/components/modals/BankCardSpendingModal.vue'

export const useBankCardSpendingModal = () => {
  const { close, ...rest } = useModal({
    component: BankCardSpendingModal,
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
