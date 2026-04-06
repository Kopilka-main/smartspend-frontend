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

const onOpenDetails = () => {
  router.push(`/sets/${props.item.id}`)
}
</script>

<template>
  <div
    class="catalog-card bg-surface rounded-14 shadow-main overflow-hidden cursor-pointer transition-[box-shadow,transform] duration-150 hover:shadow-app-md hover:-translate-y-1 flex flex-col"
    @click="onOpenDetails"
  >
    <div
      class="card-accent-bar h-3 shrink-0"
      style="background: rgb(104, 136, 112)"
    />

    <div class="card-body pt-16 px-18 pb-14 flex flex-col gap-10 flex-1">
      <div class="card-badges flex flex-wrap items-center gap-5">
        <span
          class="text-10 font-semibold tracking-[0.04em] bg-accent-green-light text-accent-green uppercase px-7 py-2 rounded-5"
        >
          {{ sourceLabel }}
        </span>

        <span
          class="text-10 font-semibold tracking-[0.03em] px-7 py-2 rounded-5 bg-accent-green-light text-accent-green border border-accent-green-border"
        >
          {{ typeLabel }}
        </span>
      </div>

      <div class="flex flex-col gap-2">
        <div
          class="card-title text-15 font-bold tracking-[-0.02em] leading-[1.2]"
        >
          {{ item.title }}
        </div>

        <div class="card-desc text-12 text-text-2 leading-[1.45] mt-2">
          {{ item.description }}
        </div>
      </div>

      <div class="card-items mt-2 flex flex-wrap gap-4">
        <span
          v-for="name in items"
          :key="name"
          class="card-item-tag text-11 text-text-3 bg-surface-2 border border-border rounded-5 px-7 py-2"
        >
          {{ name }}
        </span>

        <span
          v-if="additionalItemsCount"
          class="card-item-more text-11 text-text-3 px-4 py-2"
        >
          +{{ additionalItemsCount }}
        </span>
      </div>
    </div>

    <div
      class="card-footer border-t border-border px-18 py-11 flex items-center justify-between gap-8"
    >
      <div class="card-amount-left flex flex-col gap-1">
        <div
          class="card-amount font-secondary text-16 font-medium tracking-[-0.02em] leading-none"
        >
          {{ item.amount }} ₽
        </div>

        <div class="card-amount-label text-10 text-text-3 mt-2">
          {{ item.amountLabel }}
        </div>
      </div>

      <div class="card-meta-right flex flex-col items-end gap-3">
        <div
          v-if="item.isPrivate"
          class="private-label flex items-center gap-4 text-11 text-text-3 font-secondary"
        >
          <svg
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="opacity-40"
          >
            <rect x="3" y="11" width="18" height="11" rx="2"></rect>
            <path d="M7 11V7a5 5 0 0110 0v4"></path>
          </svg>
          Приватный
        </div>

        <div class="card-date text-10 text-text-3 font-secondary">
          {{ formatDate(item.createdAt, 'PPP') }}
        </div>
      </div>
    </div>
  </div>
</template>
