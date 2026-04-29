<script setup lang="ts"></script>

<template>
  <div class="acc-companies-empty">
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>

    <div class="acc-companies-empty-title">Компании не выбраны</div>

    <div class="acc-companies-empty-desc">
      Нажмите «Изменить», чтобы добавить компании в список
    </div>
  </div>
</template>
