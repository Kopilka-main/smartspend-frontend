<script setup lang="ts">
import AppPageHeader from '~/components/layout/AppPageHeader.vue'

import SettingsThemeSection from '~/features/settings/components/sections/SettingsThemeSection.vue'
import SettingsNotificationsSection from '~/features/settings/components/sections/SettingsNotificationsSection.vue'
import SettingsRegionalSection from '~/features/settings/components/sections/SettingsRegionalSection.vue'
import SettingsConfidentialSection from '~/features/settings/components/sections/SettingsConfidentialSection.vue'
import SettingsSecuritySection from '~/features/settings/components/sections/SettingsSecuritySection.vue'
import SettingsActionsSection from '~/features/settings/components/sections/SettingsActionsSection.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Настройки'
})
</script>

<template>
  <main class="min-w-0 w-full max-w-860 mx-auto">
    <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
      <AppPageHeader
        title="Настройки"
        sub-title="Управление приложением и аккаунтом"
      />

      <SettingsThemeSection />

      <SettingsNotificationsSection />

      <SettingsRegionalSection />

      <SettingsConfidentialSection />

      <SettingsSecuritySection />

      <SettingsActionsSection />
    </div>
  </main>
</template>
