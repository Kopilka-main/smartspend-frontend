<script setup lang="ts">
import { usePromo } from '~/features/promo/composables/usePromo'
import type { PromoItem } from '~/types'

import PromoFilters from '~/features/promo/components/filters/PromoFilters.vue'
import PromoSetupHint from '~/features/promo/components/PromoSetupHint.vue'
import PromoBroadcastCard from '~/features/promo/components/cards/PromoBroadcastCard.vue'
import PromoWhisperCard from '~/features/promo/components/cards/PromoWhisperCard.vue'
import PromoCard from '~/features/promo/components/cards/PromoCard.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Промо'
})

const filters = ref({
  scope: 'all',
  condition: 'all',
  sort: 'newest',
  company: '',
  categories: []
})

const { items, isLoading } = usePromo(filters)

const hasPromoSetup = computed(() => {
  return false
})

const getCardComponent = (item: PromoItem) => {
  if (item.type === 'broadcast') {
    return PromoBroadcastCard
  }

  if (item.type === 'whisper') {
    return PromoWhisperCard
  }

  return PromoCard
}
</script>

<template>
  <main class="feed-main">
    <div class="page-header">
      <div class="page-header-inner">
        <div
          class="page-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Промо
        </div>
      </div>
    </div>

    <div class="feed-scroll">
      <PromoFilters
        :items-length="items.length"
        v-model:scope="filters.scope"
        v-model:condition="filters.condition"
        v-model:categories="filters.categories"
        v-model:sort="filters.sort"
        v-model:company="filters.company"
      />

      <PromoSetupHint v-if="hasPromoSetup" />

      <div v-else class="feed-list">
        <div v-if="items.length === 0 && !isLoading" class="empty-state">
          <div class="empty-title">Ничего не найдено</div>

          <div class="empty-desc">
            Попробуйте изменить фильтры или переключиться на «Все компании»
          </div>
        </div>

        <template v-else>
          <component
            v-for="item in items"
            :key="item.id"
            :is="getCardComponent(item)"
            :item="item"
          />
        </template>
      </div>
    </div>
  </main>
</template>
