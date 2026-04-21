<script setup lang="ts">
import { useArticle } from '~/features/articles/composables/useArticle'
import { useRemoveArticleNote } from '~/features/articles/queries/useRemoveArticleNote'

import ArticleNote from '~/features/articles/components/notes/ArticleNote.vue'
import ArticleNoteForm from '~/features/articles/components/notes/ArticleNoteForm.vue'

const route = useRoute()

const { article } = useArticle(route.params.id as string)
const { mutate } = useRemoveArticleNote(route.params.id as string)

const onRemoveNote = (id: string) => {
  mutate(id)
}
</script>

<template>
  <div class="section-card">
    <div class="section-header">
      <div class="section-title">
        Заметки

        <span v-if="article?.notes.length" class="section-count">
          {{ article?.notes.length }}
        </span>
      </div>
    </div>

    <div v-if="article?.notes.length === 0" class="sd-notes-empty">
      <div class="sd-notes-empty-text">
        Заметок пока нет. Добавьте мысли или наблюдения к этой статье.
      </div>
    </div>

    <div v-if="article?.notes.length" class="sd-notes-list">
      <ArticleNote
        v-for="note in article?.notes"
        :key="note.id"
        :note="note"
        @remove="onRemoveNote"
      />
    </div>

    <ArticleNoteForm />
  </div>
</template>
