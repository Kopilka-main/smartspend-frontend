<script setup lang="ts">
import type { FeedSet } from '~/types'
import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import { formatSource } from '~/features/sets/utils/formatSource'

type FeedArticleProps = {
  item: FeedSet
}

const props = defineProps<FeedArticleProps>()

const initials = computed(() => {
  if (props.item.source === 'smartspend') {
    return 'SS'
  }

  if (props.item.source === 'community') {
    return 'CO'
  }

  if (props.item.source === 'own') {
    return 'МН'
  }

  return ''
})

const authorName = computed(() => {
  return formatSource(props.item.source)
})
</script>

<template>
  <article class="rounded-14 border border-border bg-surface shadow-app-sm">
    <div class="px-16 pt-14">
      <div class="flex flex-col gap-10">
        <div class="flex items-start justify-start gap-10">
          <button
            type="button"
            class="inline-flex min-w-0 items-center gap-6 rounded-20 border-0 bg-transparent p-0 transition-opacity duration-120 hover:opacity-70"
          >
            <span
              class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-author-avatar-green text-8 font-bold text-surface"
            >
              {{ initials }}
            </span>

            <span
              class="truncate text-12 font-medium tracking-[-0.01em] text-text-2"
            >
              {{ authorName }}
            </span>
          </button>

          <span class="pt-2 shrink-0 font-secondary text-11 text-text-3">
            {{
              formatDistanceToNow(item.createdAt, {
                locale: ru,
                addSuffix: true
              })
            }}
          </span>
        </div>

        <h3 class="text-16 font-semibold tracking-[-0.02em] text-text">
          {{ item.title }}
        </h3>
      </div>

      <p class="mt-8 text-13 leading-[1.45] text-text-2">
        {{ item.preview }}
      </p>
    </div>

    <div
      class="mt-12 flex flex-wrap items-center gap-10 border-t border-border px-16 py-9"
    >
      <div class="inline-flex items-center gap-10">
        <button
          type="button"
          class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-accent-green transition-colors duration-120"
        >
          <svg
            width="13"
            height="13"
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

          <span>{{ item.likesCount || 0 }}</span>
        </button>

        <button
          type="button"
          class="inline-flex items-center gap-4 border-0 bg-transparent p-0 font-secondary text-11 text-text-3 transition-colors duration-120 hover:text-status-urgent"
        >
          <svg
            width="13"
            height="13"
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
          <span>{{ item.dislikesCount || 0 }}</span>
        </button>
      </div>

      <div
        class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
      >
        <svg
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          ></path>
        </svg>
        <span>{{ item.commentsCount || 0 }}</span>
      </div>

      <div
        class="inline-flex items-center gap-4 font-secondary text-11 text-text-3"
      >
        <svg
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          ></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span>{{ item.viewsCount || 0 }}</span>
      </div>
    </div>
  </article>
</template>
