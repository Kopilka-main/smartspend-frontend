<script setup lang="ts">
import type { ArticleDetails, CustomSet } from '~/types'

const selectedTab = ref('articles')

const tabs = [
  { id: 'articles', label: `Статьи · 0` },
  { id: 'sets', label: `Наборы · 0` }
]

const articles = ref<ArticleDetails[]>([])
const sets = ref<CustomSet[]>([])
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
    >
      {{ tab.label }}
    </button>
  </div>

  <div v-if="selectedTab === 'articles'" class="acc-panel">
    <div v-for="article in articles" :key="article.id" class="acc-article-card">
      <div class="acc-article-title">{{ article.title }}</div>

      <div class="acc-article-excerpt">{{ article.preview }}</div>

      <div class="article-footer-meta">
        <span>{{ article.publishedAt }}</span>

        <span v-if="article.viewsCount">
          {{ article.viewsCount.toLocaleString('ru') }} просмотров
        </span>

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
      </div>
    </div>
  </div>

  <div v-if="selectedTab === 'sets'" class="acc-panel">
    <div class="acc-sets-grid">
      <div v-for="set in sets" :key="set.id" class="acc-set-card">
        <div class="acc-set-accent" :style="{ background: set.color }" />
        <div class="acc-set-body">
          <div class="acc-set-top-row">
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
          </div>
          <div class="acc-set-name">{{ set.title }}</div>
          <div class="acc-set-tags">
            <span v-for="name in set.itemNames" :key="name" class="acc-set-tag">
              {{ name }}
            </span>
          </div>
        </div>
        <div class="acc-set-footer">
          <span class="acc-set-amount">{{ set.amount }}</span>
          <span class="acc-set-period">{{ set.period }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
