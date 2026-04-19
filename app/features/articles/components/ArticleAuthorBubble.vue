<script setup lang="ts">
type ArticleAuthorBubbleProps = {
  author: {
    color: string
    initials: string
  }
}

defineProps<ArticleAuthorBubbleProps>()
</script>

<template>
  <div class="sd-art-author-avatar" :style="{ background: author.color }">
    {{ author.initials }}
  </div>
</template>
