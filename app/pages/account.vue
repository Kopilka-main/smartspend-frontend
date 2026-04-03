<script setup lang="ts">
import AccountEditForm from '~/features/account/components/AccountEditForm.vue'
import AccountInfoCard from '~/features/account/components/AccountInfoCard.vue'
import AccountPostsSection from '~/features/account/components/posts/AccountPostsSection.vue'
import AccountSetsSection from '~/features/account/components/sets/AccountSetsSection.vue'
import AccountSubscriptionsSection from '~/features/account/components/subscriptions/AccountSubscriptionsSection.vue'

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

const isEditAccount = ref(false)

const activeTab = ref('posts')

const currentTabComponent = computed(() => {
  if (activeTab.value === 'posts') {
    return AccountPostsSection
  }

  if (activeTab.value === 'sets') {
    return AccountSetsSection
  }

  if (activeTab.value === 'subscriptions') {
    return AccountSubscriptionsSection
  }
})
</script>

<template>
  <main class="min-w-0 w-full max-w-860 mx-auto">
    <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
      <AccountEditForm v-if="isEditAccount" @close="isEditAccount = false" />
      <AccountInfoCard v-else @edit="isEditAccount = true" />

      <div id="sp-acc-tabs" class="flex gap-4 border-b border-border pb-0">
        <button
          type="button"
          class="-mb-px border-0 border-b-2 border-transparent bg-transparent px-18 py-10 text-14 font-medium tracking-[-0.01em] text-text-2 transition-all duration-150 hover:text-text"
          :class="{ 'text-text! border-b-text': activeTab === 'posts' }"
          @click="activeTab = 'posts'"
        >
          Статьи · 0
        </button>

        <button
          type="button"
          class="-mb-px border-0 border-b-2 border-transparent bg-transparent px-18 py-10 text-14 font-medium tracking-[-0.01em] text-text-2 transition-all duration-150 hover:text-text"
          :class="{ 'text-text! border-b-text': activeTab === 'sets' }"
          @click="activeTab = 'sets'"
        >
          Наборы · 0
        </button>

        <button
          type="button"
          class="-mb-px border-0 border-b-2 border-transparent bg-transparent px-18 py-10 text-14 font-medium tracking-[-0.01em] text-text-2 transition-all duration-150 hover:text-text"
          :class="{ 'text-text! border-b-text': activeTab === 'subscriptions' }"
          @click="activeTab = 'subscriptions'"
        >
          Подписки · 0
        </button>
      </div>

      <component :is="currentTabComponent" />
    </div>
  </main>
</template>
