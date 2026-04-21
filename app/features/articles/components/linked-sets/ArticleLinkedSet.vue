<script setup lang="ts">
import type { ArticleLinkedSet as ArticleLinkedSetType } from '~/types'

type ArticleLinkedSetProps = {
  set: ArticleLinkedSetType
}

defineProps<ArticleLinkedSetProps>()
</script>

<template>
  <div class="linked-set-article-card">
    <div class="linked-set-article-dot" :style="{ background: set.color }" />
    <div class="linked-set-article-info">
      <div class="linked-set-article-name">{{ set.title }}</div>

      <div v-if="set.categoryName" class="linked-set-article-cat">
        {{ set.categoryName }}
      </div>
    </div>

    <div v-if="set.amount" class="linked-set-article-amount">
      {{ set.amount }}

      <span v-if="set.period" class="linked-set-article-period">
        {{ set.period }}
      </span>
    </div>
  </div>
</template>
