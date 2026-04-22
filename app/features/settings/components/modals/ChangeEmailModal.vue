<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isDone = ref(false)
const email = ref('')
const password = ref('')

const onSubmit = () => {}
</script>

<template>
  <AppModal>
    <div class="inv-modal" :style="{ maxWidth: '380px' }">
      <div class="inv-modal-title">
        {{ isDone ? 'Письмо отправлено' : 'Изменить email' }}
      </div>

      <template v-if="isDone">
        <div class="inv-modal-body">
          Ссылка для подтверждения нового адреса отправлена на
          <strong>{{ email }}</strong
          >. Перейдите по ссылке, чтобы завершить смену.
        </div>

        <div class="inv-modal-actions">
          <button class="inv-modal-btn">Понятно</button>
        </div>
      </template>
      <template v-else>
        <form @submit.prevent="onSubmit">
          <div class="inv-modal-body" :style="{ paddingBottom: '0px' }">
            <div class="auth-field" :style="{ marginBottom: '10px' }">
              <label class="auth-label">Новый email</label>

              <input
                class="auth-input"
                type="email"
                placeholder="new@email.com"
              />
            </div>

            <div class="auth-field">
              <label class="auth-label">Текущий пароль</label>

              <input
                class="auth-input"
                type="password"
                placeholder="Для подтверждения"
              />
            </div>
          </div>

          <div class="inv-modal-actions">
            <button type="button" class="inv-modal-btn">Отмена</button>

            <button
              type="submit"
              class="inv-modal-btn"
              :style="{ opacity: email && password ? 1 : 0.4 }"
            >
              Отправить письмо
            </button>
          </div>
        </form>
      </template>
    </div>
  </AppModal>
</template>
