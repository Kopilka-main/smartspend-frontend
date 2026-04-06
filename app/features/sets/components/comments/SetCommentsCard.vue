<script setup lang="ts">
import { useSetComments } from '~/features/sets/queries/useSetComments'
import { useAddSetComment } from '~/features/sets/queries/useAddSetComment'

import SetCommentItem from '~/features/sets/components/comments/SetCommentItem.vue'

const route = useRoute()

const commentsType = ref('new')
const commentText = ref('')

const { data } = useSetComments(route.params.id as string, commentsType)

const { mutate, isLoading } = useAddSetComment(
  route.params.id as string,
  () => {
    commentText.value = ''
  }
)

const comments = computed(() => {
  return data.value ? data.value.data : []
})

const onSubmit = () => {
  if (!commentText.value) return

  if (isLoading.value) return

  mutate({
    text: commentText.value
  })
}
</script>

<template>
  <div class="overflow-hidden rounded-14 bg-surface shadow-main">
    <div
      class="flex items-center justify-between gap-12 border-b border-border px-24 py-15"
    >
      <div
        class="flex items-center gap-8 text-15 font-bold tracking-[-0.02em] text-text"
      >
        Комментарии

        <span
          class="rounded-5 border border-border bg-surface-2 px-6 py-1 font-secondary text-11 text-text-3"
        >
          {{ comments.length }}
        </span>
      </div>
    </div>

    <div class="flex items-center border-b border-border px-24 py-11">
      <div class="flex gap-2 rounded-8 border border-border bg-surface-2 p-2">
        <button
          type="button"
          class="whitespace-nowrap rounded-6 border-0 bg-transparent px-10 py-4 text-11 font-medium tracking-[-0.01em] text-text-3 transition-all duration-150 hover:text-text-2"
          :class="{
            'bg-surface! text-text! shadow-[0_1px_2px_rgba(0,0,0,0.06)]':
              commentsType === 'new'
          }"
          @click="commentsType = 'new'"
        >
          Новые
        </button>

        <button
          type="button"
          class="whitespace-nowrap rounded-6 border-0 bg-transparent px-10 py-4 text-11 font-medium tracking-[-0.01em] text-text-3 transition-all duration-150 hover:text-text-2"
          :class="{
            'bg-surface! text-text! shadow-[0_1px_2px_rgba(0,0,0,0.06)]':
              commentsType === 'popular'
          }"
          @click="commentsType = 'popular'"
        >
          Популярные
        </button>
      </div>
    </div>

    <div>
      <SetCommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>

    <!--    <div-->
    <!--      class="flex items-center justify-center border-t border-border px-24 py-11"-->
    <!--    >-->
    <!--      <button-->
    <!--        type="button"-->
    <!--        class="flex items-center gap-6 rounded-8 border border-border bg-surface-2 px-14 py-6 text-12 font-medium tracking-[-0.01em] text-text-2 transition-all duration-150 hover:bg-surface-3 hover:text-text"-->
    <!--      >-->
    <!--        Показать ещё 2-->
    <!--        <svg-->
    <!--          width="12"-->
    <!--          height="12"-->
    <!--          fill="none"-->
    <!--          stroke="currentColor"-->
    <!--          viewBox="0 0 24 24"-->
    <!--          stroke-width="2"-->
    <!--        >-->
    <!--          <polyline points="6 9 12 15 18 9"></polyline>-->
    <!--        </svg>-->
    <!--      </button>-->
    <!--    </div>-->

    <form
      class="flex gap-10 border-t border-border px-24 py-16"
      @submit.prevent="onSubmit"
    >
      <input
        v-model="commentText"
        class="flex-1 rounded-10 border border-border bg-surface-2 px-14 py-9 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors duration-150 placeholder:text-text-3 focus:border-accent-green-border focus:bg-surface"
        placeholder="Написать комментарий..."
      />

      <button
        type="submit"
        :disabled="isLoading"
        class="rounded-10 border border-border bg-surface-2 px-16 py-9 text-13 font-medium tracking-[-0.01em] text-text-2 transition-all duration-150 hover:border-accent-green-border hover:bg-accent-green-light hover:text-accent-green"
      >
        Отправить
      </button>
    </form>
  </div>
</template>
