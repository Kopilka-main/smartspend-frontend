<script setup lang="ts">
import { formatSource } from '~/features/sets/utils/formatSource'

type ProfileSetCategoryCardProps = {
  group: any
}

const props = defineProps<ProfileSetCategoryCardProps>()

const router = useRouter()

const groupAmount = computed(() => {
  let result = 0

  props.group.items.forEach((item: any) => {
    result += item.amount
  })

  return result
})

const onViewSet = (setId: string) => {
  router.push(`/sets/${setId}`)
}
</script>

<template>
  <div class="w-full">
    <div
      class="rounded-t-16 overflow-hidden shadow-main bg-surface flex px-18 pt-16 pb-16 w-full items-center flex-row"
    >
      <div class="flex flex-col items-start">
        <h3 class="text-14 font-semibold text-text tracking-[-0.01em]">
          {{ group.title }}
        </h3>

        <p class="text-12 text-text-3">
          {{ group.items.length }} набор · пополняется 1-го числа
        </p>
      </div>

      <div class="ml-auto">
        <h2 class="text-16 font-semibold text-text tracking-[-0.01em]">
          {{ groupAmount }} ₽
        </h2>
        <p class="text-12 text-text-3">/ месяц</p>
      </div>
    </div>

    <div
      class="flex flex-wrap gap-12 border-t border-border px-18 py-18 bg-surface-2 rounded-b-16 overflow-hidden shadow-main"
    >
      <div
        v-for="item in group.items"
        :key="item.id"
        class="cursor-pointer shadow-main w-186 bg-surface rounded-16"
        @click="onViewSet(item.setId)"
      >
        <div />

        <div class="px-16 py-16">
          <div class="mb-4">
            <h3
              class="uppercase text-10 font-semibold tracking-[0.04em] text-accent-green"
            >
              {{ formatSource(item.source) }}
            </h3>
          </div>

          <h3 class="text-12 font-semibold text-text mb-12">
            {{ item.name }}
          </h3>

          <div class="flex flex-col items-start gap-6">
            <span
              class="flex items-center gap-2 text-11 text-text-3 bg-surface-2 border border-border rounded-5 px-7 py-2"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 000 4h6a2 2 0 000-4M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>

              {{ item.itemsCount }} поз.
            </span>

            <span
              class="flex items-center gap-2 text-11 text-text-3 bg-surface-2 border border-border rounded-5 px-7 py-2"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>

              амортизация
            </span>
          </div>
        </div>

        <div class="flex flex-row px-16 py-16 border-t border-border">
          <h3 class="text-14 font-semibold text-text">{{ item.amount }} ₽</h3>

          <p class="ml-auto text-12 text-text-3">/ мес</p>
        </div>
      </div>
    </div>
  </div>
</template>
