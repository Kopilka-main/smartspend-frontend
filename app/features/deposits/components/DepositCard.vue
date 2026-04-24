<script setup lang="ts">
const isOpened = ref(false)
</script>

<template>
  <div :class="`dep-card${isOpened ? ' open' : ''}`">
    <div class="dep-card-main">
      <div class="dep-card-body">
        <div class="dep-card-names">
          <span class="dep-bank-name">{{ deposit.bank }}</span>
        </div>

        <div class="dep-dep-name">{{ deposit.name }}</div>

        <div class="dep-tags">
          <span v-for="tag in deposit.tags" :key="tag" class="dep-tag">
            {{ tag }}
          </span>
        </div>

        <div class="dep-card-pills">
          <span class="dep-pill dep-pill-rate">% {{ rate }}</span>
          <span :class="`dep-pill dep-pill-income${belowMin ? ' warn' : ''}`">
            <svg
              v-if="belowMin"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {{ fmtRub(income) }}
          </span>
        </div>
      </div>
      <div class="dep-card-aside">
        <div
          class="dep-bank-logo"
          :style="{ background: deposit.color, color: deposit.textColor }"
        >
          {{ deposit.bank.slice(0, 2) }}
        </div>

        <div :class="`dep-expand-btn${isOpened ? ' open' : ''}`">
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
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
