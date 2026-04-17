<script setup lang="ts">
import type { SetItem } from '~/types'

type SetItemRowProps = {
  item: SetItem
}

const props = defineProps<SetItemRowProps>()

const emit = defineEmits<{
  (e: 'remove', itemName: string): void
}>()

const calcPerMonth = (item: SetItem) => {
  if (item.itemType === 'consumable') {
    if (!item.basePrice || !item.qty || !item.dailyUse) return 0

    return (item.basePrice / item.qty) * item.dailyUse * 30
  } else {
    if (!item.basePrice || !item.wearLifeWeeks) return 0

    return (item.basePrice / item.wearLifeWeeks) * 4.33
  }
}

const pm = computed(() => {
  return calcPerMonth(props.item)
})

const meta = computed(() => {
  return props.item.itemType === 'consumable'
    ? `${props.item.qty} ${props.item.unit} · расход ${props.item.dailyUse} ${props.item.unit}/день`
    : `срок ${props.item.wearLifeWeeks} нед.`
})
</script>

<template>
  <div class="cs-set-item-row">
    <div class="cs-set-item-info">
      <span class="cs-set-item-name">{{ item.name }}</span>
      <span class="cs-set-item-meta">
        {{ parseInt(item.basePrice.toString()).toLocaleString('ru') }} ₽ ·
        {{ meta }}
      </span>
    </div>

    <span v-if="pm > 0" class="cs-set-item-pm">
      {{ Math.round(pm).toLocaleString('ru') }} ₽/мес
    </span>

    <button class="inv-item-delete" @click="emit('remove', item.name)">
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
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>
