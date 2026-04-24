<script setup lang="ts">
const totalActiveFilters = ref(0)
const sortBy = ref('rate') // income
</script>

<template>
  <div id="sp-dep-filters" class="dep-filters-card">
    <div class="dep-filters-row">
      <div class="dep-filter-group">
        <span class="dep-filter-label">Сумма вклада</span>
        <div class="dep-amount-wrap">
          <input
            class="dep-amount-input"
            type="text"
            inputMode="numeric"
            placeholder="500 000"
          />
          <span class="dep-amount-unit">₽</span>
        </div>
      </div>

      <div class="dep-filter-group">
        <span class="dep-filter-label">Срок вклада</span>

        <!--        <TermSelect-->
        <!--          value={selectedMonth}-->
        <!--          options={monthRates.filter(r => r.rate > 0).map(r => r.month)}-->
        <!--        onChange={m => { setSelectedMonth(m); setExpanded(null) }}-->
        <!--        />-->
      </div>

      <div class="dep-filter-group">
        <span class="dep-filter-label">Сортировка</span>
        <div class="dep-sort-toggle">
          <button :class="`dep-sort-btn${sortBy === 'rate' ? ' active' : ''}`">
            Ставка
          </button>
          <button
            :class="`dep-sort-btn${sortBy === 'income' ? ' active' : ''}`"
          >
            Доход
          </button>
        </div>
      </div>

      <div class="dep-filter-group">
        <span class="dep-filter-label">Фильтры</span>
        <button
          :class="`dep-filter-toggle-btn${totalActiveFilters > 0 ? ' active' : ''}`"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          Фильтры

          <span v-if="totalActiveFilters > 0" class="dep-filter-badge">
            {{ totalActiveFilters }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
