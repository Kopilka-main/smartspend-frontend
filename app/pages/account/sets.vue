<script setup lang="ts">
import { useMySets } from '~/features/account/composables/useMySets'

import AccountSetCard from '~/features/account/components/sets/AccountSetCard.vue'
import AccountSetsEmpty from '~/features/account/components/sets/AccountSetsEmpty.vue'

const { mySets } = useMySets()

const router = useRouter()

const onCreateNewSet = () => {
  router.push('/sets/new')
}
</script>

<template>
  <div class="acc-panel">
    <div class="panel-header">
      <span class="panel-title">Наборы, которые вы создали</span>

      <button class="acc-btn-primary" @click="onCreateNewSet">
        <Icon name="icons:plus" />

        Создать набор
      </button>
    </div>

    <AccountSetsEmpty v-if="mySets.length === 0" />

    <div v-else class="catalog-grid">
      <AccountSetCard v-for="set in mySets" :key="set.id" :set="set" />
    </div>
  </div>
</template>
