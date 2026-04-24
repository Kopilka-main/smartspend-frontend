<script setup lang="ts">
type PromoCardCodeProps = {
  code: string
}

const props = defineProps<PromoCardCodeProps>()

const isCopied = ref(false)

const onCopyCode = () => {
  navigator.clipboard.writeText(props.code)

  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>

<template>
  <div class="whisper-code-row" :style="{ position: 'relative' }">
    <div v-if="isCopied" class="whisper-code-toast">Промокод скопирован</div>

    <div
      class="whisper-code"
      :style="{ cursor: 'pointer' }"
      @click="onCopyCode"
    >
      {{ code }}
    </div>

    <button
      :class="`fa-action-btn pc-copy-btn${isCopied ? ' copied' : ''}`"
      @click="onCopyCode"
    >
      <template v-if="isCopied">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>

        Скопировано
      </template>
      <template v-else>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>

        Скопировать
      </template>
    </button>
  </div>
</template>
