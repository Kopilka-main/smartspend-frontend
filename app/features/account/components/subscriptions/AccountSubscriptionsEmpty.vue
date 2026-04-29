<script setup lang="ts"></script>

<template>
  <div class="acc-empty" :style="{ paddingTop: '16px', paddingBottom: '20px' }">
    <div class="acc-empty-icon">
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    </div>

    <div class="acc-empty-title">Нет подписок</div>

    <div class="acc-empty-desc">
      Подписывайтесь на авторов из раздела Достижения → Рейтинг
    </div>
  </div>
</template>
