<script setup lang="ts">
const modelValue = defineModel<boolean>({ default: false })
</script>

<template>
  <div class="flex items-center gap-12">
    <div
      class="text-11 min-w-70 font-semibold uppercase tracking-[-0.05em] text-text-3"
    >
      Видимость
    </div>

    <div class="flex w-max rounded-8 border border-border bg-surface-2 p-3">
      <button
        type="button"
        class="rounded-6 px-10 py-4 font-medium text-12 text-text-2 hover:text-text"
        :class="{ 'bg-surface! text-text! shadow-app-sm!': !modelValue }"
        @click="modelValue = false"
      >
        <svg
          class="w-12 inline-block mr-6 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path
            d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
          ></path>
        </svg>

        Публичный
      </button>

      <button
        type="button"
        class="rounded-6 px-10 py-4 font-medium text-12 text-text-2 hover:text-text"
        :class="{ 'bg-surface! text-text! shadow-app-sm!': modelValue }"
        @click="modelValue = true"
      >
        <svg
          class="w-12 inline-block mr-6 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0110 0v4"></path>
        </svg>

        Приватный
      </button>
    </div>
  </div>
</template>
