<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'

import { useCreateSet } from '~/features/sets/queries/useCreateSet'

import type { SetItem } from '~/types'

import SetItemForm from '~/features/sets/components/new-set/SetItemForm.vue'
import SetItemRow from '~/features/sets/components/new-set/SetItemRow.vue'

import AppVisibilityToggle from '~/components/ui/AppVisibilityToggle.vue'
import AppCategoriesChips from '~/components/ui/AppCategoriesChips.vue'

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
const { mutate, isLoading } = useCreateSet(() => router.push('/account'))

const selectedCategory = ref('')
const isPrivate = ref(false)
const items = ref<SetItem[]>([])
const images = ref<string[]>([])

const isNewItemAdding = ref(false)

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

const titleLength = computed(() => {
  return title.value?.length || 0
})

const descriptionLength = computed(() => {
  return description.value?.length || 0
})

const totalPerMonth = computed(() => {
  return 0
})

const visibilityLabel = computed(() => {
  return isPrivate.value
    ? 'Набор виден только вам — хранится в вашем аккаунте.'
    : 'Набор будет опубликован в каталоге и доступен всем пользователям.'
})
</script>

<template>
  <main class="inventory-main">
    <div class="inv-page-header">
      <div class="page-title">Создать набор</div>

      <div :style="{ display: 'flex', gap: '8px' }">
        <button class="btn-draft">Сохранить черновик</button>

        <button class="btn-publish" @click="onSubmit">Опубликовать</button>
      </div>
    </div>

    <div id="sp-ca-meta" class="editor-meta-block">
      <div class="editor-meta-row">
        <AppVisibilityToggle v-model="isPrivate" />
      </div>

      <div class="editor-meta-row">
        <div class="ctx-hint info">
          <svg
            class="ctx-hint-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>

          <span class="ctx-hint-text">
            {{ visibilityLabel }}
          </span>
        </div>
      </div>

      <AppCategoriesChips v-model="selectedCategory" />
    </div>

    <div class="editor-field-block editor-field-block--overflow">
      <div class="editor-field-label">
        Название набора

        <span class="editor-char-count"> {{ titleLength }}/100</span>
      </div>

      <textarea
        v-model="title"
        v-bind="titleProps"
        class="editor-excerpt-input cs-title-input"
        placeholder="Например: Базовый гардероб на лето"
        rows="1"
      />
    </div>

    <div class="editor-field-block editor-field-block--overflow">
      <div class="editor-field-label">
        Краткое описание
        <span
          :style="{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }"
        >
          — видно в карточке
        </span>

        <span class="editor-char-count">{{ descriptionLength }}/250</span>
      </div>

      <textarea
        v-model="description"
        v-bind="descriptionProps"
        class="editor-excerpt-input"
        placeholder="Одно-два предложения: для кого набор и что в нём..."
        rows="2"
      />
    </div>

    <div class="editor-field-block editor-field-block--overflow">
      <div
        class="editor-field-label"
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }"
      >
        <span>
          Позиции набора{{ items.length > 0 ? ` · ${items.length} поз.` : '' }}
        </span>

        <div
          :style="{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            position: 'relative'
          }"
        >
          <span
            v-if="totalPerMonth > 0"
            :style="{
              fontWeight: 700,
              color: 'var(--accent-green)',
              fontFamily: 'var(--mono)',
              textTransform: 'none',
              letterSpacing: 0,
              fontSize: 14
            }"
          >
            {{ Math.round(totalPerMonth).toLocaleString('ru') }} ₽/мес
          </span>
        </div>
      </div>

      <div v-if="items.length > 0" class="cs-set-items-list">
        <SetItemRow
          v-for="item in items"
          :key="item.name"
          :item="item"
          @remove="onRemoveItem"
        />
      </div>

      <SetItemForm
        v-if="isNewItemAdding"
        @cancel="isNewItemAdding = false"
        @add="onAddNewSetItem"
      />

      <div v-else :style="{ padding: '10px 14px' }">
        <button class="inv-add-toggle" @click="isNewItemAdding = true">
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>

          Добавить позицию
        </button>
      </div>
    </div>

    <div class="editor-field-block editor-field-block--overflow">
      <div
        class="editor-field-label"
        :style="{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }"
      >
        <span> Подробное описание </span>
      </div>

      <div
        class="editor-html-hint"
        :style="{ borderTop: '1px solid var(--border)' }"
      >
        <span>Поддерживается Markdown-разметка</span>

        <div :style="{ position: 'relative' }">
          <button class="editor-html-prompt-btn">
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Справка по разметке
          </button>
        </div>
      </div>

      <textarea
        v-model="aboutText"
        v-bind="aboutTextProps"
        class="editor-body-input"
        placeholder="Расскажите подробнее: принципы подбора, расчёт стоимости, для кого подойдёт..."
      />
    </div>

    <div class="photo-section">
      <div class="photo-section-title">
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        Фотографии{{ images.length > 0 ? ` · ${images.length}` : '' }}
      </div>
      <div class="photo-drop-zone">
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <div class="drop-zone-text">Перетащите фото или нажмите для выбора</div>
        <div class="drop-zone-hint">PNG, JPG, GIF, WebP</div>
        <input
          type="file"
          accept="image/*"
          multiple
          :style="{ display: 'none' }"
        />
      </div>

      <div v-if="images.length" class="photo-gallery">
        <div v-for="image in images" :key="image" class="photo-thumb">
          <img :src="image" />

          <div class="photo-thumb-overlay">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>

            Скопировать код
          </div>

          <button class="photo-thumb-remove">
            <svg
              width="10"
              height="10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
