<script setup lang="ts">
import { formatDate } from '~/utils/formatDate'
import type { CustomSet } from '~/types'

import AppLikeButton from '~/components/ui/AppLikeButton.vue'
import AppDislikeButton from '~/components/ui/AppDislikeButton.vue'

type CatalogSetCardProps = {
  item: CustomSet
}

const props = defineProps<CatalogSetCardProps>()

const router = useRouter()

const { isReactedAsLike, isReactedAsDislike, onToggleDislike, onToggleLike } =
  useItemReaction(props.item.id, 'set')

const effectiveFullCost = computed(() => {
  return props.item.fullCost || props.item.monthly || props.item.amount
})

const categoryLabel = computed(() => {
  return props.item.categoryName
})

const isSmartSpend = computed(() => {
  return props.item.source === 'smartspend'
})

const authorColor = computed(() => {
  return isSmartSpend.value ? '#4E8268' : props.item.author?.color
})

const authorInitials = computed(() => {
  return isSmartSpend.value ? 'SS' : props.item.author?.initials
})

const authorName = computed(() => {
  return isSmartSpend.value ? 'SmartSpend' : props.item.author?.displayName
})

const onOpenDetails = () => {
  router.push(`/sets/${props.item.id}`)
}
</script>

<template>
  <div class="catalog-card" @click="onOpenDetails">
    <div class="card-body">
      <div class="card-title">{{ item.title }}</div>
      <div class="card-desc">{{ item.description }}</div>
    </div>

    <div class="card-cost-row">
      <div class="card-cost-item card-cost-monthly">
        <div class="card-cost-val">
          {{ (item.monthly || item.amount).toLocaleString('ru') }} ₽
        </div>

        <div class="card-cost-lbl">в месяц</div>
      </div>

      <div class="card-cost-sep" />

      <div class="card-cost-item">
        <div class="card-cost-val">{{ item.period || '—' }}</div>
        <div class="card-cost-lbl">период</div>
      </div>

      <div class="card-cost-sep" />

      <div class="card-cost-item">
        <div class="card-cost-val">
          {{ effectiveFullCost.toLocaleString('ru') }} ₽
        </div>

        <div class="card-cost-lbl">общая стоимость</div>
      </div>

      <div class="card-cost-sep" />

      <div class="card-cost-item">
        <div class="card-cost-val">
          <span
            v-if="item.isPrivate"
            :style="{ display: 'flex', alignItems: 'center', gap: '3px' }"
          >
            <svg
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Приватный
          </span>

          <span v-else>{{ item.usersCount }}</span>
        </div>

        <div class="card-cost-lbl">подписчиков</div>
      </div>
    </div>

    <div class="card-bottom">
      <div class="card-bottom-author">
        <button class="author-chip">
          <span
            class="author-avatar-sm"
            :style="{
              background: authorColor,
              fontSize: '9px',
              fontWeight: 700
            }"
          >
            {{ authorInitials }}
          </span>

          <span class="author-chip-meta">
            <span class="author-name-inline">
              {{ authorName }}
            </span>

            <span class="author-chip-date">
              {{ formatDate(item.createdAt, 'PP') }}
            </span>
          </span>
        </button>
      </div>

      <div class="fa-meta-actions">
        <AppLikeButton
          :count="item.likesCount"
          :is-liked="isReactedAsLike"
          @toggle="onToggleLike"
        />

        <AppDislikeButton
          :is-disliked="isReactedAsDislike"
          @toggle="onToggleDislike"
        />

        <button class="fa-action-stat fa-action-stat--btn">
          <svg
            width="15"
            height="15"
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

          {{ item.commentsCount }}
        </button>

        <!--    Bookmark button   -->
      </div>

      <div class="fa-meta-right">
        <button class="fa-category">
          {{ categoryLabel }}
        </button>
      </div>
    </div>
  </div>
</template>
