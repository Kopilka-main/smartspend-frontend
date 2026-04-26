<script setup lang="ts">
import { useSettings } from '~/features/settings/composables/useSettings'
import { useUpdateSettings } from '~/features/settings/queries/useUpdateSettings'

import AppVisibilitySelect from '~/components/ui/inputs/AppVisibilitySelect.vue'

const { settings } = useSettings()
</script>

<template>
  <div id="sp-settings-privacy" class="settings-section">
    <div class="settings-section-title">Конфиденциальность</div>

    <div class="settings-row settings-row-vert">
      <div>
        <div class="settings-row-label">Кто может видеть мои наборы</div>
        <div class="settings-row-desc">
          Личные наборы всегда видны только вам
        </div>
      </div>

      <AppVisibilitySelect />
    </div>

    <div class="settings-row settings-row-vert">
      <div>
        <div class="settings-row-label">Кто может видеть мои статьи</div>
        <div class="settings-row-desc">
          Статьи в черновике всегда видны только вам
        </div>
      </div>

      <AppVisibilitySelect />
    </div>

    <div class="settings-row settings-row-vert">
      <div>
        <div class="settings-row-label">Кто может видеть мой профиль</div>
        <div class="settings-row-desc">Имя, аватар, подписки и активность</div>
      </div>

      <AppVisibilitySelect />
    </div>
  </div>
</template>
