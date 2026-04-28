<script setup lang="ts">
import { useSettings } from '~/features/settings/composables/useSettings'
import { useUpdateSettings } from '~/features/settings/queries/useUpdateSettings'

import AppVisibilitySelect from '~/components/ui/inputs/AppVisibilitySelect.vue'

const { settings } = useSettings()
const { mutate } = useUpdateSettings()

const privacySets = ref('all')
const privacyArticles = ref('all')
const privacyProfile = ref('all')

watch(
  () => settings.value,
  () => {
    privacySets.value = settings.value.privacySets
    privacyArticles.value = settings.value.privacyArticles
    privacyProfile.value = settings.value.privacyProfile

    console.log(privacySets.value, privacyArticles.value, privacyProfile.value)
  },
  {
    immediate: true
  }
)

const onChangePrivacySets = () => {
  mutate({
    privacySets: privacySets.value
  })
}
const onChangePrivacyArticles = () => {
  mutate({
    privacyArticles: privacyArticles.value
  })
}
const onChangePrivacyProfile = () => {
  mutate({
    privacyProfile: privacyProfile.value
  })
}
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

      <AppVisibilitySelect
        v-model="privacySets"
        @update:modelValue="onChangePrivacySets"
      />
    </div>

    <div class="settings-row settings-row-vert">
      <div>
        <div class="settings-row-label">Кто может видеть мои статьи</div>
        <div class="settings-row-desc">
          Статьи в черновике всегда видны только вам
        </div>
      </div>

      <AppVisibilitySelect
        v-model="privacyArticles"
        @update:modelValue="onChangePrivacyArticles"
      />
    </div>

    <div class="settings-row settings-row-vert">
      <div>
        <div class="settings-row-label">Кто может видеть мой профиль</div>
        <div class="settings-row-desc">Имя, аватар, подписки и активность</div>
      </div>

      <AppVisibilitySelect
        v-model="privacyProfile"
        @update:modelValue="onChangePrivacyProfile"
      />
    </div>
  </div>
</template>
