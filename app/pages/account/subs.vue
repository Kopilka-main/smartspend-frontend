<script setup lang="ts">
import { useMySubscriptions } from '~/features/account/composables/useMySubscriptions'

import AccountSubscriptionCard from '~/features/account/components/subscriptions/AccountSubscriptionCard.vue'
import AccountSubscriptionsEmpty from '~/features/account/components/subscriptions/AccountSubscriptionsEmpty.vue'

const { mySubscriptions } = useMySubscriptions()
</script>

<template>
  <div class="acc-panel">
    <AccountSubscriptionsEmpty v-if="mySubscriptions.length === 0" />

    <div v-else class="subs-grid">
      <AccountSubscriptionCard
        v-for="subscription in mySubscriptions"
        :key="subscription.id"
        :subscription="subscription"
      />
    </div>
  </div>
</template>
