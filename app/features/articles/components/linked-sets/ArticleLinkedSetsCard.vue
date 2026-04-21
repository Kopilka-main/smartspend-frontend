<script setup lang="ts">
import { useArticle } from '~/features/articles/composables/useArticle'
import ArticleLinkedSet from '~/features/articles/components/linked-sets/ArticleLinkedSet.vue'

const route = useRoute()

const { article } = useArticle(route.params.id as string)

const label = computed(() => {
  return article.value?.linkedSets.length === 1
    ? 'Набор, связанный с этой статьёй'
    : 'Наборы, связанные с этой статьёй'
})
</script>

<template>
  <div class="article-set-label">
    <svg
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>

    {{ label }}
  </div>

  <ArticleLinkedSet
    v-for="set in article?.linkedSets"
    :key="set.id"
    :set="set"
  />
</template>
