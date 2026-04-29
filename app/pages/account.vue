<script setup lang="ts">
import { useMyArticles } from '~/features/articles/composables/useMyArticles'
import { useMySets } from '~/features/account/composables/useMySets'
import { useMyWhispers } from '~/features/account/composables/useMyWhispers'

import AccountInfoCard from '~/features/account/components/AccountInfoCard.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Аккаунт'
})

const { mySets } = useMySets()
const { myArticles } = useMyArticles()
const { myWhispers } = useMyWhispers()

const tabs = computed(() => {
  return [
    {
      id: 'articles',
      label:
        myArticles.value.length > 0
          ? `Статьи · ${myArticles.value.length}`
          : 'Статьи'
    },
    {
      id: 'sets',
      label:
        mySets.value.length > 0 ? `Наборы · ${mySets.value.length}` : 'Наборы'
    },
    {
      id: 'whispers',
      label:
        myWhispers.value.length > 0
          ? `Промо · ${myWhispers.value.length}`
          : 'Промо'
    },
    {
      id: 'subs',
      label: 'Мои подписки'
    },
    {
      id: 'companies',
      label: 'Мои компании'
    }
  ]
})
</script>

<template>
  <main class="account-main">
    <div class="inv-page-header">
      <div>
        <div
          class="page-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Аккаунт
        </div>
      </div>
    </div>

    <AccountInfoCard />

    <div id="sp-acc-tabs" class="acc-tabs">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.id"
        :to="`/account/${tab.id}`"
        class="acc-tab"
        activeClass="active"
      >
        {{ tab.label }}
      </NuxtLink>
    </div>

    <NuxtPage />
  </main>
</template>
