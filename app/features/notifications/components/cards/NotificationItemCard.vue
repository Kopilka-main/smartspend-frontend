<script setup lang="ts">
import type { NotificationItem } from '~/types'
import { formatDistanceToNowStrict } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useDeleteNotification } from '~/features/notifications/queries/useDeleteNotification'

type NotificationItemCardProps = {
  notification: NotificationItem
}

const props = defineProps<NotificationItemCardProps>()

const { mutate } = useDeleteNotification(props.notification.id)

const onRemove = () => {
  mutate()
}
</script>

<template>
  <div :class="`notif-item${!notification.isRead ? ' unread' : ''}`">
    <div class="notif-item-icons">
      <div
        v-if="notification.author"
        class="notif-avatar"
        :style="{ background: notification.author.color }"
      >
        {{ notification.author.initials }}
      </div>
      <div v-else class="notif-avatar notif-avatar-sys">
        <svg viewBox="0 0 16 16" fill="none" width="18" height="18">
          <rect
            x="2"
            y="2"
            width="5"
            height="5"
            rx="1.5"
            fill="currentColor"
            opacity="0.8"
          />
          <rect
            x="9"
            y="2"
            width="5"
            height="5"
            rx="1.5"
            fill="currentColor"
            opacity="0.4"
          />
          <rect
            x="2"
            y="9"
            width="5"
            height="5"
            rx="1.5"
            fill="currentColor"
            opacity="0.4"
          />
          <rect
            x="9"
            y="9"
            width="5"
            height="5"
            rx="1.5"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>

    <div class="notif-body">
      <div class="notif-title">{{ notification.title }}</div>
      <div class="notif-desc">{{ notification.description }}</div>
      <div class="notif-time">
        {{
          formatDistanceToNowStrict(notification.createdAt, {
            addSuffix: true,
            locale: ru
          })
        }}
      </div>
    </div>

    <button class="notif-delete-btn" @click="onRemove">
      <svg
        width="12"
        height="12"
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
</template>
