<script setup lang="ts">
import type { EnvelopeItem } from '~/types'

type ProfileEnvelopeCardProps = {
  item: EnvelopeItem
  isEditMode: boolean
}

const props = defineProps<ProfileEnvelopeCardProps>()

const isConfirmDelete = ref(false)

const isClickable = computed(() => {
  return (
    !props.isEditMode && !!props.item.id && props.item.source !== 'personal'
  )
})
</script>

<template>
  <div
    :class="`set-card${item.paused ? ' paused' : ''}${isEditMode && item.source !== 'personal' ? ' editing' : ''}`"
    :style="isClickable ? { cursor: 'pointer' } : {}"
  >
    <div class="set-card-name">{{ item.name }}</div>

    <div v-if="item.description && !item.paused" class="set-card-desc">
      {{ item.description }}
    </div>

    <div v-if="item.paused" class="set-card-paused-label">На паузе</div>

    <div class="set-card-bottom">
      <span :class="`set-card-amount${item.paused ? ' muted' : ''}`">
        {{ item.amount ? '₽' + item.amount.toLocaleString('ru') : '—' }}
      </span>
      <span class="set-card-period">/ мес</span>
    </div>

    <button
      v-if="isEditMode && item.source !== 'personal'"
      class="set-pause-btn playing always-show"
    >
      <svg
        v-if="item.paused"
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
      <svg
        v-else
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
    </button>

    <button
      v-if="isEditMode && item.source !== 'personal' && !isConfirmDelete"
      class="set-delete"
      @click="isConfirmDelete = true"
    >
      <svg
        width="9"
        height="9"
        viewBox="0 0 10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        <line x1="2" y1="2" x2="8" y2="8" />
        <line x1="8" y1="2" x2="2" y2="8" />
      </svg>
    </button>

    <div v-if="isConfirmDelete" class="set-delete-confirm">
      <span class="set-delete-confirm-text">Удалить?</span>
      <button class="set-delete-confirm-yes">Да</button>
      <button class="set-delete-confirm-no">Нет</button>
    </div>
  </div>
</template>
