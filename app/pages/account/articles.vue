<script setup lang="ts">
import { useMyArticles } from '~/features/articles/composables/useMyArticles'

import AccountArticleCard from '~/features/account/components/articles/AccountArticleCard.vue'
import AccountArticlesEmpty from '~/features/account/components/articles/AccountArticlesEmpty.vue'

const { myArticles } = useMyArticles()

const router = useRouter()

const onCreateArticle = () => {
  router.push('/articles/new')
}
</script>

<template>
  <div class="acc-panel">
    <div class="panel-header">
      <span class="panel-title">Статьи, которые вы написали</span>

      <button class="acc-btn-primary" @click="onCreateArticle">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>

        Написать статью
      </button>
    </div>

    <AccountArticlesEmpty v-if="myArticles.length === 0" />

    <template v-else>
      <AccountArticleCard
        v-for="article in myArticles"
        :key="article.id"
        :article="article"
      />
    </template>
  </div>
</template>
