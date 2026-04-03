<script setup lang="ts"></script>

<template>
  <footer class="border-t border-border py-32">
    <div
      class="mx-auto flex flex-col 900:flex-row max-w-[110rem] flex-wrap items-center justify-between gap-20 900:gap-5 px-16 900:px-32"
    >
      <div class="flex flex-col gap-6">
        <div
          class="flex items-center gap-10 text-15 font-bold tracking-[-0.02em] text-text"
        >
          <div
            class="flex h-28 w-28 shrink-0 items-center justify-center rounded-7 bg-text"
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
        <p class="pl-2 text-11 text-text-3">
          © 2025 SmartSpend. Все права защищены.
        </p>
      </div>

      <div class="flex flex-wrap gap-20">
        <a
          href="#"
          class="text-12 mx-auto w-max tracking-[-0.01em] text-text-2 transition-colors duration-150 hover:text-accent-green"
          >Политика конфиденциальности</a
        >
        <a
          href="#"
          class="text-12 mx-auto w-max tracking-[-0.01em] text-text-2 transition-colors duration-150 hover:text-accent-green"
          >Пользовательское соглашение</a
        >
      </div>

      <div class="flex gap-8">
        <a
          href="#"
          class="flex h-30 w-30 items-center justify-center rounded-8 border border-border bg-surface-2 text-text-2 transition-all duration-150 hover:border-accent-green-border hover:bg-accent-green-light hover:text-accent-green"
          aria-label="Telegram"
        >
          <svg
            class="h-14 w-14 fill-none stroke-current"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
          </svg>
        </a>
        <a
          href="#"
          class="flex h-30 w-30 items-center justify-center rounded-8 border border-border bg-surface-2 text-text-2 transition-all duration-150 hover:border-accent-green-border hover:bg-accent-green-light hover:text-accent-green"
          aria-label="VK"
        >
          <svg
            class="h-14 w-14 fill-none stroke-current"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="flex h-30 w-30 items-center justify-center rounded-8 border border-border bg-surface-2 text-text-2 transition-all duration-150 hover:border-accent-green-border hover:bg-accent-green-light hover:text-accent-green"
          aria-label="YouTube"
        >
          <svg
            class="h-14 w-14 fill-none stroke-current"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
            <path d="M10 10l5 3-5 3v-6z"></path>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>