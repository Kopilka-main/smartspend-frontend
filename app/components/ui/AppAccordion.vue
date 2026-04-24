<script setup lang="ts">
type AppAccordionProps = {
  title: string
}

defineProps<AppAccordionProps>()

const isOpened = ref(false)
</script>

<template>
  <div class="crd-acc">
    <button
      :class="`crd-acc-head${isOpened ? ' open' : ''}`"
      @click="isOpened = !isOpened"
    >
      <span>{{ title }}</span>

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
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-if="isOpened" class="crd-acc-body">
      <slot />
    </div>
  </div>
</template>
