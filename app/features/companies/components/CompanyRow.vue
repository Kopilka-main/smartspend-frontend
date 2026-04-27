<script setup lang="ts">
import type { Company } from '~/types'

type CompanyRowProps = {
  company: Company
  isSelected: boolean
  isActive: boolean
}

defineProps<CompanyRowProps>()

const emit = defineEmits<{
  (e: 'select', company: Company): void
  (e: 'activate', company: Company): void
  (e: 'deactivate', company: Company): void
}>()
</script>

<template>
  <div
    :class="`cpicker-row${isSelected ? ' selected' : ''}${isActive ? ' active' : ''}`"
    @mouseenter="emit('activate', company)"
    @mouseleave="emit('deactivate', company)"
    @click="emit('select', company)"
  >
    <div class="cpicker-row-logo" :style="{ background: company.color }">
      {{ company.abbr }}
    </div>

    <span class="cpicker-row-name">{{ company.name }}</span>

    <div v-if="isSelected" class="cpicker-row-check">
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
</template>
