<script setup lang="ts">
type AppEmptyProps = {
  title: string
  description: string
}

defineProps<AppEmptyProps>()
</script>

<template>
  <div class="rounded-14 px-18 py-24 900:py-48 900:px-24 text-center">
    <div
      class="mx-auto border-1 border-border mb-10 inline-flex h-52 w-52 items-center justify-center rounded-16 bg-surface-2 text-text-3"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 01-3.46 0"></path>
      </svg>
    </div>

    <h3 class="text-15 font-semibold tracking-[-0.01em] text-text">
      {{ title }}
    </h3>

    <p class="mt-4 text-13 text-text-3">
      {{ description }}
    </p>
  </div>
</template>
