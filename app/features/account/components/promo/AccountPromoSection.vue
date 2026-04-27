<script setup lang="ts">
import { useMyWhispers } from '~/features/account/composables/useMyWhispers'

import AccountWhisperCard from '~/features/account/components/promo/AccountWhisperCard.vue'

const router = useRouter()

const { myWhispers, isLoading } = useMyWhispers()
</script>

<template>
  <div class="acc-panel">
    <div class="panel-header">
      <span class="panel-title"> Скидки и промокоды, которые вы добавили </span>

      <button class="btn-primary-action" @click="router.push('/whispers/new')">
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
          <path d="M12 5v14M5 12h14" />
        </svg>

        Поделиться промокодом
      </button>
    </div>

    <div v-if="myWhispers.length === 0 && !isLoading" class="acc-empty">
      <div class="acc-empty-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
          />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      </div>

      <div class="acc-empty-title">Нет записей</div>

      <div class="acc-empty-desc">
        Делитесь скидками и промокодами в разделе Промо → Промо
      </div>
    </div>

    <template v-else>
      <AccountWhisperCard
        v-for="whisper in myWhispers"
        :key="whisper.id"
        :whisper="whisper"
      />
    </template>
  </div>
</template>
