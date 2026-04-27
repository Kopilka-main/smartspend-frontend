<script setup lang="ts">
import { useAuthorSets } from '~/features/authors/composables/useAuthorSets'
import { useAuthorArticles } from '~/features/authors/composables/useAuthorArticles'

import AuthorArticleCard from '~/features/authors/components/cards/AuthorArticleCard.vue'
import AuthorSetCard from '~/features/authors/components/cards/AuthorSetCard.vue'

const route = useRoute()

const { sets } = useAuthorSets(route.params.id as string)
const { articles } = useAuthorArticles(route.params.id as string)

const selectedTab = ref('articles')

const tabs = computed(() => {
  return [
    { id: 'articles', label: `Статьи · ${articles.value.length}` },
    { id: 'sets', label: `Наборы · ${sets.value.length}` }
  ]
})
</script>

<template>
  <div class="user-header author-special-header">
    <div class="author-special-avatar author-special-avatar--ghost">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M12 2a8 8 0 0 0-8 8v10l3-3 3 3 3-3 3 3 3-3V10a8 8 0 0 0-8-8zm-2.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
      </svg>
    </div>
    <div class="user-info">
      <div class="user-name-line">
        <span class="user-display-name author-ghost-name">Привидение</span>
      </div>

      <div class="user-bio" :style="{ marginTop: '8px' }">
        Этот аккаунт был удалён пользователем. Опубликованные материалы
        сохранены и переданы анонимному автору.
      </div>
    </div>
  </div>

  <div class="author-ghost-notice">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2a8 8 0 0 0-8 8v10l3-3 3 3 3-3 3 3 3-3V10a8 8 0 0 0-8-8zm-2.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
      />
    </svg>

    Материалы удалённого пользователя сохранены на платформе и доступны для
    чтения
  </div>

  <div class="acc-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="`acc-tab${selectedTab === tab.id ? ' active' : ''}`"
      @click="selectedTab = tab.id"
    >
      {{ tab.label }}
    </button>
  </div>

  <div v-if="selectedTab === 'articles'" class="acc-panel">
    <AuthorArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    >
      <span class="author-ghost-attr">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="currentColor"
          :style="{ opacity: 0.6 }"
        >
          <path
            d="M12 2a8 8 0 0 0-8 8v10l3-3 3 3 3-3 3 3 3-3V10a8 8 0 0 0-8-8zm-2.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
          />
        </svg>

        Привидение
      </span>
    </AuthorArticleCard>
  </div>

  <div v-if="selectedTab === 'sets'" class="acc-panel">
    <div class="acc-sets-grid">
      <AuthorSetCard v-for="set in sets" :key="set.id" :set="set">
        <span class="acc-set-source author-ghost-attr">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
            :style="{ opacity: 0.6 }"
          >
            <path
              d="M12 2a8 8 0 0 0-8 8v10l3-3 3 3 3-3 3 3 3-3V10a8 8 0 0 0-8-8zm-2.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            />
          </svg>

          Привидение
        </span>
      </AuthorSetCard>
    </div>
  </div>
</template>
