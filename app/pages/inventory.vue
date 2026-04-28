<script setup lang="ts">
import { useInventoryItems } from '~/features/inventory/composables/useInventoryItems'
import type { InventoryItem, SetCategory } from '~/types'

import InventoryFilters from '~/features/inventory/components/InventoryFilters.vue'
import InventoryTotalCard from '~/features/inventory/components/InventoryTotalCard.vue'
import InventoryItemsEmpty from '~/features/inventory/components/InventoryItemsEmpty.vue'
import InventoryEmptyStatusGroup from '~/features/inventory/components/InventoryEmptyStatusGroup.vue'
import InventoryGroup from '~/features/inventory/components/group/InventoryGroup.vue'
import InventoryAddItemForm from '~/features/inventory/components/InventoryAddItemForm.vue'
import InventoryItemDetails from '~/features/inventory/components/InventoryItemDetails.vue'
import InventoryShoppingList from '~/features/inventory/components/InventoryShoppingList.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Инвентарь'
})

const { items } = useInventoryItems()

const costPeriod = ref('week')

const statusGroups = computed(() => {
  return [
    {
      key: 'urgent',
      label: 'Ожидает покупки',
      items: items.value
    },
    {
      key: 'soon',
      label: 'Скоро потребуется',
      items: items.value
    },
    {
      key: 'ok',
      label: 'Норма',
      items: items.value
    },
    {
      key: 'paused',
      label: 'Ожидает активации',
      items: items.value
    }
  ]
})

const selectedCategory = ref<SetCategory | null>(null)
const showAddPanel = ref(false)
const selectedItem = ref<InventoryItem | null>(null)
</script>

<template>
  <main class="inventory-main">
    <div class="inv-page-header">
      <div>
        <div
          class="page-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Инвентарь
        </div>

        <div class="page-subtitle">{{ items.length }} позиций</div>
      </div>
    </div>

    <InventoryFilters v-model:category="selectedCategory" />

    <div id="sp-inv-groups" class="inv-split">
      <div class="inv-list-col">
        <InventoryEmptyStatusGroup v-if="statusGroups.length === 0" />

        <template v-else>
          <InventoryGroup
            v-for="group in statusGroups"
            :key="group.key"
            :label="group.label"
            :value="group.key"
            :items="group.items"
            :cost-period="costPeriod"
          />
        </template>

        <InventoryItemsEmpty v-if="items.length === 0" />

        <button
          :class="`whisper-add-cta${showAddPanel ? ' whisper-add-cta--active' : ''}`"
          @click="showAddPanel = !showAddPanel"
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>

          Добавить позицию
        </button>

        <InventoryTotalCard
          v-if="items.length > 0"
          :items="items"
          :category-id="selectedCategory?.id"
        />
      </div>

      <div class="inv-panel-col">
        <InventoryAddItemForm
          v-if="showAddPanel"
          @close="showAddPanel = false"
        />
        <template v-else>
          <InventoryItemDetails v-if="selectedItem" :item="selectedItem" />
          <InventoryShoppingList v-else />
        </template>
      </div>
    </div>
  </main>
</template>
