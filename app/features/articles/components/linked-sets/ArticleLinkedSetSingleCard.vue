<script setup lang="ts">
import { useArticle } from '~/features/articles/composables/useArticle'

const route = useRoute()

const { article } = useArticle(route.params.id as string)

const setLink = computed(() => {
  return article.value?.setLink
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

    Набор, связанный с этой статьёй
  </div>

  <div class="catalog-card">
    <div class="card-body">
      <div class="card-title">{{ setLink?.title }}</div>
      <div v-if="setLink?.description" class="card-desc">
        {{ setLink?.description }}
      </div>
    </div>

    <div class="card-cost-row">
      <div class="card-cost-item card-cost-monthly">
        <div class="card-cost-val">
          {{ (setLink?.amount || 0).toLocaleString('ru') }} ₽
        </div>
        <div class="card-cost-lbl">{{ setLink?.amountLabel || 'в месяц' }}</div>
      </div>

      <template v-if="setLink?.period">
        <div class="card-cost-sep" />

        <div class="card-cost-item">
          <div class="card-cost-val">{{ setLink?.period }}</div>
          <div class="card-cost-lbl">период</div>
        </div>
      </template>

      <template v-if="setLink?.usersCount">
        <div class="card-cost-sep" />

        <div class="card-cost-item">
          <div class="card-cost-val">{{ setLink?.usersCount || 0 }}</div>
          <div class="card-cost-lbl">подписчиков</div>
        </div>
      </template>
    </div>
  </div>
</template>
