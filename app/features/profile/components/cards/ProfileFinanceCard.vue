<script setup lang="ts">
import { useFinance } from '~/features/profile/composables/useFinance'
import { useBudgetGroups } from '~/features/profile/composables/useBudgetGroups'

import BudgetGroup from '~/features/profile/components/BudgetGroup.vue'

const { finance, totalExpenses, savings, savingsPct } = useFinance()
const { budgetGroups } = useBudgetGroups()
</script>

<template>
  <div class="profile-card">
    <div class="bl-row income">
      <span class="bl-label">Доход</span>
      <span class="bl-value">
        {{ finance.income.toLocaleString('ru') }} ₽
      </span>
    </div>

    <BudgetGroup v-for="group in budgetGroups" :key="group.id" :group="group" />

    <div class="bl-row total-expenses">
      <span class="bl-label">Итого расходов</span>
      <span class="bl-value">
        −{{ totalExpenses.toLocaleString('ru') }} ₽

        <span v-if="finance.income > 0" class="bl-tag-neutral">
          {{ Math.round((totalExpenses / finance.income) * 100) }}%
        </span>
      </span>
    </div>

    <div
      :class="`bl-row remainder${savings < 0 ? ' remainder--deficit' : savingsPct >= 20 ? ' remainder--good' : ''}`"
    >
      <span class="bl-label">Свободный остаток</span>

      <span class="bl-value">
        {{ savings < 0 ? '-' : '' }}
        {{ Math.abs(savings).toLocaleString('ru') }} ₽

        <span v-if="finance.income > 0" class="bl-tag">
          {{ Math.round((savings / finance.income) * 100) }}%
        </span>
      </span>
    </div>
  </div>
</template>
