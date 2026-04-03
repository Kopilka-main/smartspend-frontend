<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
</script>

<template>
  <VueFinalModal
    class="fixed inset-0 z-1000 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4"
  >
    <slot />
  </VueFinalModal>
</template>
