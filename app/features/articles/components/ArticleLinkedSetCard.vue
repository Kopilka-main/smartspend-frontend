<script setup lang="ts">
import type { CustomSet } from '~/types'

type ArticleLinkedSetCardProps = {
  set: CustomSet
}

defineProps<ArticleLinkedSetCardProps>()
</script>

<template>
  <div class="linked-set-article-card">
    <div class="linked-set-article-dot" :style="{ background: set.color }" />
    <div class="linked-set-article-info">
      <div class="linked-set-article-name">{{ set.title }}</div>

      <div v-if="set.categoryId" class="linked-set-article-cat">
        {{ set.categoryName }}
      </div>
    </div>

    <div v-if="set.amount" class="linked-set-article-amount">
      {{ set.amount }}

      <span v-if="set.amountLabel" class="linked-set-article-period">
        {{ set.amountLabel }}
      </span>
    </div>
  </div>
</template>
