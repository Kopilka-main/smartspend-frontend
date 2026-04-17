<script setup lang="ts">
import HomeHeroSection from '~/features/home/components/sections/HomeHeroSection.vue'
import HomeFeaturesSection from '~/features/home/components/sections/HomeFeaturesSection.vue'
import HomeTwoPathsSection from '~/features/home/components/sections/HomeTwoPathsSection.vue'
import HomeCTASection from '~/features/home/components/sections/HomeCTASection.vue'
import HomeFooter from '~/features/home/components/layout/HomeFooter.vue'

definePageMeta({
  layout: 'default',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/profile'
  }
})

useHead({
  title: 'Главная'
})
</script>

<template>
  <div>
    <HomeHeroSection />

    <HomeFeaturesSection />

    <HomeTwoPathsSection />

    <HomeCTASection />

    <HomeFooter />
  </div>
</template>
