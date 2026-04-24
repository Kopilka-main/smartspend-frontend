<script setup lang="ts">
import type { VoteHistoryItem } from '~/types'

type PromoCardVoteHistoryProps = {
  history: VoteHistoryItem[]
}

defineProps<PromoCardVoteHistoryProps>()
</script>

<template>
  <div>
    <div v-if="history.length > 0" class="whisper-history">
      <div
        v-for="item in history"
        :key="`${item.vote}-${item.userId}`"
        class="wvh-stripe"
        :style="{ background: item.vote === 'up' ? '#5E9478' : '#B85555' }"
      />
    </div>

    <div v-if="history.length === 0" class="whisper-first-check">
      Будь первым, кто проверит
    </div>
  </div>
</template>
