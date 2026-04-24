import { useModal } from 'vue-final-modal'

import BankCardFiltersModal from '~/features/cards/components/modals/BankCardFiltersModal.vue'

export const useBankCardFiltersModal = () => {
  const { close, ...rest } = useModal({
    component: BankCardFiltersModal,
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
