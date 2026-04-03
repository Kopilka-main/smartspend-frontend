<script setup lang="ts">
import HomeNavigation from '~/features/home/components/layout/HomeNavigation.vue'
import HomeFooter from '~/features/home/components/layout/HomeFooter.vue'

import HomeHeroSection from '~/features/home/components/sections/HomeHeroSection.vue'
import HomeProblemsSection from '~/features/home/components/sections/HomeProblemsSection.vue'
import HomeForWhomSection from '~/features/home/components/sections/HomeForWhomSection.vue'
import HomeHowItWorksSection from '~/features/home/components/sections/HomeHowItWorksSection.vue'
import HomePhilosophySection from '~/features/home/components/sections/HomePhilosophySection.vue'
import HomeFeaturesSection from '~/features/home/components/sections/HomeFeaturesSection.vue'
import HomeScenarioSection from '~/features/home/components/sections/HomeScenarioSection.vue'
import HomeCTASection from '~/features/home/components/sections/HomeCTASection.vue'

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
    <HomeNavigation />

    <HomeHeroSection />

    <HomeProblemsSection />

    <HomeForWhomSection />

    <HomeHowItWorksSection />

    <HomePhilosophySection />

    <HomeFeaturesSection />

    <HomeScenarioSection />

    <HomeCTASection />

    <HomeFooter />
  </div>
</template>
