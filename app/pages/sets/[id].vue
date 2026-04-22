<script setup lang="ts">
import { useSet } from '~/features/sets/composables/useSet'
import type { ArticleDetails } from '~/types'

import SetArticlesCard from '~/features/sets/components/articles/SetArticlesCard.vue'
import SetNotesCard from '~/features/sets/components/notes/SetNotesCard.vue'
import SetDetailsCard from '~/features/sets/components/SetDetailsCard.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

const route = useRoute()

const { set, title, isPersonal } = useSet(route.params.id as string)

useHead({
  title
})

const myArticles = ref<ArticleDetails[]>([])
</script>

<template>
  <main class="sd-main">
    <div class="breadcrumb">
      <span v-if="isPersonal" class="breadcrumb-item"> Профиль </span>
      <span v-else class="breadcrumb-item"> Наборы </span>

      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>

      <span class="breadcrumb-item">{{ set?.categoryName }}</span>

      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>

      <span class="breadcrumb-current">{{ title }}</span>
    </div>

    <SetDetailsCard />

    <template v-if="isPersonal">
      <div id="sp-sd-personal-arts" class="sd-section-card">
        <div class="sd-section-header">
          <div class="sd-section-title">
            Статьи

            <span v-if="myArticles.length" class="sd-section-count">
              {{ myArticles.length }}
            </span>
          </div>
          <button class="sd-btn-sm">
            <svg
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>

            Написать
          </button>
        </div>

        <div v-if="myArticles.length === 0" class="sd-notes-empty">
          <div class="sd-notes-empty-text">
            Нет прикреплённых статей. Напишите статью или прикрепите из ленты.
          </div>
        </div>

        <div v-else class="sd-articles-list">
          <div
            v-for="article in myArticles"
            :key="article.id"
            class="sd-article-card"
          >
            <div class="sd-art-avatar" :style="{ background: '#8B7B6B' }">
              {{ article.author.initials }}
            </div>

            <div class="sd-art-body">
              <div class="sd-art-meta-row">
                <span class="sd-art-author">
                  {{ article.author.displayName }}
                </span>
              </div>

              <div class="sd-art-title">{{ article.title }}</div>
            </div>

            <svg
              class="sd-article-arr"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>

      <SetNotesCard />
    </template>

    <SetArticlesCard v-else />
  </main>
</template>
