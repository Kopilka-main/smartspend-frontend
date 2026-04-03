<script setup lang="ts">
import { useAuthModal } from '~/features/home/composables/useAuthModal'

const authModal = useAuthModal()

const onSignUp = () => {
  authModal.patchOptions({
    attrs: {
      mode: 'sign-up'
    }
  })

  authModal.open()
}
</script>

<template>
  <section class="pt-24 pb-72">
    <div class="mx-auto max-w-[110rem] px-16 900:px-32">
      <div
        class="rounded-16 border border-border bg-surface px-24 900:py-72 py-48 900:px-48 shadow-main text-center"
      >
        <h2
          class="mx-auto mb-12 max-w-400 text-26 900:text-32 font-bold leading-[1.2] tracking-[-0.03em] text-text"
        >
          Начните сегодня — следующая зарплата уже
          <em class="font-bold not-italic text-accent-green">под контролем</em>
        </h2>

        <p
          class="mx-auto mb-28 max-w-325 text-center text-15 leading-[1.6] text-text-2"
        >
          Бесплатно. Без карты. Без обязательств.
        </p>

        <button
          type="button"
          class="rounded-10 bg-text px-24 h-40 text-14 font-medium tracking-[-0.01em] text-surface transition-opacity duration-150 hover:opacity-80"
          @click="onSignUp"
        >
          Создать аккаунт →
        </button>
      </div>
    </div>
  </section>
</template>
