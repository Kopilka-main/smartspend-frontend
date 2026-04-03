<script setup lang="ts">
import AppSwitch from '~/components/ui/inputs/AppSwitch.vue'

const isNewSetsEnabled = ref(false)
const isPostsEnabled = ref(false)
const isRemindersEnabled = ref(false)
</script>

<template>
  <div class="rounded-14 border border-border bg-surface overflow-hidden">
    <div
      class="px-18 pt-12 pb-8 text-11 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
    >
      Уведомления
    </div>
    <div class="px-18 py-14 flex items-center justify-between gap-12">
      <div>
        <div class="text-14 font-semibold tracking-[-0.01em] text-text">
          Новые наборы
        </div>

        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          Когда добавляются новые наборы в каталог
        </div>
      </div>

      <AppSwitch v-model="isNewSetsEnabled" />
    </div>
    <div class="h-1 bg-border"></div>
    <div class="px-18 py-14 flex items-center justify-between gap-12">
      <div>
        <div class="text-14 font-semibold tracking-[-0.01em] text-text">
          Статьи от авторов
        </div>

        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          Когда выходят новые статьи
        </div>
      </div>

      <AppSwitch v-model="isPostsEnabled" />
    </div>
    <div class="h-1 bg-border"></div>
    <div class="px-18 py-14 flex items-center justify-between gap-12">
      <div>
        <div class="text-14 font-semibold tracking-[-0.01em] text-text">
          Напоминания
        </div>

        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          Напоминания обновить инвентарь
        </div>
      </div>

      <AppSwitch v-model="isRemindersEnabled" />
    </div>
  </div>
</template>
