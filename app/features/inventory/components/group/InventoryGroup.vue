<script setup lang="ts">
import type { InventoryItem } from '~/types'

import InventoryGroupItem from '~/features/inventory/components/group/InventoryGroupItem.vue'

type InventoryGroupProps = {
  label: string
  value: string
  items: InventoryItem[]
  costPeriod: string
}

defineProps<InventoryGroupProps>()
</script>

<template>
  <div class="inv-status-group">
    <div :class="`inv-status-group-header inv-status-group-header--${value}`">
      <span :class="`inv-status-group-dot inv-status-group-dot--${value}`" />

      <span class="inv-status-group-label">{{ label }}</span>

      <span class="inv-status-group-count">{{ items.length }}</span>
    </div>

    <div class="inv-status-group-items">
      <div v-if="items.length === 0" class="inv-group-empty">
        Нет позиций с таким статусом
      </div>

      <template v-else>
        <InventoryGroupItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          :override="null"
          :cost-period="costPeriod"
        />
      </template>
    </div>
  </div>
</template>
