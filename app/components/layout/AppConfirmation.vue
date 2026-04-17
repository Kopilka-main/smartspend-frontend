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
    <div
      class="relative w-full max-w-380 rounded-20 bg-surface overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.18)] transform translate-y-0 transition-transform duration-300"
    >
      <div class="p-24">
        <div class="mx-auto w-full max-w-380">
          <div class="text-16 font-bold tracking-[-0.02em] text-text mb-16">
            {{ title }}
          </div>

          <p class="text-13 text-text-2 leading-[1.55] mb-20">
            {{ description }}
          </p>

          <div class="mt-16 flex items-center justify-end gap-8">
            <button
              type="button"
              class="h-36 rounded-10 border border-border bg-surface px-14 text-12 font-medium text-text-2 hover:bg-surface-2 hover:text-text"
              @click="emit('close')"
            >
              {{ cancelLabel }}
            </button>

            <button
              type="submit"
              class="disabled:opacity-50 h-36 rounded-10 border border-status-urgent bg-status-urgent text-12 font-medium text-surface px-14 hover:opacity-[0.9]"
              @click="emit('accept')"
            >
              {{ acceptLabel }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </AppModal>
</template>
