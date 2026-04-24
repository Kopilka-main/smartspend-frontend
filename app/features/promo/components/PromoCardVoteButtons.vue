<script setup lang="ts">
import { useVotePromo } from '~/features/promo/queries/useVotePromo'

type PromoCardVoteButtonsProps = {
  isCommentsVisible: boolean
  commentsCount: number
  votesUp: number
  votesDown: number
  id: number
  myVote: string | null
}

const props = defineProps<PromoCardVoteButtonsProps>()

const { mutate } = useVotePromo(props.id.toString())

const worksAnim = ref(false)
const notAnim = ref(false)
</script>

<template>
  <div class="pc-header">
    <slot />

    <div class="pc-header-actions">
      <button
        :class="`fa-action-btn wvb-works${myVote === 'up' ? ' active' : ''}${worksAnim ? ' wv-works-pop' : ''}`"
        @click="mutate({ vote: 'up' })"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          :fill="myVote === 'up' ? 'currentColor' : 'none'"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
          />
          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>

        Работает{{ votesUp > 0 ? ` ${votesUp}` : '' }}
      </button>

      <button
        :class="`fa-action-btn wvb-not${myVote === 'down' ? ' active' : ''}${notAnim ? ' wv-not-shake' : ''}`"
        @click="mutate({ vote: 'down' })"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          :fill="myVote === 'down' ? 'currentColor' : 'none'"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
          />
          <path
            d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
          />
        </svg>

        Не работает{{ votesDown > 0 ? ` ${votesDown}` : '' }}
      </button>

      <slot name="action" />

      <button
        :class="`fa-action-btn${isCommentsVisible ? ' wv-comments-open' : ''}`"
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
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          />
        </svg>

        Комментарии{{ commentsCount > 0 ? ` · ${commentsCount}` : '' }}
      </button>

      <slot name="badge" />
    </div>
  </div>
</template>
