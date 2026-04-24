<script setup lang="ts">
type PromoCardInteractionsProps = {
  votesUp: number
  votesDown: number
}

const props = defineProps<PromoCardInteractionsProps>()

const history = computed(() => {
  const result: string[] = []

  const allItemsCount = 10 //props.votesUp + props.votesDown

  for (let i = 0; i < allItemsCount; i++) {
    result.push('w')
  }

  return result
})
</script>

<template>
  <div>
    <div v-if="history.length > 0" class="whisper-history">
      <div
        v-for="item in history"
        class="wvh-stripe"
        :style="{ background: item === 'w' ? '#5E9478' : '#B85555' }"
      />
    </div>

    <div v-if="history.length === 0" class="whisper-first-check">
      Будь первым, кто проверит
    </div>
  </div>
</template>
