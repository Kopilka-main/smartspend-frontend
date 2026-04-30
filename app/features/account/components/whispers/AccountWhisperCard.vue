<script setup lang="ts">
import { useVotePromo } from '~/features/promo/queries/useVotePromo'
import type { PromoItem } from '~/types'

import PromoCardVoteHistory from '~/features/promo/components/common/PromoCardVoteHistory.vue'
import PromoCardCode from '~/features/promo/components/common/PromoCardCode.vue'

type AccountWhisperCardProps = {
  whisper: PromoItem
}

const props = defineProps<AccountWhisperCardProps>()

const { mutate } = useVotePromo(props.whisper.id.toString())

const isDraft = ref(false)
const isCommentsVisible = ref(false)

const expiresLabel = computed(() => {
  const parts: string[] = []

  if (props.whisper.expiresAt) {
    parts.push(`до ${formatDate(props.whisper.expiresAt, 'PPP')}`)
  } else {
    parts.push('бессрочно')
  }

  if (props.whisper.createdAt) {
    parts.push(
      new Date(props.whisper.createdAt).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short'
      })
    )
  }

  return parts.join(' · ')
})

const onRemove = () => {}

const onReactAsDown = () => {
  mutate({
    vote: 'down'
  })
}

const onReactAsUp = () => {
  mutate({
    vote: 'up'
  })
}
</script>

<template>
  <div class="acc-article-card" :style="{ padding: 0, overflow: 'hidden' }">
    <div :style="{ padding: '14px 16px 10px' }">
      <div class="acc-whisper-header">
        <div
          class="promo-logo"
          :style="{
            background: whisper.company.color,
            width: '32px',
            height: '32px',
            fontSize: '11px'
          }"
        >
          {{ whisper.company.abbr }}
        </div>

        <div>
          <div class="acc-whisper-company">{{ whisper.company.name }}</div>

          <div class="acc-whisper-meta">
            {{ expiresLabel }}
          </div>
        </div>

        <span
          v-if="isDraft"
          class="visibility-badge badge-draft"
          :style="{ marginLeft: 'auto' }"
        >
          Черновик
        </span>
      </div>

      <div class="acc-article-title" :style="{ marginTop: '8px' }">
        {{ whisper.title }}
      </div>

      <PromoCardCode v-if="whisper.code" :code="whisper.code" />
    </div>

    <PromoCardVoteHistory :history="whisper.voteHistory" :with-margin="true" />

    <div
      class="fa-bottom whisper-actions"
      :style="{
        padding: '0 12px 10px',
        borderTop: '1px solid var(--border)',
        paddingTop: '8px'
      }"
    >
      <button
        :class="`fa-action-btn wvb-works${whisper.myVote === 'up' ? ' active' : ''}`"
        @click="onReactAsUp"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          :fill="whisper.myVote === 'up' ? 'currentColor' : 'none'"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
          />
          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
        Работает{{ whisper.votesUp > 0 ? ` · ${whisper.votesUp}` : '' }}
      </button>

      <button
        :class="`fa-action-btn wvb-not${whisper.myVote === 'down' ? ' active' : ''}`"
        @click="onReactAsDown"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          :fill="whisper.myVote === 'down' ? 'currentColor' : 'none'"
          stroke="currentColor"
          strokeWidth="2"
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
        Не работает{{ whisper.votesDown > 0 ? ` · ${whisper.votesDown}` : '' }}
      </button>

      <div class="f-spacer" />

      <button
        :class="`fa-action-btn${isCommentsVisible ? ' wv-comments-open' : ''}`"
        @click="isCommentsVisible = !isCommentsVisible"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          />
        </svg>
        {{ whisper.commentsCount > 0 ? whisper.commentsCount : 'Комментарии' }}
      </button>

      <button class="acc-btn-visibility acc-btn-delete-gray" @click="onRemove">
        Удалить
      </button>
    </div>
  </div>
</template>
