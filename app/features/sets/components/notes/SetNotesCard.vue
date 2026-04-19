<script setup lang="ts">
const notes = ref<any[]>([])
</script>

<template>
  <div id="sp-sd-personal-notes" class="sd-section-card">
    <div class="sd-section-header">
      <div class="sd-section-title">
        Заметки

        <span v-if="notes.length > 0" class="sd-section-count">
          {{ notes.length }}
        </span>
      </div>
    </div>

    <div v-if="notes.length === 0" class="sd-notes-empty">
      <div class="sd-notes-empty-text">
        Заметок пока нет. Добавьте мысли, наблюдения или прикрепите статьи из
        ленты.
      </div>
    </div>

    <div v-if="notes.length > 0" class="sd-notes-list">
      <div v-for="note in notes" :key="note.id" class="sd-note-item">
        <div class="sd-note-text">{{ note.text }}</div>

        <div class="sd-note-footer">
          <span class="sd-note-date">{{ note.createdAt }}</span>

          <button class="sd-note-delete">
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
    </div>

    <form class="sd-note-form">
      <input class="sd-note-input" placeholder="Добавить заметку…" />

      <button type="submit" class="sd-note-submit">
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
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  </div>
</template>
