<script setup lang="ts">
import { useFeed } from '~/features/feed/queries/useFeed'
import type {
  FeedArticle as FeedArticleType,
  FeedSet as FeedSetType
} from '~/types'

import AppPageHeader from '~/components/layout/AppPageHeader.vue'
import FeedFilters from '~/features/feed/components/FeedFilters.vue'
import FeedArticle from '~/features/feed/components/FeedArticle.vue'
import AppEmpty from '~/components/layout/AppEmpty.vue'
import FeedSet from '~/features/feed/components/FeedSet.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Лента'
})

const filters = ref({
  categoryId: 'all',
  sort: 'popular_all',
  articleType: 'all',
  mode: 'unread'
})

const { data, isLoading } = useFeed(filters)

const items = computed(() => {
  return data.value ? data.value.data : []
})

const getItemComponent = (item: FeedSetType | FeedArticleType) => {
  switch (item.type) {
    case 'set':
      return FeedSet
    case 'article':
      return FeedArticle
    default:
      return null
  }
}
</script>

<template>
  <div>
    <main class="min-w-0 w-full max-w-860 mx-auto">
      <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
        <div class="flex flex-col gap-16 pb-4">
          <AppPageHeader title="Лента" />

          <div class="">
            <FeedFilters
              v-model:category="filters.categoryId"
              v-model:article-type="filters.articleType"
              v-model:sort="filters.sort"
              v-model:mode="filters.mode"
            />

            <div
              class="max-h-500 -mx-16 900:-mx-32 custom-scroll overflow-y-auto"
            >
              <div class="pt-20 px-16 900:px-32">
                <div class="flex flex-col gap-12">
                  <div class="flex flex-col gap-12">
                    <div class="flex items-center gap-10 text-12 text-text-3">
                      <span>{{ items.length }} материала</span>

                      <!--                      <button-->
                      <!--                        type="button"-->
                      <!--                        class="rounded-6 border border-border bg-surface-2 px-8 py-4 text-11 text-text-2 hover:bg-surface-3 hover:text-text"-->
                      <!--                      >-->
                      <!--                        Сбросить-->
                      <!--                      </button>-->
                    </div>

                    <AppEmpty
                      v-if="!items.length && !isLoading"
                      title="Ничего не найдено"
                      description="Попробуйте изменить фильтры"
                    />

                    <component
                      :is="getItemComponent(item)"
                      v-for="item in items"
                      v-else
                      :key="item.id"
                      :item="item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
