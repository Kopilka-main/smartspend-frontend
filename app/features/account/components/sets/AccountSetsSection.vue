<script setup lang="ts">
import { useMySets } from '~/features/account/composables/useMySets'

import AccountSetCard from '~/features/account/components/sets/AccountSetCard.vue'

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

    <div v-if="mySets.length === 0" class="acc-empty">
      <div class="acc-empty-icon">
        <Icon name="icons:sets-empty" :size="32" />
      </div>

      <div class="acc-empty-title">Нет наборов</div>

      <div class="acc-empty-desc">
        Создайте первый набор или добавьте готовый из каталога
      </div>
    </div>

    <div class="catalog-grid">
      <AccountSetCard v-for="set in mySets" :key="set.id" :set="set" />
    </div>
  </div>
</template>
