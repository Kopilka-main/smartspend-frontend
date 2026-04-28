<script setup lang="ts">
import type { InventoryItem } from '~/types'

type InventoryGroupItemProps = {
  item: InventoryItem
  costPeriod: string
  override: any
}

const props = defineProps<InventoryGroupItemProps>()

const isSelected = ref(false)
const status = ref('')
const pct = ref(0)

// const daysLeft = computed(() => {
//   return props.item.dailyUse > 0 ? Math.round(ov / props.item.dailyUse) : 0
// })

const isConsumable = computed(() => {
  return props.item.type === 'consumable'
})

const noPurchaseDate = computed(() => {
  return (
    props.item.type !== 'consumable' &&
    !(props.override !== null ? props.override : props.item.purchaseDate)
  )
})
const remainPct = computed(() => {
  return props.item.paused
    ? 50
    : noPurchaseDate.value
      ? 0
      : status.value === 'overexploit'
        ? 0
        : Math.max(0, Math.min(100, 100 - pct.value))
})

const barStatus = computed(() => {
  return props.item.paused ? 'paused' : status.value
})

const periodLabel = computed(() => {
  return props.costPeriod === 'month' ? '/мес' : '/нед'
})

const cost = computed(() => {
  if (isConsumable.value) {
    const dailyCost =
      Number(props.item.qty) > 0
        ? (props.item.dailyUse * props.item.price) / Number(props.item.qty)
        : 0

    return Math.round(dailyCost * (props.costPeriod === 'month' ? 30 : 7))
  }

  return props.item.price || 0
})
</script>

<template>
  <div
    :class="`irow${isSelected ? ' irow--selected' : ''}${item.paused ? ' irow--paused' : ''}`"
  >
    <span class="irow-name">{{ item.name }}</span>

    <div class="irow-bar-wrap">
      <div class="irow-bar">
        <div
          :class="`irow-bar-fill irow-bar-fill--${barStatus}`"
          :style="{ width: `${remainPct}%` }"
        />
      </div>

      <span class="irow-pct">{{ item.paused ? '—' : `${remainPct}%` }}</span>
    </div>

    <span :class="`irow-time irow-time--${barStatus}`"> </span>

    <span class="irow-price">
      ₽{{ cost.toLocaleString('ru') }}

      <template v-if="isConsumable">
        {{ periodLabel }}
      </template>
    </span>
  </div>
</template>
