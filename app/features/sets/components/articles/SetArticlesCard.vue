<script setup lang="ts">
import { useSetArticles } from '~/features/sets/queries/useSetArticles'

import ArticleAuthorBubble from '~/features/articles/components/ArticleAuthorBubble.vue'
import SetArticleItemCard from '~/features/sets/components/articles/SetArticleItemCard.vue'

const route = useRoute()

const { data } = useSetArticles(route.params.id as string)

const articles = computed(() => {
  return data.value ? data.value.data : []
})

const uniqueArticlesAuthors = computed(() => {
  if (!articles.value.length) {
    return []
  }

  return articles.value.map((article) => article.author)
})
</script>

<template>
  <div id="sd-articles-section" class="sd-section-card">
    <div class="sd-section-header">
      <div class="sd-section-title">Дополнения</div>
    </div>

    <div v-if="uniqueArticlesAuthors.length" class="sd-art-authors-row">
      <span class="sd-art-authors-label">Авторы</span>

      <ArticleAuthorBubble
        v-for="author in uniqueArticlesAuthors"
        :key="author.id"
        :author="author"
      />
    </div>

    <div class="sd-articles-grid">
      <SetArticleItemCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>
