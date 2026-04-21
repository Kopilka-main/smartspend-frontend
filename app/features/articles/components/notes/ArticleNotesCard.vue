<script setup lang="ts">
import ArticleNote from '~/features/articles/components/notes/ArticleNote.vue'
import ArticleNoteForm from '~/features/articles/components/notes/ArticleNoteForm.vue'

const notes = ref<any[]>([])
</script>

<template>
  <div class="section-card">
    <div class="section-header">
      <div class="section-title">
        Заметки

        <span v-if="notes.length" class="section-count">
          {{ notes.length }}
        </span>
      </div>
    </div>

    <div v-if="notes.length === 0" class="sd-notes-empty">
      <div class="sd-notes-empty-text">
        Заметок пока нет. Добавьте мысли или наблюдения к этой статье.
      </div>
    </div>

    <div v-if="notes.length" class="sd-notes-list">
      <ArticleNote v-for="note in notes" :key="note.id" :note="note" />
    </div>

    <ArticleNoteForm />
  </div>
</template>
