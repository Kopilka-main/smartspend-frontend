<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'
import { useUpdateAccount } from '~/queries/useUpdateAccount'

const isEditMode = ref(false)
const { currentUser } = useCurrentUser()

const { mutate, isLoading } = useUpdateAccount(() => (isEditMode.value = false))

const form = ref({
  displayName: currentUser.value?.displayName || '',
  bio: currentUser.value?.bio || '',
  username: currentUser.value?.username || ''
})

const onSubmit = () => {
  if (isLoading.value) return

  if (!isEditMode.value) {
    isEditMode.value = true
    return
  }

  mutate({
    displayName: form.value.displayName,
    bio: form.value.bio,
    username: form.value.username
  })
}
</script>

<template>
  <div id="sp-acc-header" class="user-header">
    <div class="user-avatar-large-wrap">
      <div class="user-avatar-large">
        <img
          v-if="currentUser?.avatarUrl"
          :src="currentUser?.avatarUrl"
          alt="avatar"
          class="user-avatar-img"
        />
        <span v-else>{{ currentUser?.initials }}</span>
      </div>

      <button class="user-avatar-change">
        <Icon name="icons:picture" />
      </button>
    </div>

    <div class="user-info">
      <div class="user-name-line">
        <input
          v-if="isEditMode"
          v-model="form.displayName"
          class="acc-edit-field large"
          placeholder="Имя и фамилия"
        />

        <span v-else class="user-display-name">
          <span v-if="currentUser?.displayName">
            {{ currentUser?.displayName }}
          </span>

          <span v-else class="acc-placeholder acc-placeholder--name">
            Имя не указано
          </span>
        </span>

        <div :style="{ display: 'flex', gap: '6px', marginLeft: 'auto' }">
          <button
            id="sp-acc-edit"
            :class="`btn-edit-mode${isEditMode ? ' active' : ''}`"
            @click="onSubmit"
          >
            <template v-if="isEditMode">
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>

              Готово
            </template>

            <template v-else>
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                />
                <path
                  d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                />
              </svg>

              Редактировать
            </template>
          </button>

          <button
            v-if="isEditMode"
            class="btn-edit-mode"
            @click="isEditMode = false"
          >
            Отмена
          </button>
        </div>
      </div>

      <div class="user-nickname-line">
        <div v-if="isEditMode" class="acc-username-input-wrap">
          <span class="acc-username-at">@</span>

          <input
            v-model="form.username"
            class="acc-edit-field"
            :style="{ width: 160 }"
            placeholder="username"
          />
        </div>

        <span v-else class="user-username">
          <span v-if="currentUser?.username">
            @{{ currentUser?.username }}
          </span>

          <span v-else class="acc-placeholder" :style="{ fontSize: 13 }">
            username не задан
          </span>
        </span>
      </div>

      <div class="user-meta">
        <span v-if="currentUser?.followersCount" class="user-meta-item">
          {{ currentUser?.followersCount }} подписчиков
        </span>
      </div>

      <textarea
        v-if="isEditMode"
        v-model="form.bio"
        class="user-bio-input"
        rows="3"
        placeholder="О себе..."
      />

      <div v-else class="user-bio">
        <span v-if="currentUser?.bio">
          {{ currentUser?.bio }}
        </span>

        <span v-else class="acc-placeholder acc-placeholder--bio">
          О себе...
        </span>
      </div>
    </div>
  </div>
</template>
