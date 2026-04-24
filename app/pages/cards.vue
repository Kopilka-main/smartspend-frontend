<script setup lang="ts">
import { useBankCards } from '~/features/cards/composables/useBankCards'

import BankCard from '~/features/cards/components/BankCard.vue'
import BankCardsFilters from '~/features/cards/components/filters/BankCardsFilters.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Банковские карты'
})

const filters = ref({
  sort: 'cashback_grace' // cashback / grace / cashback_grace
})

const { bankCards, isLoading } = useBankCards()
</script>

<template>
  <main class="crd-main">
    <div class="breadcrumb">
      <span class="breadcrumb-item">Профиль</span>

      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>

      <span class="breadcrumb-current">Подбор банковской карты</span>
    </div>

    <BankCardsFilters v-model:sort="filters.sort" />

    <div class="crd-list" id="sp-crd-list">
      <div v-if="bankCards.length === 0 && !isLoading" class="crd-empty">
        Нет карт под выбранные фильтры
      </div>

      <template v-else>
        <BankCard
          v-for="card in bankCards"
          :key="card.id"
          :card="card"
          :has-spending="true"
        />
      </template>
    </div>

    <div class="crd-disclaimer">
      Данные носят информационный характер. Расчёт кешбэка — приблизительный, на
      основе базовых ставок. Актуальные условия уточняйте на сайте банка.
    </div>
  </main>
</template>
