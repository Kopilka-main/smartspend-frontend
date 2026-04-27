<script setup lang="ts">
import { formatMoney } from '~/utils/formatMoney'
import type { CustomSet } from '~/types'

type AuthorSetCardProps = {
  set: CustomSet
}

defineProps<AuthorSetCardProps>()
</script>

<template>
  <div class="acc-set-card">
    <div class="acc-set-accent" :style="{ background: set.color }" />
    <div class="acc-set-body">
      <div class="acc-set-top-row">
        <slot />
      </div>

      <div class="acc-set-name">{{ set.title }}</div>

      <div class="acc-set-tags">
        <span v-for="name in set.itemNames" :key="name" class="acc-set-tag">
          {{ name }}
        </span>
      </div>
    </div>

    <div class="acc-set-footer">
      <span class="acc-set-amount">{{ formatMoney(set.amount) }}</span>
      <span class="acc-set-period">{{ set.period }}</span>
    </div>
  </div>
</template>
