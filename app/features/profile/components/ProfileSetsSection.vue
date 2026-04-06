<script setup lang="ts">
import { useEnvelopes } from '~/features/sets/queries/useEnvelopes'
import { useSetCategories } from '~/queries/useSetCategories'

import ProfileSetsEmpty from '~/features/profile/components/ProfileSetsEmpty.vue'
import ProfileSetCategoryCard from '~/features/profile/components/ProfileSetCategoryCard.vue'

const { data: envelopesData, isLoading } = useEnvelopes()
const { data: categoriesData } = useSetCategories()

const envelopes = computed(() => {
  return envelopesData.value ? envelopesData.value.data : []
})

const categories = computed(() => {
  return categoriesData.value ? categoriesData.value.data : []
})

const groups = computed(() => {
  const result: any[] = []

  categories.value.forEach((category) => {
    const items = envelopes.value.filter(
      (item) => item.categoryId === category.id
    )

    if (items.length) {
      result.push({
        id: category.id,
        title: category.name,
        items: envelopes.value.filter((item) => item.categoryId === category.id)
      })
    }
  })

  return result
})

const totalAmount = computed(() => {
  let result = 0

  envelopes.value.forEach((item) => {
    result += item.amount
  })

  return result
})
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex items-baseline justify-between gap-16">
      <span class="text-14 font-semibold text-text-2 tracking-[-0.01em]">
        Конверты и наборы
      </span>

      <button
        type="button"
        id="sp-btn-envelopes"
        class="flex items-center gap-5 text-12 font-medium text-text-2 bg-surface-2 border border-border rounded-20 px-12 py-5 cursor-pointer tracking-[-0.01em] transition-all duration-150 hover:text-text hover:bg-surface-3 hover:border-text-3"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path
            d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
          ></path>
        </svg>

        Редактировать
      </button>

      <button
        v-if="false"
        type="button"
        class="flex items-center gap-5 text-12 py-5 font-medium bg-accent-green-ulight border border-accent-green-border text-accent-green rounded-20 px-12 tracking-[-0.01em] hover:text-surface hover:bg-accent-green"
      >
        <svg
          class="w-11 h-11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>

        Готово
      </button>
    </div>

    <div class="flex flex-col gap-12">
      <div v-if="groups.length > 0 && !isLoading" class="flex flex-col gap-16">
        <ProfileSetCategoryCard
          v-for="group in groups"
          :key="group.id"
          :group="group"
        />
      </div>

      <ProfileSetsEmpty v-else />

      <div
        class="mt-10 flex items-center justify-between px-20 py-16 bg-accent-green-light border border-accent-green-border rounded-16 shadow-main"
      >
        <span class="text-14 font-semibold text-text tracking-[-0.01em]">
          Итого в конвертах
        </span>

        <span class="font-secondary text-15 font-medium text-accent-green">
          {{ totalAmount }} ₽

          <span
            class="font-primary text-11 font-normal text-accent-green-slight"
          >
            / месяц
          </span>
        </span>
      </div>
    </div>

    <!-- Content edited -->
    <!--    <div class="bg-surface rounded-16 shadow-main overflow-hidden">-->
    <!--      <div class="px-20 py-18 flex items-center gap-14">-->
    <!--        <div class="w-3 h-38 rounded-2 shrink-0 bg-[#b0a898]"></div>-->

    <!--        <div class="flex-1 min-w-0">-->
    <!--          <div class="text-15 font-semibold tracking-[-0.02em] text-text">-->
    <!--            Прочие расходы-->
    <!--          </div>-->
    <!--          <div class="mt-2 text-12 text-text-3">Нет наборов</div>-->
    <!--        </div>-->

    <!--        <div class="text-right shrink-0">-->
    <!--          <button-->
    <!--            type="button"-->
    <!--            class="hover:opacity-50 font-secondary text-20 font-medium tracking-[-0.02em] text-text"-->
    <!--          >-->
    <!--            —-->
    <!--          </button>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="px-18 py-14 border-t border-border bg-surface-2">-->
    <!--        <div-->
    <!--          class="flex items-start gap-8 px-14 pt-10 pb-8 text-12 text-text-3 leading-normal"-->
    <!--        >-->
    <!--          <svg-->
    <!--            width="13"-->
    <!--            height="13"-->
    <!--            viewBox="0 0 24 24"-->
    <!--            fill="none"-->
    <!--            stroke="currentColor"-->
    <!--            stroke-width="2"-->
    <!--            stroke-linecap="round"-->
    <!--            stroke-linejoin="round"-->
    <!--            class="shrink-0 mt-1 opacity-50"-->
    <!--            aria-hidden="true"-->
    <!--          >-->
    <!--            <polyline points="20 12 20 22 4 22 4 12"></polyline>-->
    <!--            <rect x="2" y="7" width="20" height="5"></rect>-->
    <!--            <path-->
    <!--              d="M12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"-->
    <!--            ></path>-->
    <!--          </svg>-->
    <!--          <span>-->
    <!--            Например,-->
    <!--            <strong class="text-text-2 font-semibold">«Подарки близким»</strong>-->
    <!--            — незапланированные праздничные траты часто ломают бюджет-->
    <!--          </span>-->
    <!--        </div>-->

    <!--        <button-->
    <!--          type="button"-->
    <!--          class="w-full flex items-center gap-10 px-20 py-16 border-1.5 border-dashed border-border border-1 rounded-12 bg-transparent text-13 font-medium text-text-3 cursor-pointer transition-all duration-150 hover:border-[#8DBFA8] hover:bg-accent-green-light hover:text-accent-green"-->
    <!--        >-->
    <!--          <svg-->
    <!--            width="16"-->
    <!--            height="16"-->
    <!--            viewBox="0 0 24 24"-->
    <!--            fill="none"-->
    <!--            stroke="currentColor"-->
    <!--            stroke-width="2"-->
    <!--            stroke-linecap="round"-->
    <!--            stroke-linejoin="round"-->
    <!--            aria-hidden="true"-->
    <!--          >-->
    <!--            <path d="M12 5v14M5 12h14"></path>-->
    <!--          </svg>-->
    <!--          Добавить первый набор в этот конверт-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
