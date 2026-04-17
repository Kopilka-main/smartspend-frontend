<script setup lang="ts">
type AppLikeButtonProps = {
  count: number
  isLiked: boolean
}

const props = defineProps<AppLikeButtonProps>()

const emit = defineEmits<{
  (e: 'toggle'): void
}>()

const anim = ref(false)
const sparks = ref<any[]>([])

const onClick = () => {
  anim.value = true

  setTimeout(() => (anim.value = false), 480)

  if (!props.isLiked) {
    const s = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      angle: i * 60 + Math.random() * 18 - 9,
      dist: 16 + Math.random() * 8
    }))

    sparks.value = [...s]

    setTimeout(() => (sparks.value = []), 560)
  }

  emit('toggle')
}
</script>

<template>
  <div class="action-wrap">
    <button
      :class="`fa-action-btn${isLiked ? ' liked' : ''}${anim ? ' like-pop' : ''}`"
      @click="onClick"
    >
      <svg
        width="16"
        height="16"
        :fill="`${isLiked ? 'currentColor' : 'none'}`"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
        />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
      {{ count }}
    </button>

    <span
      v-for="item in sparks"
      :key="item.id"
      class="like-spark"
      :style="{ '--angle': `${item.angle}deg`, '--dist': `${item.dist}px` }"
    >
      ✦
    </span>
  </div>
</template>
