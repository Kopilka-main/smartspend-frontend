<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Уведомления'
})
</script>

<template>
  <main></main>
</template>
