<script setup lang="ts">
const modelValue = defineModel<boolean>({ default: false })
</script>

<template>
  <div class="editor-meta-label">Видимость</div>

  <div class="visibility-toggle">
    <button
      :class="`visibility-btn${modelValue ? ' active' : ''}`"
      @click="modelValue = true"
    >
      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>

      Личная
    </button>

    <button
      :class="`visibility-btn${!modelValue ? ' active' : ''}`"
      @click="modelValue = false"
    >
      <svg
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path
          d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
        />
      </svg>

      Публичная
    </button>
  </div>
</template>
