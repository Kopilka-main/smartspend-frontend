<script setup lang="ts">
import AppSidebar from '~/components/layout/sidebar/AppSidebar.vue'

onMounted(() => {
  document.body.classList.add('app-body')
})

onUnmounted(() => {
  document.body.classList.remove('app-body')
})
</script>

<template>
  <AppSidebar />

  <div class="app-content"><slot /></div>
</template>
