<script setup lang="ts">
import type { ArticleDetails } from '~/types'

type SetArticleItemCardProps = {
  article: ArticleDetails
}

defineProps<SetArticleItemCardProps>()
</script>

<template>
  <div class="sd-art-grid-card">
    <div class="sd-art-grid-title">{{ article.title }}</div>

    <div class="sd-art-grid-preview">{{ article.preview }}</div>
  </div>
</template>
