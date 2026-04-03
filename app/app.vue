<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>

<template>
  <div class="bg-main font-primary text-text min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ModalsContainer />
  </div>
</template>
