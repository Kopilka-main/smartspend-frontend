import { useModal } from 'vue-final-modal'

import AppConfirmation from '~/components/layout/AppConfirmation.vue'

export const useConfirmation = () => {
  const { close, ...rest } = useModal({
    component: AppConfirmation,
    attrs: {
      title: '',
      description: '',
      cancelLabel: 'Отмена',
      acceptLabel: 'Выйти',

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
