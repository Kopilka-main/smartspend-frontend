<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import { useCurrentUser } from '~/composables/useCurrentUser'
import { useItemReaction } from '~/composables/useItemReaction'

import type { ArticleDetails } from '~/types'

import AppLikeButton from '~/components/ui/AppLikeButton.vue'
import AppDislikeButton from '~/components/ui/AppDislikeButton.vue'
import AddToSetModal from '~/features/articles/components/AddToSetModal.vue'

type ArticleDetailsCardProps = {
  article: ArticleDetails
}

const props = defineProps<ArticleDetailsCardProps>()

const { isReactedAsDislike, isReactedAsLike, onToggleDislike, onToggleLike } =
  useItemReaction(props.article.id, 'article')

const addToSetModal = useModal({
  component: AddToSetModal,
  attrs: {
    article: props.article,

    onClose: () => {
      addToSetModal.close()
    }
  }
})

const { currentUser } = useCurrentUser()

const author = computed(() => props.article.author)

const isMine = computed(() => {
  return currentUser.value?.id === author.value.id
})

const onAttachToSet = () => {
  addToSetModal.open()
}

const onEditArticle = () => {}

const onRemoveArticle = () => {}
</script>

<template>
  <div class="hero-card">
    <div class="hero-body">
      <div class="hero-body-main">
        <div class="hero-title">{{ article.title }}</div>

        <div class="hero-desc">{{ article.preview }}</div>
      </div>
    </div>

    <div class="art-meta-row">
      <span class="author-chip-wrap">
        <button class="author-chip">
          <span class="author-avatar-sm" :style="{ background: author.color }">
            {{ author.initials }}
          </span>

          <span class="author-chip-meta">
            <span class="author-name-inline">
              {{ author.displayName }}
            </span>

            <span v-if="article.publishedAt" class="author-chip-date">
              {{ article.publishedAt }}
            </span>
          </span>
        </button>
      </span>

      <div class="art-meta-sep" />

      <div class="fa-action-stat">
        <svg
          width="13"
          height="13"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>

        {{ article.viewsCount }}
      </div>

      <AppLikeButton
        :count="article.likesCount"
        :is-liked="isReactedAsLike"
        @toggle="onToggleLike"
      />

      <button class="fa-action-stat fa-action-stat--btn">
        <svg
          width="13"
          height="13"
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

        {{ article.commentsCount }}
      </button>

      <AppDislikeButton
        :is-disliked="isReactedAsDislike"
        @toggle="onToggleDislike"
      />

      <div class="f-spacer" />

      <button class="art-add-set-btn" @click="onAttachToSet">
        Прикрепить к набору
      </button>

      <template v-if="isMine">
        <button class="fa-action-btn" @click="onEditArticle">
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
            />
          </svg>
        </button>

        <button class="fa-action-btn art-delete-btn" @click="onRemoveArticle">
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
          </svg>
        </button>
      </template>
    </div>
  </div>
</template>
