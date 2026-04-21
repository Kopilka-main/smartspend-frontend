<script setup lang="ts">
import { formatDate } from '~/utils/formatDate'
import type { FeedArticle } from '~/types'

import AppLikeButton from '~/components/ui/AppLikeButton.vue'
import AppDislikeButton from '~/components/ui/AppDislikeButton.vue'

type FeedArticleProps = {
  item: FeedArticle
}

const props = defineProps<FeedArticleProps>()

const { isReactedAsLike, isReactedAsDislike, onToggleDislike, onToggleLike } =
  useItemReaction(props.item.id, 'article')

const authorColor = computed(() => {
  return props.item.author ? props.item.author.color : '#4E8268'
})

const authorInitials = computed(() => {
  return props.item.author ? props.item.author.initials : 'SS'
})

const authorName = computed(() => {
  return props.item.author
    ? props.item.author.displayName
    : 'Команда SmartSpend'
})

const createdAt = computed(() => {
  return formatDate(props.item.createdAt, 'PP')
})
</script>

<template>
  <article class="feed-article">
    <h2 class="fa-title">{{ item.title }}</h2>

    <p class="fa-preview">{{ item.preview }}</p>

    <div class="fa-meta-row">
      <div class="author-chip-wrap">
        <button class="author-chip">
          <span class="author-avatar-sm" :style="{ background: authorColor }">
            {{ authorInitials }}
          </span>

          <span class="author-chip-meta">
            <span class="author-name-inline">{{ authorName }}</span>
            <span class="author-chip-date">{{ createdAt }}</span>
          </span>
        </button>
      </div>

      <div class="fa-meta-actions">
        <AppLikeButton
          :count="item.likesCount"
          :is-liked="isReactedAsLike"
          @toggle="onToggleLike"
        />

        <AppDislikeButton
          :is-disliked="isReactedAsDislike"
          @toggle="onToggleDislike"
        />

        <div v-if="item.commentsCount" class="fa-action-stat">
          <svg
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            />
          </svg>
          {{ item.commentsCount }}
        </div>
      </div>

      <div class="fa-meta-right">
        <button class="fa-category">
          {{ item.categoryName }}
        </button>

        <span
          v-if="item.setLink"
          class="fa-set-link"
          :style="{ '--set-clr': item.setLink.color }"
        >
          {{ item.setLink.title }}
        </span>
      </div>
    </div>
  </article>
</template>
