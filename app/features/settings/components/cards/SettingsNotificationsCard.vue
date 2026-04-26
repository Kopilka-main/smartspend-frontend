<script setup lang="ts">
import { useSettings } from '~/features/settings/composables/useSettings'
import { useUpdateSettings } from '~/features/settings/queries/useUpdateSettings'

import AppSwitch from '~/components/ui/inputs/AppSwitch.vue'

const items = [
  {
    key: 'notifyNewSets',
    label: 'Новые наборы',
    desc: 'Когда добавляются новые наборы в каталог'
  },
  {
    key: 'notifyAuthorArticles',
    label: 'Статьи от авторов',
    desc: 'Когда выходят новые статьи'
  },
  {
    key: 'notifySubscriptions',
    label: 'Обновления подписок',
    desc: 'Уведомления о новых статьях и наборах у авторов, на которых вы подписаны'
  },
  {
    key: 'notifySetChanges',
    label: 'Изменения в наборах',
    desc: 'Уведомления об изменениях в наборах, которые у вас оформлены'
  },
  {
    key: 'notifyReminders',
    label: 'Напоминания',
    desc: 'Напоминания обновить инвентарь'
  }
]

const form = ref({
  notifyNewSets: false,
  notifyAuthorArticles: false,
  notifySubscriptions: false,
  notifySetChanges: false,
  notifyReminders: false
})

const { mutate } = useUpdateSettings()
const { settings } = useSettings()

watch(
  () => settings.value,
  () => {
    form.value.notifyNewSets = settings.value.notifyNewSets
    form.value.notifyAuthorArticles = settings.value.notifyAuthorArticles
    form.value.notifySubscriptions = settings.value.notifySubscriptions
    form.value.notifySetChanges = settings.value.notifySetChanges
    form.value.notifyReminders = settings.value.notifyReminders
  },
  {
    immediate: true
  }
)

const getFormValue = (key: string) => {
  // @ts-expect-error Expect boolean value
  return form.value[key]
}

const onUpdate = (value: boolean, key: string) => {
  // @ts-expect-error Expect boolean value
  form.value[key] = value

  mutate({
    ...form.value
  })
}
</script>

<template>
  <div id="sp-settings-notifs" class="settings-section">
    <div class="settings-section-title">Уведомления</div>

    <div v-for="item in items" :key="item.label" class="settings-row">
      <div>
        <div class="settings-row-label">{{ item.label }}</div>
        <div class="settings-row-desc">{{ item.desc }}</div>
      </div>

      <AppSwitch
        :model-value="getFormValue(item.key)"
        @update:modelValue="onUpdate($event, item.key)"
      />
    </div>
  </div>
</template>
