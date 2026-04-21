<script setup lang="ts">
import { useCreateArticleNote } from '~/features/articles/queries/useCreateArticleNote'

const route = useRoute()

const noteText = ref('')

const { mutate, isLoading } = useCreateArticleNote(
  route.params.id as string,
  () => {
    noteText.value = ''
  }
)

const onSubmitNote = () => {
  if (noteText.value === '') return

  mutate()
}
</script>

<template>
  <form class="sd-note-form" @submit="onSubmitNote">
    <input
      v-model="noteText"
      class="sd-note-input"
      placeholder="Добавить заметку…"
    />

    <button
      type="submit"
      :disabled="isLoading || !noteText"
      class="sd-note-submit"
    >
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
</template>
