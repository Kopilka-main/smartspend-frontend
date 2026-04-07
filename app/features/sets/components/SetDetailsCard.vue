<script setup lang="ts">
import { useQueryCache } from '@pinia/colada'
import { useCurrentUser } from '~/composables/useCurrentUser'
import { formatDate } from '~/utils/formatDate'
import { formatSource } from '~/features/sets/utils/formatSource'
import { formatType } from '~/features/sets/utils/formatType'
import { useAddToEnvelope } from '~/features/sets/queries/useAddToEnvelope'
import { useRemoveFromEnvelope } from '~/features/sets/queries/useRemoveFromEnvelope'
import { useEnvelopes } from '~/features/sets/queries/useEnvelopes'
import { useUpdateReaction } from '~/queries/useUpdateReaction'
import { useReactions } from '~/queries/useReactions'

import type { CustomSetDetails } from '~/types'

type SetDetailsCardProps = {
  item: CustomSetDetails | null
}

const props = defineProps<SetDetailsCardProps>()

const { currentUser } = useCurrentUser()
const queryCache = useQueryCache()

const source = computed(() => {
  return formatSource(props.item?.source as string)
})

const type = computed(() => {
  return formatType(props.item?.setType as string)
})

const { data: envelopes } = useEnvelopes()

const isInEnvelope = computed(() => {
  if (envelopes.value) {
    return envelopes.value.data.find((item) => item.setId === props.item?.id)
  }

  return false
})

const addToEnvelope = useAddToEnvelope(props.item?.id as string)
const removeFromEnvelope = useRemoveFromEnvelope(props.item?.id as string)

const { data: reactionsData } = useReactions()
const updateReaction = useUpdateReaction(() => {
  queryCache.invalidateQueries({ key: ['reactions'] })
})

const reactions = computed(() => {
  return reactionsData.value
    ? reactionsData.value.data.filter(
        (reaction) => reaction.targetType === 'set'
      )
    : []
})

const isReactedAsLike = computed(() => {
  return reactions.value.find(
    (reaction) =>
      reaction.type === 'like' &&
      reaction.userId === currentUser.value?.id &&
      reaction.targetId === (props.item?.id.toString() as string)
  )
})

const isReactedAsDislike = computed(() => {
  return reactions.value.find(
    (reaction) =>
      reaction.type === 'dislike' &&
      reaction.userId === currentUser.value?.id &&
      reaction.targetId === (props.item?.id.toString() as string)
  )
})

const onToggleLike = () => {
  updateReaction.mutate({
    targetType: 'set',
    targetId: props.item?.id.toString() as string,
    type: 'like'
  })
}

const onToggleDislike = () => {
  updateReaction.mutate({
    targetType: 'set',
    targetId: props.item?.id.toString() as string,
    type: 'dislike'
  })
}
</script>

<template>
  <div
    id="sp-sd-hero"
    class="overflow-hidden rounded-16 bg-surface shadow-main"
  >
    <div class="h-4 bg-[rgb(125,175,146)]" aria-hidden="true"></div>
    <div class="px-32 py-28">
      <div class="mb-10 flex flex-wrap items-center gap-5">
        <span
          class="whitespace-nowrap rounded-5 bg-accent-green-light px-7 py-2 text-10 font-semibold uppercase tracking-[0.04em] text-accent-green"
        >
          {{ source }}
        </span>

        <span
          class="whitespace-nowrap rounded-5 border border-accent-green-border bg-accent-green-light px-7 py-2 text-10 font-semibold tracking-[0.03em] text-accent-green"
        >
          {{ type }}
        </span>

        <!--        <span-->
        <!--          class="inline-flex items-center gap-4 whitespace-nowrap rounded-5 border border-[#E8D080] bg-[#FFF8E6] px-7 py-2 text-10 font-semibold uppercase tracking-[0.03em] text-[#9A6800]"-->
        <!--        >-->
        <!--          <svg-->
        <!--            width="9"-->
        <!--            height="9"-->
        <!--            fill="none"-->
        <!--            stroke="currentColor"-->
        <!--            viewBox="0 0 24 24"-->
        <!--            stroke-width="2.5"-->
        <!--            stroke-linecap="round"-->
        <!--            stroke-linejoin="round"-->
        <!--            class="shrink-0"-->
        <!--          >-->
        <!--            <path d="M12 20h9"></path>-->
        <!--            <path-->
        <!--              d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"-->
        <!--            ></path>-->
        <!--          </svg>-->
        <!--          Под меня-->
        <!--        </span>-->
      </div>

      <div
        class="mb-6 flex items-center gap-8 text-24 font-bold leading-[1.1] tracking-[-0.03em] text-text"
      >
        {{ item?.title }}

        <button
          type="button"
          class="inline-flex h-22 w-22 shrink-0 cursor-pointer items-center justify-center rounded-full border-[0.15rem] border-border bg-surface-2 font-secondary text-12 font-bold leading-none text-text-3 transition-colors hover:border-accent-green hover:bg-accent-green-light hover:text-accent-green"
          title="Как устроена страница"
        >
          ?
        </button>
      </div>

      <div class="text-14 leading-normal tracking-[-0.01em] text-text-2">
        {{ item?.description }}
      </div>

      <div
        class="mt-20 grid grid-cols-2 gap-12 sm:flex items-start border-t border-border pt-20"
      >
        <div
          class="flex min-w-0 flex-1 flex-col gap-3 border-r border-border py-0 pl-0 pr-20"
        >
          <div
            class="font-secondary text-20 font-medium leading-none tracking-[-0.02em] text-accent-green"
          >
            {{ item?.amount }} ₽
          </div>

          <div class="text-11 tracking-[-0.01em] text-text-3">
            в месяц (амортизация)
          </div>
        </div>

        <div
          class="flex min-w-0 flex-1 flex-col gap-3 border-r border-border sm:px-20"
        >
          <div
            class="font-secondary text-20 font-medium leading-none tracking-[-0.02em] text-accent-green"
          >
            {{ item?.items.length }}
          </div>

          <div class="text-11 tracking-[-0.01em] text-text-3">
            позиций в наборе
          </div>
        </div>
        <div
          class="flex min-w-0 flex-1 flex-col gap-3 border-r border-border sm:px-20"
        >
          <div
            class="font-secondary text-20 font-medium leading-none tracking-[-0.02em] text-accent-green"
          >
            {{ item?.usersCount }}
          </div>

          <div class="text-11 tracking-[-0.01em] text-text-3">
            пользователей добавили
          </div>
        </div>

        <div class="flex min-w-0 flex-1 flex-col gap-3 py-0 sm:pl-20 pr-0">
          <div
            class="font-secondary text-15 font-medium leading-none tracking-[-0.02em] text-accent-green"
          >
            {{ formatDate(item?.createdAt as Date, 'PPP') }}
          </div>

          <div class="text-11 tracking-[-0.01em] text-text-3">
            дата добавления
          </div>
        </div>
      </div>

      <div class="mt-20 flex flex-wrap items-center gap-8">
        <button
          v-if="!isInEnvelope"
          id="sp-sd-add"
          type="button"
          class="inline-flex cursor-pointer items-center gap-7 rounded-10 border-0 bg-text px-20 py-10 text-14 font-semibold tracking-[-0.01em] text-surface transition-opacity hover:opacity-[0.85]"
          @click="addToEnvelope.mutate()"
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="shrink-0"
          >
            <path d="M12 5v14M5 12h14"></path>
          </svg>

          Добавить в конверт
        </button>

        <template v-else>
          <button
            id="sp-sd-added"
            type="button"
            class="inline-flex cursor-default items-center gap-7 rounded-10 border-0 bg-status-ok px-20 py-10 text-14 font-semibold tracking-[-0.01em] text-surface opacity-70 shadow-app-sm"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shrink-0"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>

            Добавлено в конверт
          </button>

          <button
            type="button"
            class="inline-flex items-center gap-6 rounded-10 border border-border bg-transparent px-16 py-10 text-13 font-medium tracking-[-0.01em] text-text-3 transition-colors hover:border-[#D08080] hover:bg-[#FFF5F5] hover:text-[#C05050]"
            @click="removeFromEnvelope.mutate()"
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
              class="shrink-0"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"></path>
              <path d="M10 11v6M14 11v6"></path>
              <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"></path>
            </svg>

            Удалить из инвентаря
          </button>
        </template>

        <button
          type="button"
          class="inline-flex items-center gap-6 rounded-10 border border-accent-green-border px-16 py-10 text-13 font-medium text-accent-green transition-colors hover:border-accent-green hover:text-accent-green"
          :class="{ 'bg-accent-green-light!': isReactedAsLike }"
          @click="onToggleLike"
        >
          <svg
            width="14"
            height="14"
            :fill="isReactedAsLike ? 'currentColor' : 'none'"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="shrink-0"
          >
            <path
              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
            ></path>
            <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>

          Нравится
        </button>

        <button
          type="button"
          class="inline-flex items-center gap-6 rounded-10 border border-accent-green-border px-16 py-10 text-13 font-medium text-accent-green transition-colors hover:border-accent-green hover:text-accent-green"
          :class="{ 'bg-accent-green-light!': isReactedAsDislike }"
          @click="onToggleDislike"
        >
          <svg
            width="14"
            height="14"
            :fill="isReactedAsDislike ? 'currentColor' : 'none'"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="shrink-0"
          >
            <path
              d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
            ></path>
            <path
              d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
            ></path>
          </svg>

          Не нравится
        </button>
      </div>
    </div>
  </div>
</template>
