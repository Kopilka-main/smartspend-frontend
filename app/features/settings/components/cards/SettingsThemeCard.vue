<script setup lang="ts">
import AppSwitch from '~/components/ui/inputs/AppSwitch.vue'

const isDarkMode = ref(false)
</script>

<template>
  <div id="sp-settings-appear" class="settings-section">
    <div class="settings-section-title">Внешний вид</div>

    <div class="settings-row">
      <div>
        <div class="settings-row-label">Тёмная тема</div>

        <div class="settings-row-desc">Переключить оформление приложения</div>
      </div>

      <AppSwitch v-model="isDarkMode" />
    </div>
  </div>
</template>
