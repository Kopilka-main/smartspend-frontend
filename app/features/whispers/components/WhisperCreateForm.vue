<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'

import { useCreateWhisper } from '~/features/whispers/queries/useCreateWhisper'
import { useCategories } from '~/composables/useCategories'
import { useCompanies } from '~/composables/useCompanies'
import type { Company } from '~/types'

const router = useRouter()

const { defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    v.object({
      title: v.pipe(v.string()),
      code: v.optional(v.string()),
      channel: v.optional(v.string()),
      expiresAt: v.optional(v.string())
    })
  )
})

const [title, titleProps] = defineField('title')
const [code, codeProps] = defineField('code')
const [channel, channelProps] = defineField('channel')
const [expiresAt, expiresAtProps] = defineField('expiresAt')

const today = new Date().toISOString().slice(0, 10)
const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3))
  .toISOString()
  .slice(0, 10)

const { categories } = useCategories()
const { companies } = useCompanies()
const { mutate, isLoading } = useCreateWhisper(() => {
  router.push('/account')
})

const selectedCategory = ref<string | null>(null)

const onToggleCategory = (id: string) => {
  if (selectedCategory.value === id) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = id
  }
}

const companiesForCategory = computed(() => {
  return companies.value.filter(
    (company) => company.categoryId === selectedCategory.value
  )
})

const selectedCompany = ref<Company | null>(null)

const onResetCompany = () => {
  selectedCompany.value = null
}

const canSubmit = computed(() => {
  return selectedCompany.value !== null
})

const companySearch = ref('')

const searchResults = ref<Company[]>([])

const onSubmit = handleSubmit((values) => {
  mutate({
    type: 'whisper',
    companyId: selectedCompany.value?.id as string,
    title: values.title,
    code: values.code,
    channel: values.channel,
    expiresAt: values.expiresAt ? new Date(values.expiresAt) : undefined
  })
})
</script>

<template>
  <div class="inv-page-header">
    <div
      class="page-title"
      :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
    >
      Поделиться скидкой
    </div>

    <div :style="{ display: 'flex', gap: '8px' }">
      <button class="btn-draft">Сохранить черновик</button>

      <button
        class="btn-publish"
        :disabled="!canSubmit || isLoading"
        @click="onSubmit"
      >
        Опубликовать
      </button>
    </div>
  </div>

  <div
    id="sp-cw-company"
    class="editor-field-block editor-field-block--overflow"
  >
    <div class="editor-field-label">
      Компания

      <span
        :style="{
          color: '#C84848',
          fontWeight: 400,
          marginLeft: '6px',
          textTransform: 'none',
          letterSpacing: 0
        }"
      >
        обязательно
      </span>
    </div>

    <div v-if="selectedCompany" class="cw-selected-co">
      <div class="promo-logo" :style="{ background: selectedCompany.color }">
        {{ selectedCompany.abbr }}
      </div>
      <div class="cw-selected-co-info">
        <div class="cw-selected-co-name">{{ selectedCompany.name }}</div>
        <div class="cw-selected-co-cat">
          {{ selectedCompany.categoryName }}
        </div>
      </div>

      <button class="cw-change-co" @click="onResetCompany">Изменить</button>
    </div>

    <div v-else :style="{ padding: '0 0 4px' }">
      <div
        class="cw-co-search-wrap"
        :style="{
          borderBottom: '1px solid var(--border)',
          borderTop: '1px solid var(--border)'
        }"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>

        <input
          v-model="companySearch"
          class="cw-co-search"
          placeholder="Поиск по названию компании..."
        />

        <button
          v-if="companySearch"
          :style="{
            background: 'none',
            border: 'none',
            color: 'var(--text-3)',
            cursor: 'pointer',
            padding: 0
          }"
        >
          <svg
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div
        v-if="companySearch.length > 2"
        class="cw-co-list"
        :style="{
          borderBottom:
            searchResults.length > 0 ? '1px solid var(--border)' : 'none'
        }"
      >
        <template v-if="searchResults.length > 0">
          <div
            v-for="company in searchResults"
            :key="company.id"
            class="cw-co-item"
          >
            <div
              class="promo-logo"
              :style="{
                background: company.color,
                width: '28px',
                height: '28px',
                fontSize: '10px'
              }"
            >
              {{ company.abbr }}
            </div>

            <div class="cw-co-item-info">
              <div class="cw-co-item-name">{{ company.name }}</div>
              <div class="cw-co-item-cat">{{ company.categoryName }}</div>
            </div>
          </div>
        </template>

        <div v-else class="cw-co-empty">Компания не найдена</div>
      </div>

      <div :style="{ padding: '10px 12px 6px' }">
        <div
          :style="{
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--text-3)',
            marginBottom: '8px'
          }"
        >
          Выбрать по категории
        </div>

        <div class="editor-cats">
          <button
            v-for="category in categories"
            :key="category.id"
            :class="`editor-cat-btn${selectedCategory === category.id ? ' active' : ''}`"
            @click="onToggleCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <div
        v-if="selectedCategory"
        class="cw-co-list"
        :style="{ borderTop: '1px solid var(--border)' }"
      >
        <div
          v-for="company in companiesForCategory"
          :key="company.id"
          class="cw-co-item"
          @click="selectedCompany = company"
        >
          <div
            class="promo-logo"
            :style="{
              background: company.color,
              width: '28px',
              height: '28px',
              fontSize: '10px'
            }"
          >
            {{ company.abbr }}
          </div>

          <div class="cw-co-item-info">
            <div class="cw-co-item-name">{{ company.name }}</div>
            <div class="cw-co-item-cat">{{ company.categoryName }}</div>
          </div>
        </div>

        <div v-if="companiesForCategory.length === 0" class="cw-co-empty">
          Нет компаний в этой категории
        </div>
      </div>
    </div>
  </div>

  <div id="sp-cw-desc" class="editor-field-block">
    <div class="editor-field-label">
      Описание скидки или акции

      <span
        :style="{
          color: '#C84848',
          fontWeight: 400,
          marginLeft: '6px',
          textTransform: 'none',
          letterSpacing: 0
        }"
      >
        обязательно
      </span>
    </div>

    <textarea
      v-model="title"
      v-bind="titleProps"
      class="editor-excerpt-input"
      rows="3"
      placeholder="Например: скидка 20% при оплате через СБП, действует только в приложении"
    />
  </div>

  <div
    id="sp-cw-code"
    :style="{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      marginBottom: '10px'
    }"
  >
    <div class="editor-field-block" :style="{ margin: 0 }">
      <div class="editor-field-label">
        Промокод
        <span
          :style="{
            fontWeight: 400,
            textTransform: 'none',
            letterSpacing: 0,
            color: 'var(--text-3)',
            marginLeft: '6px'
          }"
        >
          необязательно
        </span>
      </div>

      <input
        v-model="code"
        v-bind="codeProps"
        class="editor-excerpt-input"
        :style="{
          fontFamily: 'var(--mono)',
          letterSpacing: '0.05em',
          padding: '10px 14px'
        }"
        placeholder="SAVE20"
      />
    </div>
    <div class="editor-field-block" :style="{ margin: 0 }">
      <div class="editor-field-label">
        Действует до

        <span
          :style="{
            fontWeight: 400,
            textTransform: 'none',
            letterSpacing: 0,
            color: 'var(--text-3)',
            marginLeft: '6px'
          }"
        >
          необязательно
        </span>
      </div>

      <input
        v-model="expiresAt"
        v-bind="expiresAtProps"
        type="date"
        class="editor-excerpt-input"
        :style="{ padding: '10px 14px' }"
        :min="today"
        :max="maxDate"
      />
    </div>
  </div>

  <div class="editor-field-block">
    <div class="editor-field-label">
      Где узнали

      <span
        :style="{
          fontWeight: 400,
          textTransform: 'none',
          letterSpacing: 0,
          color: 'var(--text-3)',
          marginLeft: '6px'
        }"
      >
        необязательно
      </span>
    </div>

    <input
      v-model="channel"
      v-bind="channelProps"
      class="editor-excerpt-input"
      :style="{ padding: '10px 14px' }"
      placeholder="Телеграм-канал, сайт, друг..."
    />
  </div>
</template>
