<script setup lang="ts">
import { formatDate } from '~/utils/formatDate'
import { formatSource } from '~/features/sets/utils/formatSource'
import type { CustomSet } from '~/types'
import { formatType } from '~/features/sets/utils/formatType'

type CatalogSetCardProps = {
  item: CustomSet
}

const props = defineProps<CatalogSetCardProps>()

const router = useRouter()

const sourceLabel = computed(() => {
  return formatSource(props.item.source)
})

const typeLabel = computed(() => {
  return formatType(props.item.setType)
})

const items = computed(() => {
  return props.item.itemNames.slice(0, 4)
})

const additionalItemsCount = computed(() => {
  return props.item.itemNames.length > 4 ? props.item.itemNames.length - 4 : 0
})

const effectiveFullCost = computed(() => {
  return props.item.amount
})

const categoryLabel = computed(() => {
  return 'Все'
})

const authorChipComponent = computed(() => {
  if (props.item.source === 'smartspend') {
    return null // SmartSpendChip
  } else {
    return null // AuthorChip
  }
})

const onOpenDetails = () => {
  router.push(`/sets/${props.item.id}`)
}
</script>

<template>
  <div class="catalog-card">
    <div class="card-body">
      <div class="card-title">{{ item.title }}</div>
      <div class="card-desc">{{ item.description }}</div>
    </div>

    <div class="card-cost-row">
      <div class="card-cost-item card-cost-monthly">
        <div class="card-cost-val">
          {{ item.amount.toLocaleString('ru') }} ₽
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

          <span v-else>{{ 0 }}</span>
        </div>

        <div class="card-cost-lbl">подписчиков</div>
      </div>
    </div>

    <div class="card-bottom">
      <div class="card-bottom-author">
        <component :is="authorChipComponent" />
      </div>

      <div class="fa-meta-actions">
        <!--    Like button   -->
        <!--    Dislike button   -->

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
          10
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
