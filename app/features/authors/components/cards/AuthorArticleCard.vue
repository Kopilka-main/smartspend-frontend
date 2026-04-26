<script setup lang="ts">
import type { ArticleDetails } from '~/types'

type AuthorArticleCardProps = {
  article: ArticleDetails
}

defineProps<AuthorArticleCardProps>()
</script>

<template>
  <div class="acc-article-card">
    <div class="acc-article-title">{{ article.title }}</div>
    <div class="acc-article-excerpt">{{ article.preview }}</div>
    <div class="article-footer-meta">
      <span>{{ article.publishedAt }}</span>

      <span v-if="article.viewsCount">
        {{ article.viewsCount.toLocaleString('ru') }} просмотров
      </span>

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
    </div>
  </div>
</template>
