<script setup lang="ts">
import AppSwitch from '~/components/ui/inputs/AppSwitch.vue'

const items = ref([
  {
    key: 'newSets',
    label: 'Новые наборы',
    desc: 'Когда добавляются новые наборы в каталог',
    value: false
  },
  {
    key: 'articles',
    label: 'Статьи от авторов',
    desc: 'Когда выходят новые статьи',
    value: false
  },
  {
    key: 'authorUpdates',
    label: 'Обновления подписок',
    desc: 'Уведомления о новых статьях и наборах у авторов, на которых вы подписаны',
    value: false
  },
  {
    key: 'setChanges',
    label: 'Изменения в наборах',
    desc: 'Уведомления об изменениях в наборах, которые у вас оформлены',
    value: false
  },
  {
    key: 'reminders',
    label: 'Напоминания',
    desc: 'Напоминания обновить инвентарь',
    value: false
  }
])
</script>

<template>
  <div id="sp-settings-notifs" class="settings-section">
    <div class="settings-section-title">Уведомления</div>

    <div v-for="item in items" :key="item.label" class="settings-row">
      <div>
        <div class="settings-row-label">{{ item.label }}</div>
        <div class="settings-row-desc">{{ item.desc }}</div>
      </div>

      <AppSwitch v-model="item.value" />
    </div>
  </div>
</template>
