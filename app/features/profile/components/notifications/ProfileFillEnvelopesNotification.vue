<script setup lang="ts"></script>

<template>
  <button class="zero-state-banner zero-state-banner--warn">
    <span class="zero-state-icon">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    </span>
    <span class="zero-state-text">
      <span class="zero-state-title">Конверты не заполнены</span>

      <span class="zero-state-sub">
        Расходы по категориям не учтены — свободный остаток завышен
      </span>
    </span>

    <svg
      class="zero-state-arrow"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  </button>
</template>
