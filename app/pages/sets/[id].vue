<script setup lang="ts">
import { useSetDetails } from '~/features/sets/queries/useSetDetails'
import { useSetComments } from '~/features/sets/queries/useSetComments'
import { useCurrentUser } from '~/composables/useCurrentUser'
import type { ArticleDetails } from '~/types'

import AppLikeButton from '~/components/ui/AppLikeButton.vue'
import AppDislikeButton from '~/components/ui/AppDislikeButton.vue'
import SetItemsTable from '~/features/sets/components/set-items-table/SetItemsTable.vue'
import SetAuthorChip from '~/features/sets/components/SetAuthorChip.vue'
import SetArticlesCard from '~/features/sets/components/articles/SetArticlesCard.vue'
import SetNotesCard from '~/features/sets/components/notes/SetNotesCard.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

const route = useRoute()
const router = useRouter()

const sort = ref('popular')

const { isReactedAsDislike, isReactedAsLike, onToggleDislike, onToggleLike } =
  useItemReaction(route.params.id as string, 'set')

const { currentUser } = useCurrentUser()
const { data: setData } = useSetDetails(route.params.id as string)
const { data: commentsData } = useSetComments(route.params.id as string, sort)
const allArticles = ref([])

const details = computed(() => {
  return setData.value ? setData.value.data : null
})

const comments = computed(() => {
  return commentsData.value ? commentsData.value.data : []
})

const title = computed(() => {
  return details.value ? details.value.title : ''
})

useHead({
  title
})

const isPersonal = computed(() => {
  return details.value?.author?.id === currentUser.value?.id
})

const isAboutVisible = ref(false)
const isPaused = ref(false)
const myArticles = ref<ArticleDetails[]>([])
const notes = ref([])
const scale = ref(1.0)

const isEditMode = ref(false)

const isDefault = computed(() => {
  return true
})

const isConsumable = computed(() => {
  return details.value?.categoryId === 'food'
})

const fromCatalog = computed(() => {
  return (
    isPersonal.value &&
    (details.value?.source === 'ss' || details.value?.source === 'community')
  )
})

const color = computed(() => {
  return details.value?.color || '#4E8268'
})

const isSmartSpend = computed(() => {
  return details.value?.source === 'smartspend'
})
</script>

<template>
  <main class="sd-main">
    <div class="breadcrumb">
      <template v-if="isPersonal">
        <span class="breadcrumb-item" @click="router.push('/account')">
          Профиль
        </span>

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

        <span class="breadcrumb-item">{{ details?.categoryName }}</span>

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
      </template>

      <template v-else>
        <span class="breadcrumb-item" @click="router.push('/catalog')">
          Наборы
        </span>

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

        <span class="breadcrumb-item">{{ details?.categoryName }}</span>

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
      </template>

      <span class="breadcrumb-current">{{ title }}</span>
    </div>

    <div id="sp-sd-hero" class="hero-card">
      <div class="hero-body">
        <div class="hero-body-main">
          <div class="hero-title">{{ title }}</div>
          <div class="hero-desc">{{ details?.description }}</div>
        </div>

        <div v-if="!isPersonal" class="hero-body-actions">
          <!--          <AddInventoryBtn-->
          <!--            added="{added}"-->
          <!--            onAdd="{handleAdd}"-->
          <!--            onRemove="{handleRemove}"-->
          <!--          />-->
        </div>
      </div>

      <div id="sp-sd-items" class="sd-section-header">
        <div class="sd-section-title">
          Состав набора

          <span class="sd-section-count">
            {{ details?.items.length }} позиций
          </span>
        </div>

        <div class="sd-section-actions">
          <button v-if="!isDefault" class="sd-btn-sm">
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
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>

            Сбросить
          </button>

          <button :class="`sd-btn-sm${isEditMode ? ' active' : ''}`">
            <template v-if="isEditMode">
              <svg
                width="11"
                height="11"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>

              Готово
            </template>

            <template v-else>
              {{ isPersonal ? 'Редактировать' : 'Изменить набор' }}
            </template>
          </button>
        </div>
      </div>

      <div v-if="isEditMode" class="sd-scale-row">
        <div>
          <div class="sd-scale-title">Масштаб набора</div>
        </div>

        <div class="sd-scale-right">
          <span class="sd-scale-val">×{{ scale.toFixed(2) }}</span>

          <div class="sd-scale-stepper">
            <button class="sd-scale-btn">−</button>
            <button class="sd-scale-btn">+</button>
          </div>
        </div>
      </div>

      <SetItemsTable
        :scale="scale"
        :is-consumable="isConsumable"
        :items="details?.items || []"
      />

      <div class="sd-about-wrap">
        <div
          :class="`content-body sd-about-body${isAboutVisible ? '' : ' sd-about-collapsed'}`"
        >
          <h2>{{ details?.aboutTitle }}</h2>

          <p>{{ details?.aboutText }}</p>
        </div>
      </div>

      <div class="art-meta-row">
        <SetAuthorChip
          v-if="details"
          :name="`${isSmartSpend ? 'SmartSpend' : details.author?.displayName}`"
          :initials="`${isSmartSpend ? 'SS' : details.author?.initials}`"
          :date="details.createdAt"
          :color="`linear-gradient(135deg, ${color}, #B8A0C8)`"
        />

        <div v-if="!isPersonal && details?.author" class="art-meta-sep" />

        <div v-if="isPersonal" class="sd-personal-actions">
          <button :class="`sd-personal-state${isPaused ? ' paused' : ''}`">
            <template v-if="isPaused">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

              Запустить
            </template>

            <template v-else>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>

              На паузу
            </template>
          </button>

          <button class="sd-personal-delete">
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
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14H6L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4h6v2" />
            </svg>
          </button>
        </div>

        <template v-if="!isPersonal && details?.usersCount">
          <div class="art-meta-sep" />

          <div class="fa-action-stat">
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>

            {{ details?.usersCount }}
          </div>
        </template>

        <AppLikeButton
          v-if="!isPersonal"
          :count="details?.likesCount || 0"
          :is-liked="isReactedAsLike"
          @toggle="onToggleLike"
        />

        <div
          v-if="!isPersonal && comments.length > 0"
          class="fa-action-stat fa-action-stat--link"
        >
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            />
          </svg>

          {{ comments.length }}
        </div>

        <div
          v-if="!isPersonal && allArticles.length > 0"
          class="fa-action-stat fa-action-stat--link"
        >
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>

          {{ allArticles.length }}
        </div>

        <AppDislikeButton
          v-if="!isPersonal"
          :is-disliked="isReactedAsDislike"
          @toggle="onToggleDislike"
        />
      </div>
    </div>

    <div v-if="fromCatalog" class="sd-parent-card">
      <div class="sd-parent-card-left">
        <div class="sd-parent-card-label">Связанный набор</div>

        <div class="sd-parent-card-name">{{ details?.title }}</div>
      </div>

      <svg
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>

    <template v-if="isPersonal">
      <div id="sp-sd-personal-arts" class="sd-section-card">
        <div class="sd-section-header">
          <div class="sd-section-title">
            Статьи

            <span v-if="myArticles.length" class="sd-section-count">
              {{ myArticles.length }}
            </span>
          </div>
          <button class="sd-btn-sm">
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
              <path d="M12 5v14M5 12h14" />
            </svg>

            Написать
          </button>
        </div>

        <div v-if="myArticles.length === 0" class="sd-notes-empty">
          <div class="sd-notes-empty-text">
            Нет прикреплённых статей. Напишите статью или прикрепите из ленты.
          </div>
        </div>

        <div v-else class="sd-articles-list">
          <div
            v-for="article in myArticles"
            :key="article.id"
            class="sd-article-card"
          >
            <div class="sd-art-avatar" :style="{ background: '#8B7B6B' }">
              {{ article.author.initials }}
            </div>

            <div class="sd-art-body">
              <div class="sd-art-meta-row">
                <span class="sd-art-author">
                  {{ article.author.displayName }}
                </span>
              </div>

              <div class="sd-art-title">{{ article.title }}</div>
            </div>

            <svg
              class="sd-article-arr"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>

      <SetNotesCard />
    </template>

    <SetArticlesCard v-else />
  </main>
</template>
