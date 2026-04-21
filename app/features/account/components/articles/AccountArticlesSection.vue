<script setup lang="ts">
import { useMyArticles } from '~/features/articles/composables/useMyArticles'

import AccountArticleCard from '~/features/account/components/articles/AccountArticleCard.vue'

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

    <div v-if="myArticles.length === 0" class="acc-empty">
      <div class="acc-empty-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      </div>

      <div class="acc-empty-title">Нет статей</div>

      <div class="acc-empty-desc">
        Напишите первую статью и поделитесь опытом с сообществом
      </div>
    </div>

    <AccountArticleCard
      v-for="article in myArticles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>
