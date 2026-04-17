<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
</script>

<template>
  <VueFinalModal class="auth-overlay">
    <slot />
  </VueFinalModal>
</template>
