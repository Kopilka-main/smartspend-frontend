<script setup lang="ts">
import AppSidebar from '~/components/layout/sidebar/AppSidebar.vue'
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div
      class="md:hidden fixed top-0 left-0 right-0 z-200 h-56 bg-surface/95 backdrop-blur-md border-b border-border flex items-center justify-between px-10"
    >
      <div class="mobile-top-logo flex items-center gap-8">
        <div
          class="mobile-logo-mark w-28 h-28 rounded-7 bg-text flex items-center justify-center shrink-0"
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

        <span class="text text-16 font-bold tracking-[-0.02em]">
          SmartSpend
        </span>
      </div>

      <div class="flex items-center gap-6">
        <button
          type="button"
          class="relative w-36 h-36 rounded-10 bg-transparent border-0 cursor-pointer text-text-2 transition-colors flex items-center justify-center hover:bg-surface-2 hover:text-text"
          title="Уведомления"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          <span
            class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-green border-2 border-surface"
          ></span>
        </button>

        <div
          class="w-32 h-32 rounded-full bg-surface-3 border border-border flex items-center justify-center text-12 font-semibold text-text-2 cursor-pointer transition-colors hover:bg-surface-2"
          title="Аккаунт"
        >
          НО
        </div>
      </div>
    </div>

    <!-- Footer -->
    <nav
      class="md:hidden fixed bottom-0 left-0 right-0 z-200 h-64 bg-surface border-t border-border grid grid-cols-5 items-center overflow-hidden"
    >
      <a
        class="flex flex-col items-center justify-center gap-3 w-full h-full min-w-0 py-2 text-10 font-medium tracking-[-0.01em] overflow-hidden transition-colors no-underline hover:text-accent-green text-accent-green"
        href="#"
      >
        <span class="relative w-20 h-20 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </span>
        <span class="w-full truncate text-center">Профиль</span>
      </a>

      <a
        class="flex flex-col items-center justify-center gap-3 w-full h-full min-w-0 py-2 text-text-2 text-10 font-medium tracking-[-0.01em] overflow-hidden transition-colors no-underline hover:text-accent-green"
        href="#"
      >
        <span class="relative w-20 h-20 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            ></path>
          </svg>
        </span>
        <span class="w-full truncate text-center">Инвентарь</span>
      </a>

      <a
        class="flex flex-col items-center justify-center gap-3 w-full h-full min-w-0 py-2 text-text-2 text-10 font-medium tracking-[-0.01em] overflow-hidden transition-colors no-underline hover:text-accent-green"
        href="#"
      >
        <span class="relative w-20 h-20 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h7"></path>
          </svg>
        </span>
        <span class="w-full truncate text-center">Лента</span>
      </a>

      <a
        class="flex flex-col items-center justify-center gap-3 w-full h-full min-w-0 py-2 text-text-2 text-10 font-medium tracking-[-0.01em] overflow-hidden transition-colors no-underline hover:text-accent-green"
        href="#"
      >
        <span class="relative w-20 h-20 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            ></path>
          </svg>
        </span>
        <span class="w-full truncate text-center">Каталог</span>
      </a>

      <a
        class="flex flex-col items-center justify-center gap-3 w-full h-full min-w-0 py-2 text-text-2 text-10 font-medium tracking-[-0.01em] overflow-hidden transition-colors no-underline hover:text-accent-green"
        href="#"
      >
        <span class="relative w-20 h-20 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            ></path>
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </span>
        <span class="w-full truncate text-center">Настройки</span>
      </a>
    </nav>

    <div class="min-h-screen grid grid-cols-1 md:grid-cols-[24rem_1fr]">
      <AppSidebar />

      <slot />
    </div>
  </div>
</template>
