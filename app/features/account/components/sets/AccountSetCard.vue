<script setup lang="ts">
import { useItemReaction } from '~/composables/useItemReaction'

import type { CustomSet } from '~/types'

import AppLikeButton from '~/components/ui/AppLikeButton.vue'
import AppDislikeButton from '~/components/ui/AppDislikeButton.vue'

type AccountSetCardProps = {
  item: CustomSet
}

const props = defineProps<AccountSetCardProps>()

const { onToggleLike, onToggleDislike, isReactedAsLike, isReactedAsDislike } =
  useItemReaction(props.item.id.toString(), 'set')

const visibilityLabel = computed(() => {
  console.log(props.item)
  return props.item.isPrivate ? 'Личный' : 'Публичный'
})

const categoryLabel = computed(() => {
  return props.item.categoryName
})

const items = computed(() => {
  return props.item.items.length > 4
    ? props.item.items.slice(0, 4)
    : props.item.items
})

const monthly = computed(() => {
  return (
    props.item.amount ||
    props.item.items.reduce((sum, it) => {
      if (it.itemType === 'consumable' && it.basePrice && it.qty && it.dailyUse)
        return sum + (it.basePrice / it.qty) * it.dailyUse * 30
      if (it.itemType === 'wear' && it.basePrice && it.wearLifeWeeks)
        return sum + (it.basePrice / it.wearLifeWeeks) * 4.33
      return sum
    }, 0)
  )
})

const totalCost = computed(() => {
  return props.item.items.reduce(
    (sum, it) => sum + (Number(it.basePrice) || 0),
    0
  )
})
</script>

<template>
  <div class="catalog-card" :style="{ cursor: 'pointer' }">
    <div class="card-body">
      <div class="card-badges">
        <span v-if="categoryLabel" class="card-item-tag">
          {{ categoryLabel }}
        </span>

        <span
          :class="`visibility-badge ${item.isPrivate ? 'private' : 'public'}`"
          :style="{ fontSize: '9px' }"
        >
          {{ visibilityLabel }}
        </span>
      </div>

      <div>
        <div class="card-title">{{ item.title }}</div>

        <div v-if="item.description" class="card-desc">
          {{ item.description }}
        </div>
      </div>

      <div v-if="item.items.length" class="card-items">
        <span v-for="i in items" :key="i.name" class="card-item-tag">
          {{ i.name }}
        </span>

        <span v-if="item.items.length > 4" class="card-item-more">
          +{{ item.items.length - 4 }}
        </span>
      </div>
    </div>

    <div v-if="item.items.length" class="card-cost-row">
      <div v-if="monthly > 0" class="card-cost-item card-cost-monthly">
        <div class="card-cost-val">
          {{ Math.round(monthly).toLocaleString('ru') }} ₽
        </div>
        <div class="card-cost-lbl">в месяц</div>
      </div>

      <div class="card-cost-sep" />

      <div class="card-cost-item">
        <div class="card-cost-val">{{ item.items.length }}</div>
        <div class="card-cost-lbl">позиций</div>
      </div>

      <div class="card-cost-sep" />

      <div class="card-cost-item">
        <div class="card-cost-val">{{ totalCost.toLocaleString('ru') }} ₽</div>
        <div class="card-cost-lbl">общая стоимость</div>
      </div>

      <template v-if="!item.isPrivate">
        <div class="card-cost-sep" />

        <div class="card-cost-item">
          <div class="card-cost-val">
            {{ (item.usersCount || 0).toLocaleString('ru') }}
          </div>

          <div class="card-cost-lbl">подписчиков</div>
        </div>
      </template>
    </div>

    <div class="card-bottom">
      <template v-if="!item.isPrivate">
        <AppLikeButton
          :count="item.likesCount"
          :is-liked="isReactedAsLike"
          @toggle="onToggleLike"
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

          {{ item.commentsCount > 0 ? item.commentsCount : '' }}
        </button>

        <AppDislikeButton
          :is-disliked="isReactedAsDislike"
          @toggle="onToggleDislike"
        />
      </template>

      <div class="f-spacer" />

      <button class="acc-btn-edit">
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

      <button class="acc-btn-visibility acc-btn-delete-gray">Удалить</button>
    </div>
  </div>
</template>
