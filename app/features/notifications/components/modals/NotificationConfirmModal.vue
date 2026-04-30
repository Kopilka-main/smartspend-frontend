<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

type NotificationConfirmModalProps = {
  type?: string
  setTitle?: string
}

defineProps<NotificationConfirmModalProps>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()
</script>

<template>
  <AppModal>
    <div class="req-confirm-modal">
      <div class="req-confirm-icon">
        <svg
          v-if="type === 'approve'"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <svg
          v-else
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </div>

      <div class="req-confirm-title">
        {{ type === 'approve' ? 'Добавить статью?' : 'Отклонить статью?' }}
      </div>

      <div class="req-confirm-desc">
        <template v-if="type === 'approve'">
          Статья будет добавлена в раздел дополнений набора
          <strong>«{{ setTitle }}»</strong>
        </template>
        <template v-else>
          Запрос будет отклонён. Автор получит уведомление.
        </template>
      </div>

      <div class="req-confirm-btns">
        <button class="req-confirm-cancel" @click="emit('close')">
          Отмена
        </button>

        <button
          :class="`req-confirm-ok${type === 'reject' ? ' req-confirm-ok--reject' : ''}`"
          @click="emit('confirm')"
        >
          {{ type === 'approve' ? 'Добавить' : 'Отклонить' }}
        </button>
      </div>
    </div>
  </AppModal>
</template>
