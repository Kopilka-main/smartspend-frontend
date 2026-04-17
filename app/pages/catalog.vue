<script setup lang="ts">
import { useSets } from '~/features/catalog/queries/useSets'

import CatalogSearch from '~/features/catalog/components/CatalogSearch.vue'
import CatalogSetCard from '~/features/catalog/components/CatalogSetCard.vue'
import AppSimpleSelect from '~/components/ui/inputs/AppSimpleSelect.vue'
import CatalogSort from '~/features/catalog/components/CatalogSort.vue'
import CatalogCategoriesSelect from '~/features/catalog/components/CatalogCategoriesSelect.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Каталог наборов'
})

const route = useRoute()

const filters = ref({
  category: 'all',
  q: '',
  source: route.query.source ? (route.query.source as string) : 'all',
  setType: 'all',
  sort: 'popular'
})

const { data, isLoading } = useSets(filters)

const setItems = computed(() => {
  return data.value ? data.value.data : []
})

const hasFilters = computed(() => {
  return (
    filters.value.category !== 'all' ||
    filters.value.q ||
    filters.value.source !== 'all' ||
    filters.value.setType !== 'all' ||
    filters.value.sort !== 'popular'
  )
})

const onResetFilters = () => {
  filters.value.category = 'all'
  filters.value.q = ''
  filters.value.source = 'all'
  filters.value.setType = 'all'
  filters.value.sort = 'popular'
}

const noun = (n: number) => {
  const m = n % 10,
    c = n % 100
  if (m === 1 && c !== 11) return 'набор'
  if (m >= 2 && m <= 4 && (c < 10 || c >= 20)) return 'набора'
  return 'наборов'
}

const sourcesOptions = [
  { value: 'all', label: 'Все' },
  { value: 'ss', label: 'SmartSpend' },
  { value: 'community', label: 'Сообщество' },
  { value: 'own', label: 'Мои' },
  { value: 'liked', label: 'Избранное' }
]
</script>

<template>
  <main class="catalog-main">
    <div class="catalog-header">
      <div class="catalog-page-header">
        <div>
          <div
            class="page-title"
            :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
          >
            Наборы
          </div>
        </div>
      </div>
    </div>

    <div class="catalog-scroll">
      <div id="sp-cat-filters" class="catalog-filters-bar">
        <div class="filters-block">
          <CatalogSearch v-model="filters.q" />

          <div class="promo-selects-row">
            <AppSimpleSelect
              v-model="filters.source"
              label="Источник"
              :items="sourcesOptions"
            />

            <CatalogSort v-model="filters.sort" />
          </div>

          <CatalogCategoriesSelect v-model="filters.category" />

          <div v-if="hasFilters" class="filter-summary">
            <span>{{ setItems.length }} {{ noun(setItems.length) }}</span>

            <button class="reset-btn" @click="onResetFilters">Сбросить</button>
          </div>
        </div>
      </div>

      <div id="sp-cat-grid" class="catalog-grid">
        <div v-if="setItems.length === 0 && !isLoading" class="empty-state">
          <div class="empty-state-icon">📦</div>
          <div class="empty-state-title">Наборов не найдено</div>
          <div class="empty-state-desc">Попробуйте изменить фильтры</div>
        </div>

        <template v-else>
          <CatalogSetCard
            v-for="item in setItems"
            :key="item.id"
            :item="item"
          />
        </template>
      </div>
    </div>
  </main>
</template>
