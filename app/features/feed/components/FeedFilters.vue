<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useSetCategories } from '~/queries/useSetCategories'

const { data } = useSetCategories()

const categories = computed(() => {
  return data.value
    ? [{ id: 'all', name: 'Все' }, ...data.value.data]
    : [{ id: 'all', name: 'Все' }]
})

const categoryModel = defineModel<string>('category', { default: 'all' })

const dropdownRef = useTemplateRef('dropdownRef')
const isSortDropdownVisible = ref(false)

onClickOutside(dropdownRef, () => {
  isSortDropdownVisible.value = false
})

const sortModel = defineModel<string>('sort', { default: 'popular_all' })

const sortLabel = computed(() => {
  switch (sortModel.value) {
    case 'popular_all':
      return 'За все время'
    case 'newest':
      return 'Сначала новые'
    case 'popular_7d':
      return 'За 7 дней'
    case 'popular_30d':
      return 'За месяц'
    default:
      return ''
  }
})

watch(
  () => sortModel.value,
  () => {
    isSortDropdownVisible.value = false
  }
)

const articleTypeModel = defineModel<string>('articleType', { default: 'all' })

const modeModel = defineModel<string>('mode', { default: 'unread' })
</script>

<template>
  <div
    class="sticky border-b-1 px-16 900:px-32 -mx-16 900:-mx-32 border-border pb-12 top-12 z-20"
  >
    <div class="">
      <div class="flex flex-wrap items-center gap-8 pb-2">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          class="h-30 rounded-full border border-border bg-surface px-12 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
          :class="{
            'border-text! bg-text! text-surface!': categoryModel === category.id
          }"
          @click="categoryModel = category.id"
        >
          {{ category.name }}
        </button>
      </div>

      <div class="mt-10 flex flex-wrap items-center gap-8">
        <div class="inline-flex rounded-8 border border-border bg-surface p-3">
          <button
            type="button"
            class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
            :class="{
              'bg-surface-2! border-border! text-text! shadow-app-sm!':
                articleTypeModel === 'all'
            }"
            @click="articleTypeModel = 'all'"
          >
            Все
          </button>

          <button
            type="button"
            class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
            :class="{
              'bg-surface-2! border-border! text-text shadow-app-sm!':
                articleTypeModel === 'articles'
            }"
            @click="articleTypeModel = 'articles'"
          >
            Статьи
          </button>

          <button
            type="button"
            class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
            :class="{
              'bg-surface-2! border-border! text-text shadow-app-sm!':
                articleTypeModel === 'coupons'
            }"
            @click="articleTypeModel = 'coupons'"
          >
            Купоны
          </button>
        </div>

        <div class="flex-1"></div>

        <div
          class="relative z-10 flex justify-between mr-0 w-full md:w-max items-center gap-8"
        >
          <span class="text-12 text-text-3">Сортировка:</span>

          <button
            type="button"
            class="inline-flex h-28 items-center gap-6 rounded-8 border border-border bg-surface px-10 text-12 text-text-2 hover:text-text hover:bg-surface-2"
            @click="isSortDropdownVisible = !isSortDropdownVisible"
          >
            <span class="font-medium">
              {{ sortLabel }}
            </span>

            <svg
              class="shrink-0"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <div
            v-if="isSortDropdownVisible"
            ref="dropdownRef"
            class="absolute feed-sort-dropdown-panel rounded-10 border border-border bg-surface p-8 shadow-app-md"
          >
            <div>
              <div
                class="px-8 pb-6 text-10 uppercase tracking-[0.03em] text-text-3"
              >
                Новизна
              </div>

              <div
                class="flex items-center cursor-pointer justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                :class="{
                  'bg-accent-green-light! text-accent-green!':
                    sortModel === 'newest'
                }"
                @click="sortModel = 'newest'"
              >
                <span>Сначала новые</span>
              </div>
            </div>

            <div class="my-8 h-1 bg-border"></div>

            <div>
              <div
                class="px-8 pb-6 text-10 uppercase tracking-[0.03em] text-text-3"
              >
                По популярности
              </div>

              <div
                class="flex cursor-pointer items-center justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                :class="{
                  'bg-accent-green-light! text-accent-green!':
                    sortModel === 'popular_7d'
                }"
                @click="sortModel = 'popular_7d'"
              >
                <span>За 7 дней</span>
              </div>

              <div
                class="mt-2 flex cursor-pointer items-center justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                :class="{
                  'bg-accent-green-light! text-accent-green!':
                    sortModel === 'popular_30d'
                }"
                @click="sortModel = 'popular_30d'"
              >
                <span>За месяц</span>
              </div>

              <div
                class="mt-2 flex items-center cursor-pointer justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
                :class="{
                  'bg-accent-green-light! text-accent-green!':
                    sortModel === 'popular_all'
                }"
                @click="sortModel = 'popular_all'"
              >
                <span>За всё время</span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="sm:hidden z-9 relative flex justify-between mr-0 w-full md:w-max items-center gap-8"
        >
          <span class="text-12 text-text-3">Фильтры:</span>
          <button
            type="button"
            class="inline-flex h-28 items-center gap-6 rounded-8 border border-border bg-surface px-10 text-12 text-text-2 hover:text-text hover:bg-surface-2"
          >
            <span class="font-medium">За 7 дней</span>
            <svg
              class="shrink-0"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <div
            class="absolute feed-sort-dropdown-panel rounded-10 border border-border bg-surface p-8 shadow-app-md"
          >
            <div>
              <div
                class="flex items-center justify-between rounded-7 bg-accent-green-light px-8 py-6 text-12 font-medium text-accent-green"
              >
                <span>За 7 дней</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div
                class="mt-2 flex items-center justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
              >
                <span>За месяц</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="opacity-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div
                class="mt-2 flex items-center justify-between rounded-7 px-8 py-6 text-12 text-text-2 hover:bg-surface-2 hover:text-text"
              >
                <span>За всё время</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="opacity-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <div
          class="hidden sm:inline-flex rounded-8 border border-border bg-surface p-3"
        >
          <button
            type="button"
            class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
            :class="{
              'bg-surface-2! border-border! text-text! shadow-app-sm!':
                modeModel === 'unread'
            }"
            @click="modeModel = 'unread'"
          >
            Непрочитанное
          </button>

          <button
            type="button"
            class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
            :class="{
              'bg-surface-2! border-border! text-text! shadow-app-sm!':
                modeModel === 'subscriptions'
            }"
            @click="modeModel = 'subscriptions'"
          >
            Подписки
          </button>

          <button
            type="button"
            class="rounded-6 px-10 py-4 border-1 font-medium border-transparent text-12 text-text-2 hover:text-text"
            :class="{
              'bg-surface-2! border-border! text-text! shadow-app-sm!':
                modeModel === 'my_sets'
            }"
            @click="modeModel = 'my_sets'"
          >
            Мои наборы
          </button>

          <button
            type="button"
            class="rounded-6 px-10 py-5 text-12 text-text-2 hover:text-text"
            :class="{
              'bg-surface-2! border-border! text-text! shadow-app-sm!':
                modeModel === 'liked'
            }"
            @click="modeModel = 'liked'"
          >
            Понравившиеся
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
