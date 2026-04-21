<script setup lang="ts">
import { formatDate } from '~/utils/formatDate'
import type { ArticleDetails } from '~/types'

type AccountArticleCardProps = {
  article: ArticleDetails
}

const props = defineProps<AccountArticleCardProps>()

const router = useRouter()

const isDraft = computed(() => {
  return props.article.status === 'draft'
})

const isPrivate = computed(() => {
  return props.article.isPrivate
})

const badgeClass = computed(() => {
  if (!isPrivate.value) {
    return 'public'
  }

  return isDraft.value ? 'draft' : 'private'
})

const badgeLabel = computed(() => {
  if (!isPrivate.value) {
    return 'Публичный'
  }

  return isDraft.value ? 'Черновик' : 'Личное'
})

const onEditArticle = () => {}
const onDeleteArticle = () => {}
const onShowArticleDetails = () => {
  router.push(`/articles/${props.article.id}`)
}
</script>

<template>
  <div
    v-if="isPrivate"
    class="acc-article-card acc-article-card--clickable"
    @click="onShowArticleDetails"
  >
    <div class="acc-article-title-row">
      <span class="acc-article-title">{{ article.title }}</span>
      <span :class="`visibility-badge ${badgeClass}`">{{ badgeLabel }}</span>
    </div>

    <div class="acc-article-excerpt">{{ article.preview }}</div>

    <div class="acc-card-actions">
      <span class="acc-card-meta">
        {{ formatDate(article.createdAt as Date, 'PPP') }}
      </span>

      <div class="acc-card-actions-right">
        <button class="acc-btn-edit" @click.stop="onEditArticle">
          <svg
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
            />
          </svg>

          Редактировать
        </button>

        <button
          class="acc-btn-visibility acc-btn-delete-gray"
          @click="onDeleteArticle"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>

  <article
    v-else
    class="feed-article acc-feed-article"
    @click="onShowArticleDetails"
  >
    <div class="fa-author-row">
      <span v-if="article.categoryId" class="fa-category">
        {{ article.categoryName }}
      </span>

      <span class="fa-sep">·</span>

      <span :class="`visibility-badge ${badgeClass}`">{{ badgeLabel }}</span>
    </div>

    <h2 class="fa-title">{{ article.title }}</h2>

    <p class="fa-preview">{{ article.preview }}</p>

    <div class="fa-bottom">
      <div class="fa-action-stat">
        <svg
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
          />
          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>

        {{ article.likesCount }}
      </div>

      <div class="fa-action-stat">
        <svg
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          />
        </svg>
        {{ article.commentsCount }}
      </div>
      <div class="fa-action-stat">
        <svg
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
          />
          <path
            d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
          />
        </svg>

        {{ article.dislikesCount }}
      </div>

      <div class="f-spacer" />

      <span class="fa-time">{{ formatDate(article.createdAt, 'PPP') }}</span>

      <button
        class="acc-btn-visibility acc-btn-delete-gray"
        @click.stop="onDeleteArticle"
      >
        Удалить
      </button>
    </div>
  </article>
</template>
