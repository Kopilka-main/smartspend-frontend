<script setup lang="ts">
type ArticleNoteProps = {
  note: any
}

defineProps<ArticleNoteProps>()

const onRemoveNote = () => {}
</script>

<template>
  <div class="sd-note-item">
    <div class="sd-note-text">{{ note.text }}</div>

    <div class="sd-note-footer">
      <span class="sd-note-date">{{ note.createdAt }}</span>

      <button class="sd-note-delete" @click="onRemoveNote">
        <svg
          width="11"
          height="11"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4h6v2" />
        </svg>
      </button>
    </div>
  </div>
</template>
