<script setup lang="ts">
import DepositsChart from '~/features/deposits/components/DepositsChart.vue'
import DepositsFilters from '~/features/deposits/components/DepositsFilters.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Вклады'
})

const filtered = ref([])
</script>

<template>
  <main class="dep-main">
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

      <span class="breadcrumb-current">Вклады и накопительные счета</span>
    </div>

    <DepositsChart />

    <DepositsFilters />

    <div id="sp-dep-list" class="dep-list">
      <div v-if="filtered.length === 0" class="dep-empty">
        Нет предложений для выбранных фильтров
      </div>
    </div>
  </main>
</template>
