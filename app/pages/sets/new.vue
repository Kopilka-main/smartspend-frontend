<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'

import { useCreateSet } from '~/features/new-set/queries/useCreateSet'
import type { SetItem } from '~/types'

import NewSetViewModificatorSelect from '~/features/new-set/components/NewSetViewModificatorSelect.vue'
import NewSetCategoriesSelect from '~/features/new-set/components/NewSetCategoriesSelect.vue'
import NewSetItemForm from '~/features/new-set/components/NewSetItemForm.vue'
import NewSetItem from '~/features/new-set/components/NewSetItem.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Создать набор'
})

const { defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    v.object({
      title: v.pipe(v.string()),
      description: v.pipe(v.string()),
      aboutText: v.pipe(v.string())
    })
  )
})

const [title, titleProps] = defineField('title')
const [description, descriptionProps] = defineField('description')
const [aboutText, aboutTextProps] = defineField('aboutText')

const router = useRouter()
const { mutate, isLoading } = useCreateSet(() => router.push('/catalog'))

const selectedCategory = ref('')
const isPrivate = ref(false)
const items = ref<SetItem[]>([])

const isNewItemAdding = ref(false)

const submitLabel = computed(() => {
  return isPrivate.value ? 'Сохранить' : 'Опубликовать'
})

const onAddNewSetItem = (newItem: any) => {
  items.value.push(newItem)
  isNewItemAdding.value = false
}

const onRemoveItem = (itemName: string) => {
  items.value = items.value.filter((item) => item.name !== itemName)
}

const onSubmit = handleSubmit((values) => {
  mutate({
    title: values.title,
    description: values.description,
    aboutText: values.aboutText,
    items: items.value,
    categoryId: selectedCategory.value,
    isPrivate: isPrivate.value
  })
})
</script>

<template>
  <main class="min-w-0 w-full max-w-720 mx-auto">
    <div
      class="900:fixed mt-58 md:mt-0 top-0 left-[24rem] w-auto right-0 z-200"
    >
      <div
        class="flex flex-col md:flex-row shrink-0 flex-wrap sm:items-center gap-8 border-b border-border bg-surface py-10 px-20"
      >
        <div
          class="flex flex-1 flex-wrap items-center gap-4 rounded-8 bg-surface-2 p-4"
        >
          <span
            class="flex flex-1 items-center gap-8 text-15 font-semibold tracking-[-0.01em] text-text"
          >
            Создать набор
            <button
              type="button"
              class="inline-flex h-22 w-22 shrink-0 cursor-pointer items-center justify-center rounded-full border-[0.15rem] border-border bg-surface-2 font-secondary text-12 font-bold leading-none text-text-3 transition-colors hover:border-accent-green hover:bg-accent-green-light hover:text-accent-green"
              title="Как устроена страница"
            >
              ?
            </button>
          </span>
        </div>
        <div class="flex shrink-0 flex-wrap sm:flex-row sm:items-center gap-6">
          <button
            type="button"
            class="inline-flex h-30 w-1/2 sm:w-auto cursor-pointer items-center gap-5 rounded-7 border border-border bg-surface-2 px-12 text-12 font-medium text-text-2 transition-all duration-150 hover:bg-surface-3 hover:text-text"
          >
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
              aria-hidden="true"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Предпросмотр
          </button>

          <button
            type="button"
            :disabled="isLoading"
            class="rounded-10 border-0 bg-accent-green w-1/2 sm:w-auto px-10 py-6 sm:px-24 sm:py-11 text-14 font-medium tracking-[-0.01em] text-white transition-opacity duration-150 hover:opacity-[0.88]"
            @click="onSubmit"
          >
            {{ submitLabel }}
          </button>
        </div>
      </div>
    </div>

    <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
      <div class="grid grid-cols-1 pt-64 gap-14">
        <NewSetCategoriesSelect v-model="selectedCategory" />

        <NewSetViewModificatorSelect v-model="isPrivate" />

        <!-- Post areas -->
        <div
          class="py-20 grid grid-cols-1 gap-10 border-t-1 border-border border-b-1"
        >
          <!-- Title -->
          <div
            class="rounded-14 border bg-surface-2 border-border overflow-hidden"
          >
            <div
              class="px-18 pt-12 pb-8 text-10 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
            >
              Название набора
            </div>

            <textarea
              v-model="title"
              v-bind="titleProps"
              class="w-full py-12 px-14 resize-none border-0 bg-surface text-28 font-bold leading-[1.2] tracking-[-0.03em] text-text outline-hidden placeholder:text-text-3"
              placeholder="Например: Базовый гардероб на лето"
              rows="1"
            />
          </div>

          <!-- Description -->
          <div
            class="rounded-14 border bg-surface-2 border-border overflow-hidden"
          >
            <div
              class="px-18 pt-12 pb-8 text-10 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
            >
              Краткое описание — видно в карточке
            </div>

            <textarea
              v-model="description"
              v-bind="descriptionProps"
              class="w-full py-12 px-14 resize-none border-0 bg-surface text-15 leading-[1.2] tracking-[-0.03em] text-text outline-hidden placeholder:text-text-3"
              placeholder="Одно-два предложения: для кого набор и что в нём..."
              rows="3"
            />
          </div>

          <!-- Positions -->
          <div
            class="rounded-14 border bg-surface-2 border-border overflow-hidden"
          >
            <div
              class="px-18 pt-12 pb-8 text-10 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
            >
              Позиции набора
            </div>
            <div class="bg-surface">
              <NewSetItem
                v-for="item in items"
                :key="item.name"
                :item="item"
                @remove="onRemoveItem"
              />

              <NewSetItemForm
                v-if="isNewItemAdding"
                @add="onAddNewSetItem"
                @cancel="isNewItemAdding = false"
              />

              <button
                v-else
                type="button"
                class="flex w-full cursor-pointer items-center gap-6 border-0 border-t border-border bg-transparent px-16 py-11 text-13 font-medium tracking-[-0.01em] text-accent-green transition-opacity hover:opacity-70"
                @click="isNewItemAdding = true"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="shrink-0"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Добавить позицию
              </button>
            </div>
          </div>

          <div
            class="rounded-14 border bg-surface-2 border-border overflow-hidden"
          >
            <div
              class="px-18 pt-12 pb-8 text-10 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
            >
              Подробное описание
            </div>

            <textarea
              v-model="aboutText"
              v-bind="aboutTextProps"
              class="w-full py-12 px-14 resize-none border-0 bg-surface text-15 leading-[1.2] tracking-[-0.03em] text-text outline-hidden placeholder:text-text-3"
              placeholder="Расскажите подробнее: принципы подбора, расчёт стоимости, для кого подойдёт..."
              rows="10"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
