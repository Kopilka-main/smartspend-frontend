<script setup lang="ts">
type AppPageHeaderProps = {
  title: string
  subTitle?: string
}

withDefaults(defineProps<AppPageHeaderProps>(), {
  subTitle: ''
})
</script>

<template>
  <div class="flex flex-col gap-16 pb-4">
    <div class="flex flex-col gap-5">
      <div
        class="flex items-center gap-10 text-26 font-bold leading-none tracking-[-0.03em]"
      >
        {{ title }}

        <button
          type="button"
          class="w-22 h-22 rounded-full bg-surface-2 border-1.5 border-border text-text-3 text-12 font-bold font-secondary inline-flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-150 leading-none hover:border-accent-green hover:text-accent-green hover:bg-accent-green-light"
          title="Как устроена страница"
        >
          ?
        </button>
      </div>

      <div
        v-if="subTitle"
        class="entry-subtitle text-[14px] text-text-2 mt-1.25 tracking-[-0.01em] leading-[1.4]"
      >
        {{ subTitle }}
      </div>
    </div>
  </div>
</template>
