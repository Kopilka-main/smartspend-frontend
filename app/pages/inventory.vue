<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Инвентарь'
})
</script>

<template>
  <main></main>
</template>
