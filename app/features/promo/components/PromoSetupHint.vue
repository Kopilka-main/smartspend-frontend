<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="promo-setup-hint">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <span>
      Рассылки и акции компаний появятся после

      <button
        class="promo-setup-link"
        @click="router.push('/companies-select')"
      >
        выбора компаний
      </button>
    </span>
  </div>
</template>
