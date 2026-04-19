<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Автор'
})
</script>

<template>
  <main></main>
</template>
