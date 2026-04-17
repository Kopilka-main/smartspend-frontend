<script setup lang="ts">
import { useArticle } from '~/features/articles/queries/useArticle'
import { useCurrentUser } from '~/composables/useCurrentUser'

import ArticleDetailsCard from '~/features/articles/components/ArticleDetailsCard.vue'
// import AppCommentsCard from '~/components/layout/comments/AppCommentsCard.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})
const route = useRoute()
const router = useRouter()

const { data, isLoading } = useArticle(route.params.id as string)

const { currentUser } = useCurrentUser()

const notes = ref<any[]>([])

const article = computed(() => {
  return data.value ? data.value.data : null
})

const title = computed(() => {
  return article.value ? article.value.title : ''
})

const blocks = computed(() => {
  return article.value ? article.value.blocks : []
})

const isMine = computed(() => {
  return currentUser.value?.id === article.value?.id
})

useHead({
  title
})

const onRemoveNote = (note: any) => {}
</script>

<template>
  <main class="article-main">
    <div class="breadcrumb">
      <span class="breadcrumb-item" @click="router.push('/feed')">Лента</span>

      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>

      <span class="breadcrumb-item">Категория</span>

      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>

      <span class="breadcrumb-current">{{ title }}</span>
    </div>

    <ArticleDetailsCard v-if="article" :article="article" />

    <div class="content-card">
      <div class="content-body">
        <component :is="block.type" v-for="block in blocks" :key="block.id">
          <span v-html="block.text" />
        </component>
      </div>
    </div>

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
          <path
            d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          />
          <path
            d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          />
        </svg>

        Набор, связанный с этой статьёй
      </div>

      <!--   Article Linked Set Card   -->
    </template>

    <template v-if="false">
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
          <path
            d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          />
          <path
            d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          />
        </svg>
        Набор, связанный с этой статьёй
      </div>

      <!--  Article Linked Set Catalog Card    -->
    </template>

    <div v-if="isMine" class="section-card">
      <div class="section-header">
        <div class="section-title">
          Заметки

          <span v-if="notes.length" class="section-count">
            {{ notes.length }}
          </span>
        </div>
      </div>

      <div v-if="notes.length === 0" class="sd-notes-empty">
        <div class="sd-notes-empty-text">
          Заметок пока нет. Добавьте мысли или наблюдения к этой статье.
        </div>
      </div>

      <div v-if="notes.length" class="sd-notes-list">
        <div v-for="note in notes" :key="note.id" class="sd-note-item">
          <div class="sd-note-text">{{ note.text }}</div>
          <div class="sd-note-footer">
            <span class="sd-note-date">{{ note.createdAt }}</span>

            <button class="sd-note-delete" @click="onRemoveNote(note)">
              <svg
                width="11"
                height="11"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4h6v2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <form class="sd-note-form">
        <input class="sd-note-input" placeholder="Добавить заметку…" />

        <button type="submit" class="sd-note-submit">
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  </main>
</template>
