<script setup lang="ts"></script>

<template>
  <div class="inv-cold-start">
    <div class="inv-cold-icon">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect
          x="8"
          y="6"
          width="26"
          height="32"
          rx="4"
          fill="var(--surface)"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        <rect x="14" y="14" width="14" height="2" rx="1" fill="var(--border)" />
        <rect x="14" y="19" width="10" height="2" rx="1" fill="var(--border)" />
        <rect x="14" y="24" width="12" height="2" rx="1" fill="var(--border)" />
        <circle
          cx="37"
          cy="37"
          r="9"
          fill="var(--bg)"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        <path
          d="M37 33v4l2.5 2.5"
          stroke="var(--text-3)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <div class="inv-cold-title">Инвентарь пуст</div>

    <div class="inv-cold-desc">
      Добавьте готовый набор из каталога или внесите позиции вручную
    </div>

    <div class="inv-cold-actions">
      <NuxtLink to="/catalog" class="inv-cold-btn-primary">
        Найти набор в каталоге
      </NuxtLink>

      <button class="inv-cold-btn-secondary">Добавить вручную</button>
    </div>
  </div>
</template>
