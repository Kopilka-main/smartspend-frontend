<script setup lang="ts">
import ProfileEnvelopeCard from '~/features/profile/components/cards/ProfileEnvelopeCard.vue'

type ProfileCategoryCardProps = {
  category: any
  isEditMode: boolean
}

const props = defineProps<ProfileCategoryCardProps>()

const router = useRouter()

const hasEnvelopes = computed(() => {
  return props.category.items.length > 0
})

const total = computed(() => {
  return props.category.items
    .filter((x: any) => !x.paused)
    .reduce((s: any, x: any) => s + x.amount, 0)
})
</script>

<template>
  <div class="envelope-card">
    <div class="envelope-header">
      <div class="env-info">
        <div class="env-name">{{ category.name }}</div>
      </div>

      <div class="env-right">
        <div class="env-total">
          {{ total > 0 ? '₽' + total.toLocaleString('ru') : '—' }}
        </div>

        <div v-if="total > 0" class="env-total-sub">/ месяц</div>
      </div>
    </div>

    <div v-if="hasEnvelopes" class="sets-grid">
      <ProfileEnvelopeCard
        v-for="item in category.items"
        :key="item.id"
        :item="item"
        :is-edit-mode="isEditMode"
      />

      <div
        v-if="isEditMode"
        class="set-card-add"
        @click="router.push('/catalog')"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>

        <span class="set-card-add-label">Добавить набор</span>
      </div>
    </div>

    <div v-if="!hasEnvelopes && isEditMode" class="sets-grid-empty">
      <div v-if="category.id === 'other'" class="env-envelope-hint">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <path
            d="M12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
          />
        </svg>

        <span>
          Например, <strong>«Подарки близким»</strong> — незапланированные
          праздничные траты часто ломают бюджет
        </span>
      </div>

      <button class="env-add-only" @click="router.push('/catalog')">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>

        Добавить первый набор в этот конверт
      </button>
    </div>
  </div>
</template>
