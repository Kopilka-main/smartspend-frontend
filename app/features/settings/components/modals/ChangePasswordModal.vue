<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isDone = ref(false)

const onSubmit = () => {}
</script>

<template>
  <AppModal>
    <div class="inv-modal" :style="{ maxWidth: '380px' }">
      <div class="inv-modal-title">
        {{ isDone ? 'Пароль изменён' : 'Сменить пароль' }}
      </div>

      <template v-if="isDone">
        <div class="inv-modal-body">
          Пароль успешно обновлён. Используйте новый пароль при следующем входе.
        </div>

        <div class="inv-modal-actions">
          <button class="inv-modal-btn">Готово</button>
        </div>
      </template>
      <template v-else>
        <form @submit.prevent="onSubmit">
          <div class="auth-field" :style="{ marginBottom: '10px' }">
            <label class="auth-label">Текущий пароль</label>

            <div class="auth-pass-wrap">
              <input class="auth-input" type="password" />
            </div>
          </div>
          <div class="auth-field" :style="{ marginBottom: '10px' }">
            <label class="auth-label">Новый пароль</label>

            <div class="auth-pass-wrap">
              <input class="auth-input" type="password" />
            </div>
          </div>
          <div class="auth-field" :style="{ marginBottom: '10px' }">
            <label class="auth-label">Повторите новый</label>

            <div class="auth-pass-wrap">
              <input class="auth-input" type="password" />
            </div>
          </div>
        </form>
      </template>
    </div>
  </AppModal>
</template>
