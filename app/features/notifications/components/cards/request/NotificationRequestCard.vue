<script setup lang="ts">
import { useNotificationRequestAction } from '~/features/notifications/queries/useNotificationRequestAction'
import type { NotificationItem } from '~/types'

import NotificationRequestMessages from '~/features/notifications/components/cards/request/NotificationRequestMessages.vue'

type NotificationRequestCardProps = {
  request: NotificationItem
}

const props = defineProps<NotificationRequestCardProps>()

const router = useRouter()
const { mutate } = useNotificationRequestAction(props.request.id)

const isPending = computed(() => {
  return props.request.actionStatus === 'pending'
})

const isApproved = computed(() => {
  return props.request.actionStatus === 'approved'
})

const isRejected = computed(() => {
  return props.request.actionStatus === 'rejected'
})

const isWithdrawn = computed(() => {
  return props.request.actionStatus === 'withdrawn'
})

const isIncoming = computed(() => {
  return props.request.direction === 'incoming'
})

const canDelete = ref(false)
const showDiscuss = ref(false)

const onShowArticle = () => {
  router.push(`/articles/${props.request.articleId}`)
}

const onDiscuss = () => {
  showDiscuss.value = true
}

const onReject = () => {
  mutate({
    status: 'reject'
  })
}

const onApprove = () => {
  mutate({
    status: 'approve'
  })
}

const onWithdraw = () => {
  mutate({
    status: 'withdraw'
  })
}
</script>

<template>
  <div
    :class="`req-card${isPending ? ' req-card--pending' : ' req-card--closed'}`"
  >
    <div
      v-if="!isPending"
      :class="`req-status-badge req-status-${request.actionStatus}`"
    >
      <template v-if="isApproved">
        <svg
          width="13"
          height="13"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>

        Одобрено
      </template>

      <template v-if="isRejected">
        <svg
          width="13"
          height="13"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>

        Отклонено
      </template>

      <template v-if="isWithdrawn">
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
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 100-6" />
        </svg>

        Запрос отозван
      </template>
    </div>

    <div class="req-card-header">
      <div
        class="req-avatar"
        :style="{
          background: request.author.color,
          cursor: 'pointer',
          position: 'relative'
        }"
      >
        {{ request.author.initials }}
      </div>

      <div class="req-card-meta">
        <div class="req-card-title">
          <template v-if="isIncoming">
            <span class="req-user-name-link" :style="{ position: 'relative' }">
              {{ request.author.displayName }}
            </span>
            предлагает статью для вашего набора
          </template>

          <template v-else>
            <strong> {{ request.author.displayName }} </strong>. Отправлен
            запрос на добавление статьи к набору автора
          </template>
        </div>

        <div class="req-card-set">{{ request.setTitle }}</div>
      </div>

      <div class="req-card-time">
        {{ formatDate(request.createdAt, 'PPP') }}
      </div>

      <button v-if="canDelete" class="req-card-delete-btn">
        <svg
          width="11"
          height="11"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="req-article-preview">
      <button class="req-article-link" @click="onShowArticle">
        {{ request.articleTitle }}
      </button>
    </div>

    <div class="req-actions-row">
      <button
        v-if="isPending"
        :class="`req-discuss-btn${showDiscuss ? ' active' : ''}`"
        @click="onDiscuss"
      >
        <svg
          width="13"
          height="13"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>

        Обсудить

        <span v-if="request.messagesCount" class="req-msg-count">
          {{ request.messagesCount }}
        </span>
      </button>

      <div v-if="isPending" class="req-action-btns">
        <template v-if="isIncoming">
          <button class="req-reject-btn" @click="onReject">Отклонить</button>

          <button class="req-approve-btn" @click="onApprove">Добавить</button>
        </template>

        <button v-else class="req-withdraw-btn" @click="onWithdraw">
          Отозвать запрос
        </button>
      </div>
    </div>

    <NotificationRequestMessages v-if="showDiscuss" :messages="[]" />
  </div>
</template>
