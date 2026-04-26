import { useModal } from 'vue-final-modal'
import DepositsFiltersModal from '~/features/deposits/components/DepositsFiltersModal.vue'

export const useDepositsFiltersModal = (
  onApply: (payload: {
    banks: string[]
    frequency: string[]
    conditions: string[]
    liquidity: string[]
  }) => void
) => {
  const { close, ...rest } = useModal({
    component: DepositsFiltersModal,
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
