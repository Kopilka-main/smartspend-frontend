<script setup lang="ts">
import { useFeed } from '~/features/feed/queries/useFeed'

import FeedArticle from '~/features/feed/components/FeedArticle.vue'
import AppSimpleSelect from '~/components/ui/inputs/AppSimpleSelect.vue'
import FeedTagSearchInput from '~/features/feed/components/FeedTagSearchInput.vue'
import CatalogCategoriesSelect from '~/features/catalog/components/CatalogCategoriesSelect.vue'
import FeedSortInput from '~/features/feed/components/FeedSortInput.vue'

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
  categories: [],
  mode: 'all',
  sort: 'popular_7d',
  q: ''
})

const { data, isLoading } = useFeed(filters)

const items = computed(() => {
  return data.value ? data.value.data : []
})

const modeItems = [
  { value: 'all', label: 'Все' },
  { value: 'subscriptions', label: 'Подписки' },
  { value: 'my_sets', label: 'Мои наборы' },
  { value: 'liked', label: 'Избранное' }
]

const hasFilters = computed(() => {
  return false
})

const noun = (n: number) => {
  const m = n % 10,
    c = n % 100

  if (m === 1 && c !== 11) {
    return 'материал'
  }

  if (m >= 2 && m <= 4 && (c < 10 || c >= 20)) {
    return 'материала'
  }

  return 'материалов'
}

const resetFilters = () => {}
</script>

<template>
  <main class="feed-main">
    <div class="page-header">
      <div
        class="page-title"
        :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
      >
        Лента
      </div>
    </div>

    <div class="feed-scroll">
      <div id="sp-feed-filters" class="filters-sticky">
        <div class="filters-block">
          <FeedTagSearchInput v-model="filters.q" />

          <div class="promo-selects-row">
            <AppSimpleSelect
              v-model="filters.mode"
              label="Режим"
              :items="modeItems"
            />

            <FeedSortInput v-model="filters.sort" />
          </div>

          <CatalogCategoriesSelect v-model="filters.categories" />

          <div v-if="hasFilters" class="filter-summary">
            <span>{{ items.length }} {{ noun(items.length) }}</span>

            <button class="reset-btn" @click="resetFilters">Сбросить</button>
          </div>
        </div>
      </div>

      <div class="feed-list">
        <div v-if="items.length === 0 && !isLoading" class="empty-state">
          <template v-if="filters.mode === 'liked'">
            <div class="empty-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div class="empty-title">Закладок пока нет</div>
            <div class="empty-desc">
              Нажмите
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                :style="{ verticalAlign: 'middle', margin: '0 2px' }"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              на любой статье, чтобы сохранить её сюда
            </div>
          </template>
          <template v-else-if="filters.mode === 'subscriptions'">
            <div class="empty-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div class="empty-title">Нет подписок</div>
            <div class="empty-desc">
              Подпишитесь на авторов через карточку профиля, чтобы видеть их
              статьи здесь
            </div>
          </template>
          <template v-else-if="filters.mode === 'my_sets'">
            <div class="empty-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <div class="empty-title">Нет статей по вашим наборам</div>
            <div class="empty-desc">
              Добавьте наборы из каталога — статьи, связанные с ними, появятся
              здесь
            </div>
          </template>
          <template v-else>
            <div class="empty-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div class="empty-title">Ничего не найдено</div>
            <div class="empty-desc">Попробуйте изменить фильтры</div>
          </template>
        </div>

        <FeedArticle
          v-for="article in items"
          :key="article.id"
          :item="article"
        />
      </div>
    </div>
  </main>
</template>
