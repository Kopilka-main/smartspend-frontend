<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import * as v from 'valibot'

import { useCreateArticle } from '~/features/articles/queries/useCreateArticle'
import type { CustomSet } from '~/types'

import ArticleSetPicker from '~/features/articles/components/ArticleSetPicker.vue'
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
  title: 'Создание статьи'
})

const router = useRouter()
const isPrivate = ref(false)
const selectedCategory = ref('')
const linkedSets = ref<CustomSet[]>([])
const images = ref<any[]>([])

const { mutate, isLoading } = useCreateArticle(() => {
  router.push('/account')
})

const visibilityLabel = computed(() => {
  return isPrivate.value
    ? 'Статья будет доступна на странице вашего аккаунта и видна пользователям в зависимости от настроек конфиденциальности.'
    : 'Статья будет опубликована в ленте и на странице вашего аккаунта, доступна всем пользователям.'
})

const { defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    v.object({
      title: v.pipe(v.string()),
      preview: v.pipe(v.string()),
      body: v.pipe(v.string())
    })
  )
})

const [title, titleProps] = defineField('title')
const [preview, previewProps] = defineField('preview')
const [body, bodyProps] = defineField('body')

const titleLength = computed(() => {
  return title.value ? title.value.length : 0
})

const previewLength = computed(() => {
  return preview.value ? preview.value.length : 0
})

const onSubmit = handleSubmit((values) => {
  mutate({
    title: values.title,
    preview: values.preview,
    categoryId: selectedCategory.value,
    isPrivate: isPrivate.value,
    blocks: [
      {
        position: 0,
        type: 'p',
        text: values.body,
        html: null,
        items: null,
        title: null
      }
    ],
    linkedSetIds: linkedSets.value.map((set) => set.id)
  })
})
</script>

<template>
  <main class="inventory-main">
    <div class="inv-page-header">
      <div
        class="page-title"
        :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
      >
        Создание статьи
      </div>

      <div :style="{ display: 'flex', gap: '8px' }">
        <button class="btn-draft">Сохранить черновик</button>

        <button
          id="sp-ca-publish"
          class="btn-publish"
          :disabled="isLoading"
          @click="onSubmit"
        >
          Опубликовать
        </button>
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

      <ArticleSetPicker v-model="linkedSets" :category="selectedCategory" />
    </div>

    <div class="editor-field-block">
      <div class="editor-field-label editor-field-label--body">
        <span>Заголовок</span>

        <span class="editor-char-count">{{ titleLength }}/100</span>
      </div>

      <textarea
        v-model="title"
        v-bind="titleProps"
        class="editor-title-input"
        placeholder="Введите заголовок статьи..."
        rows="2"
      />
    </div>

    <div class="editor-field-block">
      <div class="editor-field-label editor-field-label--body">
        <span>Краткое описание</span>

        <span class="editor-char-count">{{ previewLength }}/250</span>
      </div>

      <textarea
        v-model="preview"
        v-bind="previewProps"
        class="editor-excerpt-input"
        placeholder="Короткий анонс статьи, который будет виден в ленте..."
        rows="2"
      />
    </div>

    <div class="editor-field-block editor-field-block--body">
      <div class="editor-field-label editor-field-label--body">
        <span>Текст статьи</span>
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
        v-model="body"
        v-bind="bodyProps"
        class="editor-body-input"
        placeholder="Начните писать статью..."
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
    </div>
  </main>
</template>
