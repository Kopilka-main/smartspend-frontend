<script setup lang="ts">
import AppSwitch from '~/components/ui/inputs/AppSwitch.vue'

const isDarkModeEnabled = ref(false)
</script>

<template>
  <div class="rounded-14 border border-border bg-surface overflow-hidden">
    <div
      class="px-18 pt-12 pb-8 text-11 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
    >
      Внешний вид
    </div>

    <div class="px-18 py-14 flex items-center justify-between gap-12">
      <div>
        <div class="text-14 font-semibold tracking-[-0.01em] text-text">
          Тёмная тема
        </div>

        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          Переключить оформление приложения
        </div>
      </div>

      <AppSwitch v-model="isDarkModeEnabled" />
    </div>
  </div>
</template>
