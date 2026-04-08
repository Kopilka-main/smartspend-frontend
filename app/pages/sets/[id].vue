<script setup lang="ts">
import { useSetDetails } from '~/features/sets/queries/useSetDetails'

import SetDetailsCard from '~/features/sets/components/SetDetailsCard.vue'
import AppBreadcrumbs from '~/components/ui/AppBreadcrumbs.vue'
import SetCommentsCard from '~/features/sets/components/comments/SetCommentsCard.vue'
import SetSourceCard from '~/features/sets/components/SetSourceCard.vue'
import SetItemsCard from '~/features/sets/components/items/SetItemsCard.vue'
import SetAuthorGuides from '~/features/sets/components/SetAuthorGuides.vue'
import SetCommunityGuides from '~/features/sets/components/SetCommunityGuides.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

const route = useRoute()

const { data } = useSetDetails(route.params.id as string)

const details = computed(() => {
  return data.value ? data.value.data : null
})

const title = computed(() => {
  return details.value ? details.value.title : ''
})

const breadcrumbs = computed(() => {
  return [{ label: 'Каталог', href: '/catalog' }, { label: title.value }]
})

useHead({
  title
})
</script>

<template>
  <main class="min-w-0 w-full max-w-860 mx-auto">
    <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
      <div class="grid grid-cols-1 gap-20">
        <AppBreadcrumbs :items="breadcrumbs" />

        <SetDetailsCard v-if="details" :item="details" />

        <SetItemsCard v-if="details" :item="details" />

        <SetSourceCard v-if="details" :item="details" />

        <SetAuthorGuides />

        <SetCommunityGuides />

        <SetCommentsCard />
      </div>
    </div>
  </main>
</template>
