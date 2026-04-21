<script setup lang="ts">
import { useArticle } from '~/features/articles/composables/useArticle'

import ArticleDetailsCard from '~/features/articles/components/ArticleDetailsCard.vue'
import ArticleContentCard from '~/features/articles/components/ArticleContentCard.vue'
import ArticleLinkedSetsCard from '~/features/articles/components/linked-sets/ArticleLinkedSetsCard.vue'
import ArticleNotesCard from '~/features/articles/components/notes/ArticleNotesCard.vue'
import ArticleLinkedSetSingleCard from '~/features/articles/components/linked-sets/ArticleLinkedSetSingleCard.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

const route = useRoute()
const router = useRouter()

const { article, title, isMine } = useArticle(route.params.id as string)

useHead({
  title
})
</script>

<template>
  <main class="article-main">
    <div class="breadcrumb">
      <span class="breadcrumb-item" @click="router.push('/feed')">Лента</span>

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

      <span class="breadcrumb-item">{{ article?.categoryName }}</span>

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

    <ArticleDetailsCard />

    <ArticleContentCard />

    <ArticleLinkedSetsCard v-if="article?.linkedSets.length" />

    <ArticleLinkedSetSingleCard v-if="article?.setLink" />

    <ArticleNotesCard v-if="isMine" />
  </main>
</template>
