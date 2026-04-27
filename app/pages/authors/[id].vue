<script setup lang="ts">
import { useAuthorProfile } from '~/features/authors/composables/useAuthorProfile'

import PublicAuthorProfile from '~/features/authors/components/PublicAuthorProfile.vue'
import GhostAuthorProfile from '~/features/authors/components/GhostAuthorProfile.vue'
import AnonymousAuthorProfile from '~/features/authors/components/AnonymousAuthorProfile.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

const route = useRoute()
const { profile, title } = useAuthorProfile(route.params.id as string)

useHead({
  title
})
</script>

<template>
  <main class="account-main">
    <GhostAuthorProfile v-if="profile?.isDeleted" />
    <AnonymousAuthorProfile v-else-if="profile?.isPrivate" />
    <PublicAuthorProfile v-else />
  </main>
</template>
