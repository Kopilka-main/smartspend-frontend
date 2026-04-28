<script setup lang="ts">
type NotificationItemCardProps = {
  notification: any
}

defineProps<NotificationItemCardProps>()
</script>

<template>
  <div :class="`notif-item${notification.unread ? ' unread' : ''}`">
    <div class="notif-item-icons">
      <div
        v-if="notification.author"
        class="notif-avatar"
        :style="{ background: notification.author.color }"
      >
        {{ notification.author.initials }}
      </div>
    </div>

    <div class="notif-body">
      <div class="notif-title">{{ notification.title }}</div>
      <div class="notif-desc">{{ notification.desc }}</div>
      <div class="notif-time">{{ notification.time }}</div>
    </div>

    <div v-if="notification.unread" class="notif-dot" />

    <button class="notif-delete-btn">
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
