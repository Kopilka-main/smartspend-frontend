<script setup lang="ts">
import { useSets } from '~/features/catalog/queries/useSets'

import AppPageHeader from '~/components/layout/AppPageHeader.vue'

import CatalogCategories from '~/features/catalog/components/CatalogCategories.vue'
import CatalogSearch from '~/features/catalog/components/CatalogSearch.vue'
import CatalogFilterChips from '~/features/catalog/components/CatalogFilterChips.vue'
import CatalogSetCard from '~/features/catalog/components/CatalogSetCard.vue'
import AppEmpty from '~/components/layout/AppEmpty.vue'

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

const filters = ref({
  category: 'all',
  q: '',
  source: 'all',
  setType: 'all',
  sort: 'popular'
})

const { data, isLoading } = useSets(filters)

const setItems = computed(() => {
  return data.value ? data.value.data : []
})
</script>

<template>
  <main class="min-w-0 w-full max-w-[106rem] mx-auto">
    <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
      <div class="flex flex-col gap-16 pb-4">
        <AppPageHeader
          title="Каталог наборов"
          subTitle="Готовые наборы товаров от SmartSpend и сообщества"
        />

        <div>
          <div
            class="sticky border-b-1 px-16 900:px-32 -mx-16 900:-mx-32 border-border pb-12 top-12 z-20"
          >
            <div>
              <CatalogCategories v-model="filters.category" />

              <CatalogSearch v-model="filters.q" />

              <CatalogFilterChips
                v-model:source="filters.source"
                v-model:setType="filters.setType"
                v-model:sort="filters.sort"
              />

              <div class="mt-10 text-12 text-text-3">
                <span>{{ setItems.length }} наборов</span>
              </div>
            </div>
          </div>

          <div
            class="max-h-500 -mx-16 900:-mx-32 custom-scroll overflow-y-auto"
          >
            <div class="pt-20 px-16 900:px-32">
              <AppEmpty
                v-if="!setItems.length && !isLoading"
                title="Наборов не найдено"
                description="Попробуйте изменить фильтры"
              />

              <div
                v-if="setItems.length"
                class="grid grid-cols-1 900:grid-cols-2 xl:grid-cols-3 gap-12"
              >
                <CatalogSetCard
                  v-for="item in setItems"
                  :key="item.id"
                  :item="item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
