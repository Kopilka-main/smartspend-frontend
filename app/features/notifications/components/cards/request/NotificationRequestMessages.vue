<script setup lang="ts">
import { formatDistanceToNowStrict } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useCurrentUser } from '~/composables/useCurrentUser'
import { useCreateNotificationMessage } from '~/features/notifications/queries/useCreateNotificationMessage'
import { useNotificationMessages } from '~/features/notifications/composables/useNotificationMessages'

type NotificationRequestMessagesProps = {
  requestId: number
}

const props = defineProps<NotificationRequestMessagesProps>()

const text = ref('')

const { currentUser } = useCurrentUser()
const { messages } = useNotificationMessages(props.requestId)
const { mutate, isLoading } = useCreateNotificationMessage(
  props.requestId,
  () => {
    text.value = ''
  }
)

const onSubmit = () => {
  if (text.value.length) {
    mutate({
      text: text.value
    })
  }
}
</script>

<template>
  <div class="req-discuss">
    <div v-if="messages.length > 0" class="req-messages">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="`req-msg${message.userId === currentUser?.id ? ' req-msg--mine' : ''}`"
      >
        <div class="req-msg-bubble">{{ message.text }}</div>

        <div class="req-msg-time">
          {{
            formatDistanceToNowStrict(message.createdAt, {
              locale: ru,
              addSuffix: true
            })
          }}
        </div>
      </div>
    </div>
    <div class="req-msg-input-row">
      <input
        v-model="text"
        class="req-msg-input"
        placeholder="Написать сообщение..."
      />

      <button class="req-msg-send-btn" :disabled="isLoading" @click="onSubmit">
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
