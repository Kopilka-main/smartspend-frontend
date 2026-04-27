<script setup lang="ts">
import type { VoteHistoryItem } from '~/types'

type PromoCardVoteHistoryProps = {
  history: VoteHistoryItem[]
  withMargin?: boolean
}

withDefaults(defineProps<PromoCardVoteHistoryProps>(), {
  withMargin: false
})
</script>

<template>
  <div>
    <div
      v-if="history.length > 0"
      class="whisper-history"
      :style="withMargin ? { margin: '0 16px 10px' } : null"
    >
      <div
        v-for="item in history"
        :key="`${item.vote}-${item.userId}`"
        class="wvh-stripe"
        :style="{ background: item.vote === 'up' ? '#5E9478' : '#B85555' }"
      />
    </div>

    <div
      v-if="history.length === 0"
      class="whisper-first-check"
      :style="withMargin ? { margin: '0 16px 10px' } : null"
    >
      Будь первым, кто проверит
    </div>
  </div>
</template>
