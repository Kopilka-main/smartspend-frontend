<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

import AuthModalSignInForm from './AuthModalSignInForm.vue'
import AuthModalSignUpForm from './AuthModalSignUpForm.vue'

type AuthModalProps = {
  mode: 'sign-in' | 'sign-up'
}

const props = withDefaults(defineProps<AuthModalProps>(), {
  mode: 'sign-in'
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const localMode = ref(props.mode)

const isSignIn = computed(() => {
  return localMode.value === 'sign-in'
})

const title = computed(() => {
  return isSignIn.value ? 'Добро пожаловать' : 'Создать аккаунт'
})

const description = computed(() => {
  return isSignIn.value
    ? 'Войдите, чтобы продолжить'
    : 'Зарегистрируйтесь бесплатно'
})

const onClose = () => {
  emit('close')
}
</script>

<template>
  <AppModal>
    <div
      class="relative w-full max-w-400 rounded-16 pt-24 p-20 sm:rounded-20 border border-border bg-surface sm:px-32 sm:py-24 base-modal"
    >
      <button
        type="button"
        class="absolute top-14 right-14 w-30 h-30 rounded-full border border-border bg-surface-2 flex items-center justify-center cursor-pointer text-text-2 transition-colors duration-150 hover:bg-surface hover:text-text disabled:opacity-40 disabled:cursor-default"
        @click="onClose"
      >
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="flex items-center gap-8 mb-20">
        <div
          class="w-28 h-28 rounded-8 bg-accent-green flex items-center justify-center shrink-0"
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
        <span class="text-[15px] font-bold tracking-[-0.02em] text-text">
          SmartSpend
        </span>
      </div>

      <div class="flex gap-4 bg-surface-2 rounded-10 p-3 mb-20">
        <button
          type="button"
          class="flex-1 py-7 rounded-8 text-13 font-medium text-text-2 border-0 cursor-pointer transition-all duration-150"
          :class="{
            'font-semibold bg-surface text-text shadow-app-sm':
              localMode === 'sign-in'
          }"
          @click="localMode = 'sign-in'"
        >
          Войти
        </button>

        <button
          type="button"
          class="flex-1 py-7 rounded-8 text-13 font-medium text-text-2 border-0 cursor-pointer transition-all duration-150"
          :class="{
            'font-semibold bg-surface text-text shadow-app-sm':
              localMode === 'sign-up'
          }"
          @click="localMode = 'sign-up'"
        >
          Регистрация
        </button>
      </div>

      <h1
        class="text-18 sm:text-20 font-bold tracking-[-0.03em] text-text mb-4"
      >
        {{ title }}
      </h1>

      <h3 class="text-13 text-text-2 mb-20">
        {{ description }}
      </h3>

      <div class="mt-16 flex flex-col gap-8">
        <button
          type="button"
          class="flex items-center gap-10 w-full px-16 py-11 rounded-10 border border-border bg-surface-2 text-13 font-medium text-text cursor-pointer transition-all duration-150 hover:bg-surface hover:border-accent-green-border"
        >
          <span class="flex items-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2.04 12c0-5.523 4.476-10 10-10 5.522 0 10 4.477 10 10s-4.478 10-10 10c-5.524 0-10-4.477-10-10z"
                fill="#FC3F1D"
              ></path>
              <path
                d="M13.32 7.666h-.924c-1.694 0-2.585.858-2.585 2.123 0 1.43.616 2.1 1.881 2.959l1.045.704-3.003 4.487H7.49l2.695-4.014c-1.55-1.111-2.42-2.19-2.42-4.015 0-2.288 1.595-3.85 4.62-3.85h3.003v11.868H13.32V7.666z"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span>Яндекс ID</span>
        </button>

        <button
          type="button"
          class="flex items-center gap-10 w-full px-16 py-11 rounded-10 border border-border bg-surface-2 text-13 font-medium text-text cursor-pointer transition-all duration-150 hover:bg-surface hover:border-accent-green-border"
        >
          <span class="flex items-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 1024 1024"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M179.929 32h664.142C925.767 32 992 98.23 992 179.929v664.142C992 925.767 925.767 992 844.071 992H179.929C98.23 992 32 925.767 32 844.071V179.929C32 98.23 98.23 32 179.929 32z"
                fill="#4c75a3"
              ></path>
              <path
                d="M503.946 704.029h39.269s11.859-1.307 17.922-7.831c5.573-5.997 5.395-17.25 5.395-17.25s-.768-52.692 23.683-60.451c24.113-7.648 55.07 50.924 87.879 73.448 24.812 17.039 43.667 13.31 43.667 13.31l87.739-1.226s45.895-2.832 24.132-38.918c-1.781-2.947-12.678-26.693-65.238-75.479-55.019-51.063-47.643-42.802 18.627-131.129 40.359-53.79 56.49-86.628 51.449-100.691-5.003-13.4-34.69-9.86-34.69-9.86l-98.785.611s-7.329-.997-12.757 2.251c-5.309 3.176-8.717 10.598-8.717 10.598s-15.641 41.622-36.486 77.025c-43.988 74.693-61.58 78.647-68.77 74.002-16.729-10.811-12.549-43.422-12.549-66.596 0-72.389 10.98-102.57-21.381-110.383-10.737-2.591-18.647-4.305-46.11-4.585-35.25-.358-65.078.109-81.971 8.384-11.239 5.504-19.91 17.765-14.626 18.471 6.531.87 21.314 4.99 29.152 15.656 10.126 13.777 9.772 44.703 9.772 44.703s5.818 85.212-13.585 95.794c-13.314 7.26-31.581-7.56-70.799-75.327-20.09-34.711-35.264-73.085-35.264-73.085s-2.922-7.169-8.141-11.007c-6.33-4.65-15.174-6.124-15.174-6.124l-93.876.613s-14.089.393-19.267 6.522c-4.606 5.455-.368 16.724-.368 16.724s73.49 171.942 156.711 258.591c76.315 79.454 162.957 74.24 162.957 74.24z"
                fill="#fff"
              ></path>
            </svg>
          </span>
          <span>VK (Max)</span>
        </button>
      </div>

      <div class="flex items-center gap-12 my-18">
        <div class="flex-1 h-px bg-border" aria-hidden="true"></div>
        <span class="text-[11px] text-text-3 whitespace-nowrap">или</span>
        <div class="flex-1 h-px bg-border" aria-hidden="true"></div>
      </div>

      <AuthModalSignInForm v-if="isSignIn" />
      <AuthModalSignUpForm v-else />

      <div v-if="isSignIn" class="text-center mt-16 text-13 text-text-2">
        Нет аккаунта?&nbsp;<button
          type="button"
          class="bg-transparent border-0 cursor-pointer text-accent-green text-[13px] font-medium p-0 hover:opacity-75"
          @click="localMode = 'sign-up'"
        >
          Зарегистрироваться
        </button>
      </div>
      <div v-else class="text-center mt-16 text-13 text-text-2">
        Уже есть аккаунт?&nbsp;<button
          type="button"
          class="bg-transparent border-0 cursor-pointer text-accent-green text-[13px] font-medium p-0 hover:opacity-75"
          @click="localMode = 'sign-in'"
        >
          Войти
        </button>
      </div>

      <div class="mt-12 text-center text-11 text-text-3 leading-[1.6]">
        Нажимая кнопку, вы соглашаетесь с
        <button
          type="button"
          class="bg-transparent border-0 cursor-pointer text-text-2 text-11 p-0 underline decoration-border decoration-1 underline-offset-3 hover:text-text"
        >
          условия использования
        </button>
        и
        <button
          type="button"
          class="bg-transparent border-0 cursor-pointer text-text-2 text-11 p-0 underline decoration-border decoration-1 underline-offset-3 hover:text-text"
        >
          политикой конфиденциальности
        </button>
      </div>
    </div>
  </AppModal>
</template>
