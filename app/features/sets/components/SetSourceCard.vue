<script setup lang="ts">
import { formatSource } from '~/features/sets/utils/formatSource'
import type { CustomSetDetails } from '~/types'

type SetSourceCardProps = {
  item: CustomSetDetails | null
}

const props = defineProps<SetSourceCardProps>()

const router = useRouter()

const initials = computed(() => {
  if (props.item?.source === 'smartspend') {
    return 'SS'
  }

  if (props.item?.source === 'community') {
    return 'СС'
  }

  return 'МН'
})

const title = computed(() => {
  return formatSource(props.item?.source as string)
})

const subTitle = computed(() => {
  if (props.item?.source === 'smartspend') {
    return 'Официальный набор от команды SmartSpend'
  }

  if (props.item?.source === 'community') {
    return 'Набор от сообщества пользователей SmartSpend'
  }

  return 'Персональный набор'
})

const onShowAllSets = () => {
  router.push(`/catalog?source=${props.item?.source}`)
}
</script>

<template>
  <div class="rounded-16 bg-surface px-28 py-24 shadow-main">
    <div class="flex cursor-pointer items-center gap-14">
      <div
        class="flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(125,175,146),rgb(184,160,200))] text-13 font-bold tracking-[0.02em] text-white"
      >
        {{ initials }}
      </div>

      <div class="min-w-0 flex-1">
        <div class="text-14 font-semibold tracking-[-0.02em] text-text">
          {{ title }}
        </div>

        <div class="mt-3 text-12 tracking-[-0.01em] text-text-3">
          {{ subTitle }}
        </div>
      </div>

      <button
        type="button"
        class="inline-flex shrink-0 cursor-pointer items-center gap-4 whitespace-nowrap rounded-8 border border-accent-green-border bg-accent-green-light px-12 py-6 text-12 font-medium text-accent-green transition-opacity hover:opacity-80"
        @click="onShowAllSets"
      >
        Все наборы

        <svg
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="shrink-0"
        >
          <path d="M9 18l6-6-6-6"></path>
        </svg>
      </button>
    </div>

    <div class="my-18 h-px bg-border" aria-hidden="true"></div>

    <div
      class="mb-10 text-10 font-semibold uppercase tracking-[0.06em] text-text-3"
    >
      О наборе
    </div>

    <div class="mb-12 text-17 font-bold tracking-[-0.02em] text-text">
      {{ item?.aboutTitle }}
    </div>

    <div
      class="text-13 leading-[1.7] tracking-[-0.01em] text-text-2 [&_p+p]:mt-10"
    >
      <p>
        {{ item?.aboutText }}
      </p>
    </div>
  </div>
</template>
