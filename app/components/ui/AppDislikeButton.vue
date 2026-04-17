<script setup lang="ts">
type AppDislikeButtonProps = {
  isDisliked: boolean
}

const props = defineProps<AppDislikeButtonProps>()

const emit = defineEmits<{
  (e: 'toggle'): void
}>()

const anim = ref(false)

const onClick = () => {
  anim.value = true

  setTimeout(() => (anim.value = false), 420)

  emit('toggle')
}
</script>

<template>
  <button
    :class="`fa-action-btn fa-action-dislike${isDisliked ? ' active' : ''}${anim ? ' dislike-shake' : ''}`"
    @click="onClick"
  >
    <svg
      width="16"
      height="16"
      :fill="isDisliked ? 'currentColor' : 'none'"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
      />
      <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
    </svg>
  </button>
</template>
