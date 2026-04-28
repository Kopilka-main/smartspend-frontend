<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

const { currentUser } = useCurrentUser()

const hasPassword = computed(() => {
  return false
})

const socialProviderLabel = computed(() => {
  return ''
})

const isSocialUser = computed(() => {
  return false
})

const currentEmail = computed(() => {
  return currentUser.value ? currentUser.value.email : ''
})
</script>

<template>
  <div class="settings-section">
    <div class="settings-section-title">Аккаунт и безопасность</div>

    <div class="settings-row">
      <div>
        <div class="settings-row-label">Электронная почта</div>

        <div class="settings-row-desc settings-row-value">
          {{ currentEmail }}

          <span v-if="isSocialUser" class="conn-provider-badge">
            управляется {{ socialProviderLabel }}
          </span>
        </div>
      </div>

      <button v-if="!isSocialUser" class="settings-action-btn">Изменить</button>
    </div>

    <div class="settings-row">
      <div>
        <div class="settings-row-label">Пароль</div>
        <div class="settings-row-desc">
          <span v-if="isSocialUser && !hasPassword">
            Не установлен — вход через {{ socialProviderLabel }}
          </span>
          <span v-else>
            <span class="pass-dots">••••••••</span> Последнее изменение: недавно
          </span>
        </div>

        <div v-if="isSocialUser && !hasPassword" class="settings-row-hint">
          После создания можно будет также входить по email
        </div>
      </div>

      <button class="settings-action-btn">
        {{ isSocialUser && !hasPassword ? 'Создать пароль' : 'Сменить' }}
      </button>
    </div>

    <div class="settings-conn-accounts">
      <div class="settings-conn-title">Привязанные аккаунты</div>
    </div>
  </div>
</template>
