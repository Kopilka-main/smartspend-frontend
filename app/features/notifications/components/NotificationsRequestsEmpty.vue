<script setup lang="ts"></script>

<template>
  <div class="notif-empty">
    <div class="notif-empty-icon">
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>

    <div class="notif-empty-title">Нет запросов</div>

    <div class="notif-empty-desc">
      Здесь появятся запросы на добавление статей в разделы дополнений
    </div>
  </div>
</template>
