<script setup lang="ts">
import AccountSetCard from '~/features/account/components/sets/AccountSetCard.vue'

import type { CustomSet } from '~/types'

type AccountSetsSectionProps = {
  items: CustomSet[]
}

defineProps<AccountSetsSectionProps>()

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

    <div v-if="items.length === 0" class="acc-empty">
      <div class="acc-empty-icon">
        <Icon name="icons:sets-empty" :size="32" />
      </div>

      <div class="acc-empty-title">Нет наборов</div>

      <div class="acc-empty-desc">
        Создайте первый набор или добавьте готовый из каталога
      </div>
    </div>

    <div class="catalog-grid">
      <AccountSetCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
