<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'
import { useAuthorProfile } from '~/features/authors/composables/useAuthorProfile'
import { useAuthorArticles } from '~/features/authors/composables/useAuthorArticles'
import { useAuthorSets } from '~/features/authors/composables/useAuthorSets'
import { useFollowUser } from '~/queries/useFollowUser'

import AuthorArticleCard from '~/features/authors/components/cards/AuthorArticleCard.vue'
import AuthorSetCard from '~/features/authors/components/cards/AuthorSetCard.vue'

const route = useRoute()

const { mutate, isLoading } = useFollowUser(route.params.id as string)
const { sets } = useAuthorSets(route.params.id as string)
const { articles } = useAuthorArticles(route.params.id as string)
const { profile } = useAuthorProfile(route.params.id as string)
const { currentUser } = useCurrentUser()

const tabs = computed(() => {
  return [
    { id: 'articles', label: `Статьи · ${articles.value.length}` },
    { id: 'sets', label: `Наборы · ${sets.value.length}` }
  ]
})

const canFollow = computed(() => {
  return profile.value?.id !== currentUser.value?.id
})

const selectedTab = ref('articles')

const onFollow = () => {
  mutate(profile.value?.isFollowing || false)
}
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
        <span class="user-username">@{{ profile?.username }}</span>
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
      v-if="canFollow"
      :disabled="isLoading"
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
      <span class="visibility-badge public">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path
            d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"
          />
        </svg>

        Публичный
      </span>
    </AuthorArticleCard>
  </div>

  <div v-if="selectedTab === 'sets'" class="acc-panel">
    <div class="acc-sets-grid">
      <AuthorSetCard v-for="set in sets" :key="set.id" :set="set">
        <span class="acc-set-source">{{ set.author.displayName }}</span>

        <span class="visibility-badge public" :style="{ fontSize: '9px' }">
          Публичный
        </span>
      </AuthorSetCard>
    </div>
  </div>
</template>
