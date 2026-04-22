<script setup lang="ts">
import { useSet } from '~/features/sets/composables/useSet'

import AppLikeButton from '~/components/ui/AppLikeButton.vue'
import SetItemsTable from '~/features/sets/components/set-items-table/SetItemsTable.vue'
import AppDislikeButton from '~/components/ui/AppDislikeButton.vue'
import SetAuthorChip from '~/features/sets/components/SetAuthorChip.vue'
import SetAddInventory from '~/features/sets/components/SetAddInventory.vue'

const route = useRoute()

const { set, title, isPersonal } = useSet(route.params.id as string)

const isEditMode = ref(false)
const scale = ref(1.0)
const isAboutVisible = ref(false)
const isPaused = ref(false)
const allArticles = ref([])

const { isReactedAsDislike, isReactedAsLike, onToggleDislike, onToggleLike } =
  useItemReaction(route.params.id as string, 'set')

const color = computed(() => {
  return set.value?.color || '#4E8268'
})

const isSmartSpend = computed(() => {
  return set.value?.source === 'smartspend'
})

const isDefault = computed(() => {
  return true
})
</script>

<template>
  <div id="sp-sd-hero" class="hero-card">
    <div class="hero-body">
      <div class="hero-body-main">
        <div class="hero-title">{{ title }}</div>
        <div class="hero-desc">{{ set?.description }}</div>
      </div>

      <div v-if="!isPersonal" class="hero-body-actions">
        <SetAddInventory />
      </div>
    </div>

    <div id="sp-sd-items" class="sd-section-header">
      <div class="sd-section-title">
        Состав набора

        <span class="sd-section-count"> {{ set?.items.length }} позиций </span>
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

    <SetItemsTable :scale="scale" />

    <div class="sd-about-wrap">
      <div
        :class="`content-body sd-about-body${isAboutVisible ? '' : ' sd-about-collapsed'}`"
      >
        <h2>{{ set?.aboutTitle }}</h2>

        <p>{{ set?.aboutText }}</p>
      </div>
    </div>

    <div class="art-meta-row">
      <SetAuthorChip
        :name="`${isSmartSpend ? 'SmartSpend' : set?.author?.displayName}`"
        :initials="`${isSmartSpend ? 'SS' : set?.author?.initials}`"
        :date="set?.createdAt as Date"
        :color="`linear-gradient(135deg, ${color}, #B8A0C8)`"
      />

      <div v-if="!isPersonal && set?.author" class="art-meta-sep" />

      <div v-if="isPersonal" class="sd-personal-actions">
        <button :class="`sd-personal-state${isPaused ? ' paused' : ''}`">
          <template v-if="isPaused">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>

            Запустить
          </template>

          <template v-else>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
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

      <template v-if="!isPersonal && set?.usersCount">
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

          {{ set?.usersCount || 0 }}
        </div>
      </template>

      <AppLikeButton
        v-if="!isPersonal"
        :count="set?.likesCount || 0"
        :is-liked="isReactedAsLike"
        @toggle="onToggleLike"
      />

      <div
        v-if="!isPersonal && set?.commentsCount"
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

        {{ set?.commentsCount || 0 }}
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
</template>
