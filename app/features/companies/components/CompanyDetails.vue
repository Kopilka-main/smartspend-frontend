<script setup lang="ts">
import type { Company } from '~/types'

type CompanyDetailsProps = {
  company?: Company | null
}

withDefaults(defineProps<CompanyDetailsProps>(), {
  company: null
})
</script>

<template>
  <div v-if="company" class="cpicker-detail">
    <div class="cpicker-detail-header">
      <div class="cpicker-detail-logo" :style="{ background: company.color }">
        {{ company.abbr }}
      </div>
      <div class="cpicker-detail-header-body">
        <div class="cpicker-detail-name">{{ company.name }}</div>
      </div>
    </div>

    <p v-if="company.description" class="cpicker-detail-desc">
      {{ company.description }}
    </p>
  </div>

  <div v-else class="cpicker-detail cpicker-detail--empty">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>

    <span>Наведите на компанию чтобы увидеть подробности</span>
  </div>
</template>
