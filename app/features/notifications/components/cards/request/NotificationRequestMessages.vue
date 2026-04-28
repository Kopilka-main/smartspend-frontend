<script setup lang="ts">
type NotificationRequestMessagesProps = {
  messages: any[]
}

defineProps<NotificationRequestMessagesProps>()
</script>

<template>
  <div class="req-discuss">
    <div v-if="messages.length > 0" class="req-messages">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="`req-msg${message.from === 'me' ? ' req-msg--mine' : ''}`"
      >
        <div class="req-msg-bubble">{{ message.text }}</div>
        <div class="req-msg-time">{{ message.time }}</div>
      </div>
    </div>
    <div class="req-msg-input-row">
      <input class="req-msg-input" placeholder="Написать сообщение..." />

      <button class="req-msg-send-btn">
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  </div>
</template>
