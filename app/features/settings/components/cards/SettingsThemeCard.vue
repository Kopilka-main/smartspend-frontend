<script setup lang="ts">
import { useUpdateSettings } from '~/features/settings/queries/useUpdateSettings'
import { useSettings } from '~/features/settings/composables/useSettings'

import AppSwitch from '~/components/ui/inputs/AppSwitch.vue'

const isDarkMode = ref(false)

const { mutate } = useUpdateSettings()
const { settings } = useSettings()

watch(
  () => settings.value.theme,
  () => {
    isDarkMode.value = settings.value.theme === 'dark'
  },
  {
    immediate: true
  }
)

const onUpdateDarkMode = (value: boolean) => {
  mutate({
    theme: value ? 'dark' : 'light'
  })
}
</script>

<template>
  <div id="sp-settings-appear" class="settings-section">
    <div class="settings-section-title">Внешний вид</div>

    <div class="settings-row">
      <div>
        <div class="settings-row-label">Тёмная тема</div>

        <div class="settings-row-desc">Переключить оформление приложения</div>
      </div>

      <AppSwitch
        :model-value="isDarkMode"
        @update:modelValue="onUpdateDarkMode"
      />
    </div>
  </div>
</template>
