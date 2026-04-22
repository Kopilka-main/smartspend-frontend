<script setup lang="ts">
import type { BudgetGroupItem } from '~/types'

type BudgetGroupProps = {
  group: BudgetGroupItem
}

const props = defineProps<BudgetGroupProps>()

const isOpened = ref(false)
const isDismissed = ref(false)
</script>

<template>
  <div>
    <div
      :class="`bl-group-header collapsible${isOpened ? ' open' : ''}`"
      @click="isOpened = !isOpened"
    >
      <span class="bl-group-chevron">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span class="bl-group-label">{{ group.label }}</span>

      <span class="bl-group-total">
        <template v-if="group.total !== null">
          −{{ Math.abs(group.total).toLocaleString('ru') }} ₽
        </template>
        <span v-else class="muted">не указаны</span>
      </span>

      <span class="bl-group-pct">
        <template v-if="group.pct !== null"> {{ group.pct }}% </template>
        <span v-else class="muted">—</span>
      </span>
    </div>

    <div v-if="isOpened" class="bl-group-rows">
      <div v-for="row in group.rows" :key="row.label" class="bl-row sub">
        <span class="bl-label">{{ row.label }}</span>

        <span class="bl-value">
          −{{ Math.abs(row.value as number).toLocaleString('ru') }} ₽
        </span>
      </div>

      <template v-if="group.hint && !isDismissed">
        <div :class="`ctx-hint${group.hintType === 'info' ? ' info' : ''}`">
          <svg
            v-if="group.hintType === 'warn'"
            class="ctx-hint-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <svg
            v-else
            class="ctx-hint-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>

          <span class="ctx-hint-text">{{ group.hint }}</span>

          <button class="ctx-hint-dismiss">✕</button>
        </div>
      </template>
    </div>
  </div>
</template>
