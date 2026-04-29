<script setup lang="ts">
import { useMyWhispers } from '~/features/account/composables/useMyWhispers'

import AccountWhisperCard from '~/features/account/components/whispers/AccountWhisperCard.vue'
import AccountWhispersEmpty from '~/features/account/components/whispers/AccountWhispersEmpty.vue'

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

    <AccountWhispersEmpty v-if="myWhispers.length === 0 && !isLoading" />

    <template v-else>
      <AccountWhisperCard
        v-for="whisper in myWhispers"
        :key="whisper.id"
        :whisper="whisper"
      />
    </template>
  </div>
</template>
