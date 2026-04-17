<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

import ProfileFinanceSection from '~/features/profile/components/ProfileFinanceSection.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Профиль'
})

const { currentUser } = useCurrentUser()
</script>

<template>
  <main class="profile-main">
    <div id="sp-tiles" class="entry-header">
      <div class="entry-greeting">
        <div
          class="entry-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Привет, {{ currentUser?.displayName }}
        </div>
      </div>
    </div>

    <ProfileFinanceSection />
  </main>
</template>
