<script setup lang="ts">
import { useFinance } from '~/features/profile/composables/useFinance'
import { useFinanceModal } from '~/features/profile/composables/useFinanceModal'

import ProfileFillFinanceNotification from '~/features/profile/components/notifications/ProfileFillFinanceNotification.vue'
import ProfileFillEnvelopesNotification from '~/features/profile/components/notifications/ProfileFillEnvelopesNotification.vue'
import ProfileFinanceCard from '~/features/profile/components/cards/ProfileFinanceCard.vue'

const { hasUpdatedAt, updatedAt, shouldFillFinance, shouldFillEnvelopes } =
  useFinance()

const financeModal = useFinanceModal()
</script>

<template>
  <div id="sp-finance">
    <div class="section-heading">
      <div>
        <span class="section-title">Бюджет месяца</span>

        <div class="section-subtitle">
          Сколько приходит и куда уходит каждый месяц
        </div>
      </div>

      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '2px'
        }"
      >
        <button
          id="sp-btn-finance"
          class="section-link"
          @click="financeModal.open"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>

          Обновить данные
        </button>

        <span
          v-if="hasUpdatedAt"
          :style="{
            fontSize: '10px',
            color: 'var(--text-3)',
            letterSpacing: '0.01em'
          }"
        >
          {{ updatedAt }}
        </span>
      </div>
    </div>

    <ProfileFillEnvelopesNotification v-if="shouldFillEnvelopes" />

    <ProfileFillFinanceNotification v-if="shouldFillFinance" />

    <ProfileFinanceCard />
  </div>
</template>
