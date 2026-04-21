<script setup lang="ts">
import { useMyArticles } from '~/features/articles/composables/useMyArticles'
import { useMySets } from '~/features/account/composables/useMySets'

import AccountInfoCard from '~/features/account/components/AccountInfoCard.vue'
import AccountSetsSection from '~/features/account/components/sets/AccountSetsSection.vue'
import AccountArticlesSection from '~/features/account/components/articles/AccountArticlesSection.vue'

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

const activeTab = ref('sets')

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
      label: 'Промо'
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

const activeTabComponent = computed(() => {
  switch (activeTab.value) {
    case 'sets':
      return AccountSetsSection
    case 'articles':
      return AccountArticlesSection
    default:
      return null
  }
})
</script>

<template>
  <main class="account-main">
    <div class="inv-page-header">
      <div>
        <div
          class="page-title"
          :style="{ display: 'flex', alignItems: 'center', gap: 10 }"
        >
          Аккаунт
        </div>
      </div>
    </div>

    <AccountInfoCard />

    <div id="sp-acc-tabs" class="acc-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="`acc-tab${activeTab === tab.id ? ' active' : ''}`"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <component :is="activeTabComponent" />
  </main>
</template>
