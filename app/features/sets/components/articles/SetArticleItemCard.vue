<script setup lang="ts">
import type { ArticleDetails } from '~/types'

type SetArticleItemCardProps = {
  article: ArticleDetails
}

const props = defineProps<SetArticleItemCardProps>()

const router = useRouter()

const onSwitchToArticle = () => {
  router.push(`/articles/${props.article.id}`)
}
</script>

<template>
  <div class="sd-art-grid-card" @click="onSwitchToArticle">
    <div class="sd-art-grid-title">{{ article.title }}</div>

    <div class="sd-art-grid-preview">{{ article.preview }}</div>
  </div>
</template>
