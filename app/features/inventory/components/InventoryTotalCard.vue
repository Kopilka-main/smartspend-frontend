<script setup lang="ts">
import type { InventoryItem } from '~/types'

type InventoryTotalCardProps = {
  items: InventoryItem[]
  categoryId?: string | null
}

const props = defineProps<InventoryTotalCardProps>()

const daysSince = (dateStr: string) => {
  return Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000)
}

const valueItems = computed(() => {
  return props.categoryId
    ? props.items.filter((i) => i.groupId === props.categoryId)
    : props.items
})

const consumableVal = computed(() => {
  return valueItems.value
    .filter((i) => i.type === 'consumable')
    .reduce((s, item) => {
      const rem = Math.max(
        0,
        Number(item.qty) - daysSince(item.lastBought) * item.dailyUse
      )

      return (
        s + (Number(item.qty) > 0 ? (rem / Number(item.qty)) * item.price : 0)
      )
    }, 0)
})

const wearVal = computed(() => {
  return valueItems.value
    .filter((i) => i.type === 'wear')
    .reduce((s, item) => {
      const pd = item.purchaseDate
      if (!pd) return s

      const wu = Math.floor(daysSince(pd) / 7)

      return (
        s + Math.max(0, Math.round(item.price * (1 - wu / item.wearLifeWeeks)))
      )
    }, 0)
})

const totalValue = computed(() => {
  return Math.round(consumableVal.value + wearVal.value)
})
</script>

<template>
  <div class="inv-value-card">
    <div class="inv-value-main">
      <div class="inv-value-lbl">стоимость инвентаря</div>
      <div class="inv-value-val">₽{{ totalValue.toLocaleString('ru') }}</div>
    </div>

    <div class="inv-value-breakdown">
      <div class="inv-value-item">
        <span class="inv-value-item-val">
          ₽{{ Math.round(consumableVal).toLocaleString('ru') }}
        </span>
        <span class="inv-value-item-lbl">расходники</span>
      </div>

      <div class="inv-value-item">
        <span class="inv-value-item-val">
          ₽{{ wearVal.toLocaleString('ru') }}
        </span>
        <span class="inv-value-item-lbl">вещи</span>
      </div>
    </div>
  </div>
</template>
