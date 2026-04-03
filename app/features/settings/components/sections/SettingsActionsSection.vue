<script setup lang="ts">
const { signOut } = useAuth()

const isLoading = ref(false)

const onSignOut = async () => {
  if (isLoading.value) return

  try {
    isLoading.value = true

    await signOut({ callbackUrl: '/' })
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="rounded-14 border border-border bg-surface overflow-hidden">
    <div
      class="px-18 pt-12 pb-8 text-11 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
    >
      Опасная зона
    </div>

    <div
      class="px-18 py-14 flex items-center justify-between gap-12 border-b border-border"
    >
      <div>
        <div class="text-14 font-semibold tracking-[-0.01em] text-text">
          Выйти из аккаунта
        </div>

        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          Завершить сеанс на этом устройстве
        </div>
      </div>

      <button
        type="button"
        class="rounded-8 border border-accent-red-border bg-accent-red-light px-10 py-5 text-12 font-medium text-accent-red-text hover:bg-accent-red-deep"
        @click="onSignOut"
      >
        Выйти
      </button>
    </div>

    <div class="h-1 bg-border"></div>

    <div
      class="px-18 py-14 flex items-center justify-between gap-12 border-b border-border"
    >
      <div>
        <div
          class="text-14 font-semibold tracking-[-0.01em] text-accent-red-text"
        >
          Удалить аккаунт
        </div>

        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          Все данные, наборы и статьи будут удалены без возможности
          восстановления
        </div>
      </div>

      <button
        type="button"
        class="rounded-8 border border-accent-red-border bg-accent-red-light px-10 py-5 text-12 font-medium text-accent-red-text hover:border-accent-red-border-deep hover:bg-accent-red-deep"
      >
        Удалить
      </button>
    </div>
  </div>
</template>
