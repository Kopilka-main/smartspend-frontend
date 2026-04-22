<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

import ProfileFinance from '~/features/profile/components/sections/ProfileFinance.vue'
import ProfilePassiveIncome from '~/features/profile/components/sections/ProfilePassiveIncome.vue'
import ProfileEnvelopes from '~/features/profile/components/sections/ProfileEnvelopes.vue'

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

const { displayName } = useCurrentUser()
</script>

<template>
  <main class="profile-main">
    <div id="sp-tiles" class="entry-header">
      <div class="entry-greeting">
        <div
          class="entry-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Привет, {{ displayName }}
        </div>
      </div>
    </div>

    <ProfileFinance />

    <ProfilePassiveIncome />

    <ProfileEnvelopes />
  </main>
</template>
