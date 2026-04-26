<script setup lang="ts"></script>

<template>
  <div class="user-header author-special-header">
    <div class="author-special-avatar author-special-avatar--anon">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    </div>

    <div class="user-info">
      <div class="user-name-line">
        <span class="user-display-name">Анонимный пользователь</span>
      </div>

      <div class="user-bio" :style="{ marginTop: '8px' }">
        Этот пользователь ограничил доступ к своей странице. Профиль, статьи и
        наборы скрыты от посторонних.
      </div>
    </div>

    <button
      class="btn-follow"
      :style="{ position: 'absolute', top: '28px', right: '32px' }"
      disabled
    >
      Подписаться
    </button>
  </div>

  <div class="author-special-blocked">
    <div class="author-special-blocked-icon">
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
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    </div>

    <div class="author-special-blocked-title">Профиль скрыт</div>

    <div class="author-special-blocked-desc">
      Пользователь ограничил доступ к своей странице в настройках
      конфиденциальности
    </div>

    <button class="btn-cancel" :style="{ marginTop: '16px' }">← Назад</button>
  </div>
</template>
