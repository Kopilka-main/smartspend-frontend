<script setup lang="ts">
import { useSettings } from '~/features/settings/composables/useSettings'

import SettingsThemeCard from '~/features/settings/components/cards/SettingsThemeCard.vue'
import SettingsNotificationsCard from '~/features/settings/components/cards/SettingsNotificationsCard.vue'
import SettingsRegionCard from '~/features/settings/components/cards/SettingsRegionCard.vue'
import SettingsPrivacyCard from '~/features/settings/components/cards/SettingsPrivacyCard.vue'
import SettingsAccountCard from '~/features/settings/components/cards/SettingsAccountCard.vue'
import SettingsDangerCard from '~/features/settings/components/cards/SettingsDangerCard.vue'

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

useSettings()
</script>

<template>
  <main class="settings-main">
    <div class="settings-inner">
      <div>
        <div
          class="page-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Настройки
        </div>

        <div class="page-subtitle">Управление приложением и аккаунтом</div>
      </div>

      <SettingsThemeCard />

      <SettingsNotificationsCard />

      <SettingsRegionCard />

      <SettingsPrivacyCard />

      <SettingsAccountCard />

      <SettingsDangerCard />
    </div>
  </main>
</template>
