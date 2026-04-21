<script setup lang="ts">
type FinancialModalDoneProps = {
  isLoading: boolean
}

defineProps<FinancialModalDoneProps>()

const emit = defineEmits<{
  (e: 'save'): void
}>()
</script>

<template>
  <div class="fin-v2-done">
    <div class="fin-v2-done-title">Данные обновлены</div>
    <div class="fin-v2-done-desc">
      Финансовая картина и прогноз накоплений пересчитаны с новыми данными
    </div>

    <div class="quiz-actions" :style="{ marginTop: 20 }">
      <button
        class="quiz-result-btn"
        :disabled="isLoading"
        @click="emit('save')"
      >
        Сохранить →
      </button>
    </div>
  </div>
</template>
