<script setup lang="ts">
const period = ref('month')
const grouped = ref<any[]>([])
</script>

<template>
  <div class="inv-shopping-list">
    <div class="inv-shopping-header">
      <span class="inv-shopping-title">Список покупок</span>

      <div class="inv-shopping-period-toggle">
        <button
          :class="`inv-shopping-period-btn${period === 'week' ? ' active' : ''}`"
        >
          Неделя
        </button>

        <button
          :class="`inv-shopping-period-btn${period === 'month' ? ' active' : ''}`"
        >
          Месяц
        </button>
      </div>

      <span class="inv-shopping-total">
        ~₽{grandTotal.toLocaleString('ru')}
      </span>
    </div>

    <div v-if="grouped.length === 0" class="inv-shopping-empty">
      {{
        period === 'week'
          ? 'На эту неделю всё есть в запасе'
          : 'Нет срочных покупок'
      }}
    </div>
    <template v-else>
      <div v-for="group in grouped" :key="group.id" class="inv-shopping-group">
        <div class="inv-shopping-group-header">
          <span class="inv-shopping-group-name">{{ group.name }}</span>

          <span class="inv-shopping-group-total">
            ~₽{groupTotal.toLocaleString('ru')}
          </span>
        </div>

        <div v-for="row in group.rows" :key="row.id" class="inv-shopping-row">
          <span class="inv-shopping-item-name">{{ row.name }}</span>
          <span class="inv-shopping-item-cost">
            <span v-if="group.action?.qty" class="inv-shopping-item-qty">
              {action.qty}
            </span>

            ~₽{(action?.cost || 0).toLocaleString('ru')}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>
