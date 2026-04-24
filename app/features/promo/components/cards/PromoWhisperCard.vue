<script setup lang="ts">
import type { PromoItem } from '~/types'

import PromoWhisperAuthorChip from '~/features/promo/components/common/PromoWhisperAuthorChip.vue'
import PromoCardVoteHistory from '~/features/promo/components/common/PromoCardVoteHistory.vue'
import PromoCardCode from '~/features/promo/components/common/PromoCardCode.vue'
import PromoCardVoteButtons from '~/features/promo/components/PromoCardVoteButtons.vue'
import PromoCardVoteToast from '~/features/promo/components/common/PromoCardVoteToast.vue'

type PromoWhisperCardProps = {
  item: PromoItem
}

const props = defineProps<PromoWhisperCardProps>()

const myVote = ref('')

const cardMood = computed(() => {
  return myVote.value === 'works'
    ? 'works'
    : myVote.value === 'not'
      ? 'not'
      : null
})

const voteToast = ref('')

const dateLabel = computed(() => {
  const parts = [formatDate(props.item.createdAt, 'PPP')]

  if (props.item.expiresAt) {
    parts.push(`до ${formatDate(props.item.expiresAt, 'PPP')}`)
  }

  return parts.join(' · ')
})
</script>

<template>
  <div
    :class="`whisper-card${cardMood ? ` whisper-card--${cardMood}` : ''}`"
    :style="{ position: 'relative' }"
  >
    <PromoCardVoteToast v-if="voteToast" :vote="voteToast" />

    <div class="whisper-title">{{ item.title }}</div>

    <div v-if="item.text" class="whisper-desc">
      {{ item.text.slice(0, 140) }}
    </div>

    <PromoCardCode v-if="item.code" :code="item.code" />

    <PromoCardVoteHistory :history="item.voteHistory" />

    <PromoCardVoteButtons
      :is-comments-visible="false"
      :comments-count="0"
      :id="item.id"
      :my-vote="item.myVote"
      :votes-up="item.votesUp"
      :votes-down="item.votesDown"
    >
      <div class="promo-co-btn">
        <div
          class="promo-logo"
          :style="{ background: item.company.color, cursor: 'pointer' }"
        >
          {{ item.company.abbr }}
        </div>
        <div class="promo-company-info">
          <div class="promo-company-name" :style="{ cursor: 'pointer' }">
            {{ item.company.name }}

            <button v-if="item.categoryName" class="fa-category">
              {{ item.categoryName }}
            </button>
          </div>

          <div class="promo-expires">
            <PromoWhisperAuthorChip v-if="item.author" :author="item.author" />

            <span>
              {{ dateLabel }}
            </span>
          </div>
        </div>
      </div>
    </PromoCardVoteButtons>
  </div>
</template>
