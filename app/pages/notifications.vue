<script setup lang="ts">
import { useNotifications } from '~/features/notifications/composables/useNotifications'

import NotificationsRequestsEmpty from '~/features/notifications/components/NotificationsRequestsEmpty.vue'
import NotificationRequestCard from '~/features/notifications/components/cards/request/NotificationRequestCard.vue'
import NotificationItemCard from '~/features/notifications/components/cards/NotificationItemCard.vue'
import NotificationsItemsEmpty from '~/features/notifications/components/NotificationsItemsEmpty.vue'
import NotificationsGroup from '~/features/notifications/components/NotificationsGroup.vue'

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

const selectedFilter = ref('all')

const FILTERS = [
  { id: 'all', label: 'Все' },
  { id: 'subs', label: 'Подписки' },
  { id: 'replies', label: 'Ответы' },
  { id: 'reminders', label: 'Напоминания' },
  { id: 'requests', label: 'Запросы' }
]

const requests = computed(() => {
  return notifications.value.filter(
    (notification) => notification.type === 'request'
  )
})

const pendingRequests = computed(() => {
  return requests.value.filter(
    (notification) => notification.actionStatus === 'pending'
  )
})

const closedRequests = computed<any[]>(() => {
  return []
})

const deletedRequests = computed<any[]>(() => {
  return []
})

const unreadNotifications = computed(() => {
  if (selectedFilter.value === 'all') {
    return notifications.value.filter(
      (notification) => !notification.isRead && notification.type !== 'request'
    )
  }

  if (selectedFilter.value === 'subs') {
    return notifications.value.filter(
      (notification) =>
        !notification.isRead && notification.type === 'subscription'
    )
  }

  if (selectedFilter.value === 'replies') {
    return notifications.value.filter(
      (notification) => !notification.isRead && notification.type === 'reply'
    )
  }

  if (selectedFilter.value === 'reminders') {
    return notifications.value.filter(
      (notification) => !notification.isRead && notification.type === 'reminder'
    )
  }

  return []
})

const readNotifications = computed(() => {
  if (selectedFilter.value === 'all') {
    return notifications.value.filter(
      (notification) => notification.isRead && notification.type !== 'request'
    )
  }

  if (selectedFilter.value === 'subs') {
    return notifications.value.filter(
      (notification) =>
        notification.isRead && notification.type === 'subscription'
    )
  }

  if (selectedFilter.value === 'replies') {
    return notifications.value.filter(
      (notification) => notification.isRead && notification.type === 'reply'
    )
  }

  if (selectedFilter.value === 'reminders') {
    return notifications.value.filter(
      (notification) => notification.isRead && notification.type === 'reminder'
    )
  }

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
    </div>

    <div id="sp-notif-filters" class="notif-filters">
      <button
        v-for="filter in FILTERS"
        :key="filter.id"
        :class="`notif-filter-btn${selectedFilter === filter.id ? ' active' : ''}`"
        @click="selectedFilter = filter.id"
      >
        {{ filter.label }}

        <span
          v-if="filter.id === 'requests' && pendingRequests.length > 0"
          class="notif-filter-badge"
        >
          {{ pendingRequests.length }}
        </span>
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
              marginTop: requests.some((r) => r.actionStatus === 'pending')
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
        <NotificationsGroup v-if="unreadNotifications.length > 0" label="Новые">
          <NotificationItemCard
            v-for="notification in unreadNotifications"
            :key="notification.id"
            :notification="notification"
          />
        </NotificationsGroup>

        <NotificationsGroup
          v-if="readNotifications.length > 0"
          :label="unreadNotifications.length > 0 ? 'Ранее' : 'Прочитанные'"
          :label-style="{
            marginTop: unreadNotifications.length > 0 ? '20px' : 0
          }"
        >
          <NotificationItemCard
            v-for="notification in readNotifications"
            :key="notification.id"
            :notification="notification"
          />
        </NotificationsGroup>

        <NotificationsItemsEmpty v-if="notifications.length === 0" />
      </template>
    </div>
  </main>
</template>
