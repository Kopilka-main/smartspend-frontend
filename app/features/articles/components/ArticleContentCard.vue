<script setup lang="ts">
import { useArticle } from '~/features/articles/composables/useArticle'

const route = useRoute()

const { article } = useArticle(route.params.id as string)
</script>

<template>
  <div class="content-card">
    <div class="content-body">
      <component
        :is="block.type"
        v-for="block in article?.blocks"
        :key="block.id"
      >
        <span v-html="block.text" />
      </component>
    </div>
  </div>
</template>
