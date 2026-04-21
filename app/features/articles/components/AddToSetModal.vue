<script setup lang="ts">
import { useAllSets } from '~/features/catalog/queries/useAllSets'
import { useAddSetToArticle } from '~/features/articles/queries/useAddSetToArticle'
import { useArticle } from '~/features/articles/composables/useArticle'

import type { CustomSet } from '~/types'

import AppModal from '~/components/layout/AppModal.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const route = useRoute()

const { article } = useArticle(route.params.id as string)

const addSetToArticleMutation = useAddSetToArticle(
  route.params.id as string,
  () => {
    emit('close')
  }
)

const { data: allSetsData, isLoading } = useAllSets()

const sets = computed(() => {
  return allSetsData.value ? allSetsData.value.data : []
})

const selectedSet = ref('')

const isLinkedSet = (set: CustomSet) => {
  return article.value?.linkedSetId === set.id
}

const onSubmit = () => {
  addSetToArticleMutation.mutate({
    setId: selectedSet.value
  })
}
</script>

<template>
  <AppModal>
    <div class="add-to-set-modal">
      <div class="ats-header">
        <div class="ats-title">Прикрепить статью к набору</div>

        <button class="ats-close" @click="emit('close')">
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div v-if="sets.length === 0 && !isLoading" class="ats-empty">
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>

        <div>У вас пока нет наборов в конвертах</div>

        <div class="ats-empty-hint">
          Добавьте наборы из каталога в раздел Профиль → Конверты
        </div>
      </div>

      <template v-else>
        <div class="ats-desc">
          Статья будет сохранена в выбранном наборе — так вы сможете быстро
          найти её через раздел Инвентарь. Выберите набор:
        </div>

        <div class="ats-list">
          <button
            v-for="set in sets"
            :key="set.id"
            :class="`ats-item${selectedSet === set.id ? ' selected' : ''}${isLinkedSet(set) ? ' already' : ''}`"
            @click="selectedSet = set.id"
          >
            <span class="ats-item-name">{{ set.title }}</span>
            <span class="ats-item-cat">{{ set.categoryName }}</span>

            <span v-if="isLinkedSet(set)" class="ats-item-badge">
              Уже добавлено
            </span>

            <svg
              v-if="selectedSet === set.id && !isLinkedSet(set)"
              class="ats-check"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        </div>

        <div class="ats-actions">
          <button class="ats-cancel" @click="emit('close')">Отмена</button>

          <button
            class="ats-confirm"
            :disabled="!selectedSet"
            @click="onSubmit"
          >
            Прикрепить
          </button>
        </div>
      </template>
    </div>
  </AppModal>
</template>
