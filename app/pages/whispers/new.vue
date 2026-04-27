<script setup lang="ts">
import WhisperCreateForm from '~/features/whispers/components/WhisperCreateForm.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Поделиться скидкой'
})
</script>

<template>
  <main class="inventory-main">
    <WhisperCreateForm />
  </main>
</template>
