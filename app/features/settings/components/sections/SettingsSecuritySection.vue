<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

const { currentUser } = useCurrentUser()
</script>

<template>
  <div class="rounded-14 border border-border bg-surface overflow-hidden">
    <div
      class="px-18 pt-12 pb-8 text-11 font-semibold uppercase tracking-[0.06em] text-text-3 border-b border-border"
    >
      Аккаунт и безопасность
    </div>

    <div
      class="px-18 py-14 flex items-center justify-between gap-12 border-b border-border"
    >
      <div>
        <div class="text-14 font-semibold tracking-[-0.01em] text-text">
          Электронная почта
        </div>

        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          {{ currentUser?.email }}
        </div>
      </div>

      <button
        type="button"
        class="rounded-8 border border-border bg-surface-2 px-10 py-5 text-12 font-medium text-text-2 hover:text-text hover:bg-surface hover:border-text"
      >
        Изменить
      </button>
    </div>

    <div
      class="px-18 py-14 flex items-center justify-between gap-12 border-b border-border"
    >
      <div>
        <div class="text-14 font-semibold tracking-[-0.01em] text-text">
          Пароль
        </div>

        <div class="mt-2 text-12 text-text-2 leading-[1.4]">
          <span class="font-secondary tracking-[0.12em]">••••••••</span>

          Последнее изменение: недавно
        </div>
      </div>

      <button
        type="button"
        class="rounded-8 border border-border bg-surface-2 px-10 py-5 text-12 font-medium text-text-2 hover:text-text hover:bg-surface hover:border-text"
      >
        Сменить
      </button>
    </div>

    <div class="px-18 py-14">
      <div
        class="text-12 font-semibold uppercase tracking-[0.05em] text-text-3 mb-10"
      >
        Привязанные аккаунты
      </div>

      <div
        class="flex items-center justify-between gap-12 py-10 border-b border-border"
      >
        <div class="flex items-center gap-10 min-w-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            class="shrink-0"
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
          <div class="min-w-0">
            <div class="text-14 font-semibold tracking-[-0.01em] text-text">
              Яндекс ID
            </div>
            <div class="mt-2 text-12 text-text-2 leading-[1.4]">
              Не привязан
            </div>
          </div>
        </div>
        <button
          type="button"
          class="rounded-8 border border-border bg-surface-2 px-10 py-5 text-12 font-medium text-text-2 hover:text-text hover:bg-surface hover:border-text"
        >
          Привязать
        </button>
      </div>

      <div class="flex items-center justify-between gap-12 py-10">
        <div class="flex items-center gap-10 min-w-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 1024 1024"
            fill="none"
            class="shrink-0"
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
          <div class="min-w-0">
            <div class="text-14 font-semibold tracking-[-0.01em] text-text">
              VK (Max)
            </div>
            <div class="mt-2 text-12 text-text-2 leading-[1.4]">
              Не привязан
            </div>
          </div>
        </div>
        <button
          type="button"
          class="rounded-8 border border-border bg-surface-2 px-10 py-5 text-12 font-medium text-text-2 hover:text-text hover:bg-surface hover:border-text"
        >
          Привязать
        </button>
      </div>
    </div>
  </div>
</template>
