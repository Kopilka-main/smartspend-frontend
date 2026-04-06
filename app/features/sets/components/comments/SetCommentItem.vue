<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

import { useUpdateReaction } from '~/queries/useUpdateReaction'
import type { SetComment } from '~/types'

type SetCommentItem = {
  comment: SetComment
}

const props = defineProps<SetCommentItem>()

const timeAgo = computed(() => {
  return formatDistanceToNow(props.comment.createdAt, {
    locale: ru,
    addSuffix: true
  })
})

const updateReaction = useUpdateReaction()

const onToggleLike = () => {
  updateReaction.mutate({
    targetType: 'set_comment',
    targetId: props.comment.id.toString(),
    type: 'like'
  })
}

const onToggleDislike = () => {
  updateReaction.mutate({
    targetType: 'comment',
    targetId: props.comment.id.toString(),
    type: 'dislike'
  })
}
</script>

<template>
  <div class="flex gap-12 border-b border-border px-24 py-14">
    <div
      class="flex h-30 w-30 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 text-11 font-semibold text-text-2"
    >
      {{ comment.initials }}
    </div>
    <div class="flex-1">
      <div class="mb-4 flex items-baseline gap-8">
        <span class="text-13 font-semibold tracking-[-0.01em] text-text">
          {{ comment.name }}
        </span>

        <span class="font-secondary text-11 text-text-3">
          {{ timeAgo }}
        </span>
      </div>

      <div class="text-13 leading-[1.55] tracking-[-0.01em] text-text-2">
        {{ comment.text }}
      </div>

      <div class="mt-6 flex items-center gap-12">
        <button
          type="button"
          class="c-like liked flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-150 hover:text-accent-green"
          @click="onToggleLike"
        >
          <svg
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
            ></path>
            <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>

          {{ comment.likesCount }}
        </button>

        <button
          type="button"
          class="c-like c-dislike disliked flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-150 hover:text-accent-red"
          @click="onToggleDislike"
        >
          <svg
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
            ></path>
            <path
              d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
            ></path>
          </svg>

          {{ comment.dislikesCount }}
        </button>
      </div>
    </div>
  </div>
</template>
