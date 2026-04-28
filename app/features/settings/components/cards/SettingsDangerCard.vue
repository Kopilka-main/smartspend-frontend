<script setup lang="ts">
import { useConfirmation } from '~/composables/useConfirmation'

const confirmationModal = useConfirmation()
const auth = useAuth()

const onSignOut = () => {
  confirmationModal.patchOptions({
    attrs: {
      title: 'Выйти из аккаунта?',
      description:
        'Вы будете перенаправлены на страницу входа. Все несохранённые данные будут потеряны.',
      cancelLabel: 'Отмена',
      acceptLabel: 'Выйти',
      onAccept: () => {
        auth.signOut({ callbackUrl: '/' })
      }
    }
  })

  confirmationModal.open()
}
</script>

<template>
  <div class="settings-section settings-danger-zone">
    <div class="settings-section-title">Опасная зона</div>

    <div class="settings-row">
      <div>
        <div class="settings-row-label">Выйти из аккаунта</div>
        <div class="settings-row-desc">Завершить сеанс на этом устройстве</div>
      </div>

      <button class="btn-danger" @click="onSignOut">Выйти</button>
    </div>
  </div>
</template>
