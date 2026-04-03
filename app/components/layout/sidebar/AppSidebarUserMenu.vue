<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

const router = useRouter()
const { currentUser } = useCurrentUser()

const switchToAccount = () => {
  router.push('/account')
}
</script>

<template>
  <div
    class="sidebar-user flex items-center gap-10 p-8 overflow-hidden cursor-pointer rounded-10 transition-colors hover:bg-surface-2"
    @click="switchToAccount"
  >
    <div
      class="avatar-sm w-32 h-32 rounded-full bg-surface-3 border border-border flex items-center justify-center text-12 font-semibold text-text-2 shrink-0"
    >
      {{ currentUser?.initials }}
    </div>
    <div class="flex flex-col min-w-0 flex-1">
      <div
        class="sidebar-user-name text-13 font-medium tracking-[-0.01em] whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {{ currentUser?.displayName }}
      </div>
      <div
        class="sidebar-user-plan text-11 text-text-3 mt-1 whitespace-nowrap overflow-hidden text-ellipsis"
      >
        Базовый план
      </div>
    </div>
  </div>
</template>
