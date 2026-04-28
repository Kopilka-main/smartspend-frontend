<script setup lang="ts">
import NotificationRequestMessages from '~/features/notifications/components/cards/request/NotificationRequestMessages.vue'

type NotificationRequestCardProps = {
  request: any
}

defineProps<NotificationRequestCardProps>()

const isPending = ref(false)
const isIncoming = ref(false)
const showUnreadDot = ref(false)
const canDelete = ref(false)
const showDiscuss = ref(false)
</script>

<template>
  <div
    :class="`req-card${isPending ? ' req-card--pending' : ' req-card--closed'}`"
  >
    <div
      v-if="!isPending"
      :class="`req-status-badge req-status-${request.status}`"
    >
      <template v-if="request.status === 'approved'">
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
      <template v-if="request.status === 'rejected'">
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
      <template v-if="request.status === 'withdrawn'">
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
          background: 'user color',
          cursor: 'pointer',
          position: 'relative'
        }"
      >
        user initials
      </div>

      <div class="req-card-meta">
        <div class="req-card-title">
          <template v-if="isIncoming">
            <span class="req-user-name-link" :style="{ position: 'relative' }">
              {user.name}
            </span>
            предлагает статью для вашего набора
          </template>

          <template v-else>
            <strong>{user.name}</strong>. Отправлен запрос на добавление статьи
            к набору автора
          </template>
        </div>

        <div class="req-card-set">{req.set.title}</div>
      </div>

      <div class="req-card-time">{req.time}</div>

      <span v-if="showUnreadDot" class="req-unread-dot" />

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
      <button class="req-article-link">{req.article.title}</button>
    </div>

    <div class="req-actions-row">
      <button
        v-if="isPending"
        :class="`req-discuss-btn${showDiscuss ? ' active' : ''}`"
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

        <span v-if="request.messages.length > 0" class="req-msg-count">
          {req.messages.length}
        </span>
      </button>

      <div v-if="isPending" class="req-action-btns">
        <template v-if="isIncoming">
          <button class="req-reject-btn">Отклонить</button>

          <button class="req-approve-btn">Добавить</button>
        </template>

        <button v-else class="req-withdraw-btn">Отозвать запрос</button>
      </div>
    </div>

    <NotificationRequestMessages
      v-if="showDiscuss"
      :messages="request.messages"
    />
  </div>
</template>
