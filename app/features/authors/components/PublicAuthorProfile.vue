<script setup lang="ts">
import { useAuthorProfile } from '~/features/authors/composables/useAuthorProfile'
import type { ArticleDetails, CustomSet } from '~/types'

import AuthorArticleCard from '~/features/authors/components/cards/AuthorArticleCard.vue'
import AuthorSetCard from '~/features/authors/components/cards/AuthorSetCard.vue'

const route = useRoute()

const { profile } = useAuthorProfile(route.params.id as string)

const tabs = [
  { id: 'articles', label: `Статьи · 0` },
  { id: 'sets', label: `Наборы · 0` }
]

const articles = ref<ArticleDetails[]>([])
const sets = ref<CustomSet[]>([])

const selectedTab = ref('articles')

const onFollow = () => {}
</script>

<template>
  <div class="user-header">
    <div class="user-avatar-large" :style="{ fontSize: '28px' }">
      <span>{{ profile?.initials }}</span>
    </div>

    <div class="user-info">
      <div class="user-name-line">
        <span class="user-display-name">{{ profile?.displayName }}</span>
      </div>

      <div class="user-nickname-line">
        <span class="user-username">{{ profile?.username }}</span>
      </div>

      <div class="user-meta">
        <span class="user-meta-item">
          {{ profile?.followersCount }} подписчиков
        </span>

        <span class="user-meta-item">{{ profile?.articlesCount }} статей</span>

        <span class="user-meta-item">{{ profile?.setsCount }} наборов</span>
      </div>

      <div class="user-bio">{{ profile?.bio }}</div>
    </div>

    <button
      :class="`btn-follow${profile?.isFollowing ? ' following' : ''}`"
      :style="{ position: 'absolute', top: '28px', right: '32px' }"
      @click="onFollow"
    >
      {{ profile?.isFollowing ? 'Подписан' : 'Подписаться' }}
    </button>
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
    <AuthorArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>

  <div v-if="selectedTab === 'sets'" class="acc-panel">
    <div class="acc-sets-grid">
      <AuthorSetCard v-for="set in sets" :key="set.id" :set="set" />
    </div>
  </div>
</template>
