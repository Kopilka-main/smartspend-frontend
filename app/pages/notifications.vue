<script setup lang="ts">
import NotificationsRequestsEmpty from '~/features/notifications/components/NotificationsRequestsEmpty.vue'
import NotificationRequestCard from '~/features/notifications/components/cards/request/NotificationRequestCard.vue'
import NotificationItemCard from '~/features/notifications/components/cards/NotificationItemCard.vue'
import NotificationsItemsEmpty from '~/features/notifications/components/NotificationsItemsEmpty.vue'
import NotificationsGroup from '~/features/notifications/components/NotificationsGroup.vue'
import { useNotifications } from '~/features/notifications/composables/useNotifications'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Уведомления'
})

const { notifications } = useNotifications()

const totalUnread = ref(0)
const unreadDialogCount = ref(0)
const selectedFilter = ref('all')
const deletedIds = ref<string[]>([])
const requests = ref<any[]>([])
const filtered = ref<any[]>([])

const FILTERS = [
  { id: 'all', label: 'Все' },
  { id: 'subs', label: 'Подписки' },
  { id: 'replies', label: 'Ответы' },
  { id: 'reminders', label: 'Напоминания' },
  { id: 'requests', label: 'Запросы' }
]

const pendingRequests = computed<any[]>(() => {
  return []
})

const closedRequests = computed<any[]>(() => {
  return []
})

const deletedRequests = computed<any[]>(() => {
  return []
})

const unreadFiltered = computed<any[]>(() => {
  return []
})

const readFiltered = computed<any[]>(() => {
  return []
})
</script>

<template>
  <main class="notif-main">
    <div id="sp-notif-header" class="notif-header">
      <div>
        <div
          class="page-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Уведомления
        </div>

        <div class="page-subtitle">Новости, ответы и напоминания</div>
      </div>

      <button
        v-if="totalUnread > 0"
        id="sp-notif-mark"
        class="notif-mark-all-btn"
      >
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
          <path d="M20 6L9 17l-5-5" />
        </svg>

        Прочитать все
      </button>
    </div>

    <div id="sp-notif-filters" class="notif-filters">
      <button
        v-for="filter in FILTERS"
        :key="filter.id"
        :class="`notif-filter-btn${selectedFilter === filter.id ? ' active' : ''}`"
      >
        {{ filter.label }}

        <span
          v-if="filter.id === 'requests' && unreadDialogCount > 0"
          class="notif-filter-badge"
        >
          {{ unreadDialogCount }}
        </span>
      </button>

      <button v-if="deletedIds.length > 0" class="notif-deleted-pill">
        <svg
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 .49-3.5" />
        </svg>

        Удалено: {{ deletedIds.length }}
      </button>
    </div>

    <div id="sp-notif-list" class="notif-scroll">
      <template v-if="selectedFilter === 'requests'">
        <NotificationsRequestsEmpty v-if="requests.length === 0" />

        <template v-else>
          <NotificationsGroup
            v-if="pendingRequests.length > 0"
            label="Ожидают решения"
          >
            <NotificationRequestCard
              v-for="request in pendingRequests"
              :key="request.id"
              :request="request"
            />
          </NotificationsGroup>

          <NotificationsGroup
            v-if="closedRequests.length > 0"
            label="Завершённые"
            :label-style="{
              marginTop: requests.some((r) => r.status === 'pending')
                ? '20px'
                : 0
            }"
          >
            <NotificationRequestCard
              v-for="request in closedRequests"
              :key="request.id"
              :request="request"
            />
          </NotificationsGroup>

          <NotificationsGroup
            v-if="deletedRequests.length > 0"
            label="Удалённые"
            :label-style="{ marginTop: '20px' }"
          >
            <div class="req-trash-banner">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                <path d="M10 11v6m4-6v6" />
                <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
              </svg>

              <span>Корзина автоматически очистится через 2 недели</span>

              <button class="req-trash-clear-btn">Очистить все</button>
            </div>

            <NotificationRequestCard
              v-for="request in deletedRequests"
              :key="request.id"
              :request="request"
            />
          </NotificationsGroup>
        </template>
      </template>

      <template v-else>
        <NotificationsGroup v-if="unreadFiltered.length > 0" label="Новые">
          <NotificationItemCard
            v-for="notification in unreadFiltered"
            :key="notification.id"
            :notification="notification"
          />
        </NotificationsGroup>

        <NotificationsGroup
          v-if="readFiltered.length > 0"
          :label="unreadFiltered.length > 0 ? 'Ранее' : 'Прочитанные'"
          :label-style="{ marginTop: unreadFiltered.length > 0 ? '20px' : 0 }"
        >
          <NotificationItemCard
            v-for="notification in readFiltered"
            :key="notification.id"
            :notification="notification"
          />
        </NotificationsGroup>

        <NotificationsItemsEmpty v-if="filtered.length === 0" />
      </template>
    </div>
  </main>
</template>
