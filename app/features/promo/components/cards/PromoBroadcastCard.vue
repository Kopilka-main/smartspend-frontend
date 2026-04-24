<script setup lang="ts">
import PromoCardVoteHistory from '~/features/promo/components/common/PromoCardVoteHistory.vue'
import PromoCardVoteButtons from '~/features/promo/components/PromoCardVoteButtons.vue'

import type { PromoItem } from '~/types'

type PromoBroadcastCardProps = {
  item: PromoItem
}

const props = defineProps<PromoBroadcastCardProps>()
</script>

<template>
  <div class="broadcast-card">
    <div class="broadcast-text">{{ item.text }}</div>

    <PromoCardVoteHistory :history="item.voteHistory" />

    <div class="pc-header">
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
            {{ item.channel }}

            <span v-if="item.expiresAt">
              · {{ formatDate(item.expiresAt, 'PPP') }}
            </span>
          </div>
        </div>
      </div>

      <PromoCardVoteButtons
        :is-comments-visible="false"
        :id="item.id"
        :comments-count="item.commentsCount"
        :votes-up="item.votesUp"
        :my-vote="item.myVote"
        :votes-down="item.votesDown"
      >
        <template #action>
          <a
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="fa-action-btn"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>

            Открыть
          </a>
        </template>
      </PromoCardVoteButtons>
    </div>
  </div>
</template>
