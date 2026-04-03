<script setup lang="ts">
import { useAuthModal } from '~/features/home/composables/useAuthModal'

const authModal = useAuthModal()

const onOpenSignInModal = () => {
  authModal.patchOptions({
    attrs: {
      mode: 'sign-in'
    }
  })

  authModal.open()
}

const onOpenSignUpModal = () => {
  authModal.patchOptions({
    attrs: {
      mode: 'sign-up'
    }
  })

  authModal.open()
}
</script>

<template>
  <nav
    class="backdrop-blur-[1.4rem] py-8 sticky top-0 z-100 border-b border-border bg-main/88"
  >
    <div
      class="max-w-786 mx-auto px-32 h-56 flex items-center justify-center 900:justify-between gap-16 900:gap-4"
    >
      <div
        class="flex items-center gap-10 shrink-0 text-15 font-bold tracking-[-0.02em] text-text"
      >
        <div
          class="w-28 h-28 rounded-7 bg-text flex items-center justify-center shrink-0"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="5"
              height="5"
              rx="1.5"
              fill="white"
              opacity="0.9"
            ></rect>
            <rect
              x="9"
              y="2"
              width="5"
              height="5"
              rx="1.5"
              fill="white"
              opacity="0.5"
            ></rect>
            <rect
              x="2"
              y="9"
              width="5"
              height="5"
              rx="1.5"
              fill="white"
              opacity="0.5"
            ></rect>
            <rect
              x="9"
              y="9"
              width="5"
              height="5"
              rx="1.5"
              fill="white"
              opacity="0.9"
            ></rect>
          </svg>
        </div>
        <span>SmartSpend</span>
      </div>

      <div class="hidden 900:flex gap-0.5">
        <a
          class="landing-nav-link no-underline text-text-2 text-13 font-medium px-14 py-6 rounded-10 tracking-[-0.01em] hover:text-text hover:bg-surface-2"
          href="#"
        >
          Как это работает
        </a>
        <a
          class="landing-nav-link no-underline text-text-2 text-13 font-medium px-14 py-6 rounded-10 tracking-[-0.01em] hover:text-text hover:bg-surface-2"
          href="#"
        >
          Инструменты
        </a>
        <a
          class="landing-nav-link no-underline text-text-2 text-13 font-medium px-14 py-6 rounded-10 tracking-[-0.01em] hover:text-text hover:bg-surface-2"
          href="#"
        >
          Сценарий
        </a>
      </div>

      <div class="flex items-center gap-8">
        <button
          type="button"
          class="px-16 py-2 h-33 rounded-8 text-text-2 text-13 font-medium bg-transparent border-0 cursor-pointer transition-colors duration-120 tracking-[-0.01em] hover:text-text"
          @click="onOpenSignInModal"
        >
          <span class="mt-2">Войти</span>
        </button>

        <button
          type="button"
          class="flex pt-1 items-center color-white px-18 py-2 rounded-8 bg-text h-33 text-surface text-13 font-medium border-0 cursor-pointer transition-opacity duration-120 tracking-[-0.01em] hover:opacity-85"
          @click="onOpenSignUpModal"
        >
          <span class="mt-2">Создать аккаунт</span>
        </button>
      </div>
    </div>
  </nav>
</template>
