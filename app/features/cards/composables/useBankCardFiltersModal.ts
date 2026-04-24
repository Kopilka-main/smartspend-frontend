import { useModal } from 'vue-final-modal'

import BankCardFiltersModal from '~/features/cards/components/modals/BankCardFiltersModal.vue'

export const useBankCardFiltersModal = (
  onApply: (payload: {
    banks: string[]
    types: string[]
    conditions: string[]
  }) => void
) => {
  const { close, ...rest } = useModal({
    component: BankCardFiltersModal,
    attrs: {
      onClose: () => {
        close()
      },
      onApply: (payload) => {
        onApply(payload)

        close()
      }
    }
  })

  return {
    close,
    ...rest
  }
}
