<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

type AppConfirmationProps = {
  title: string
  description: string
  cancelLabel: string
  acceptLabel: string
}

defineProps<AppConfirmationProps>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'accept'): void
}>()
</script>

<template>
  <AppModal>
    <div class="inv-modal" :style="{ maxWidth: '380px' }">
      <div class="inv-modal-title">
        {{ title }}
      </div>

      <div class="inv-modal-body">
        {{ description }}
      </div>

      <div class="inv-modal-actions">
        <button class="inv-modal-btn" @click="emit('close')">
          {{ cancelLabel }}
        </button>

        <button class="inv-modal-btn" @click="emit('accept')">
          {{ acceptLabel }}
        </button>
      </div>
    </div>
  </AppModal>
</template>
