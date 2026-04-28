<script setup lang="ts"></script>

<template>
  <div class="inv-empty-state">
    <div class="inv-empty-icon">
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    </div>

    <div class="inv-empty-title">Нет позиций с таким статусом</div>

    <div class="inv-empty-sub">Попробуйте сбросить фильтр</div>

    <button class="inv-empty-reset">Показать все</button>
  </div>
</template>
