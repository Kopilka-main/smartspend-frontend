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

      <slot />
    </div>
  </div>
</template>
