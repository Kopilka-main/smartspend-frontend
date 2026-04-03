<script setup lang="ts">
import AppSidebarThemeToggle from '~/components/layout/sidebar/AppSidebarThemeToggle.vue'
import AppSidebarUserMenu from '~/components/layout/sidebar/AppSidebarUserMenu.vue'

type MenuItem = {
  href: string
  icon: string
  label: string
  hasDivider?: boolean
}

const items: MenuItem[] = [
  {
    href: '/profile',
    icon: 'profile',
    label: 'Профиль'
  },
  {
    href: '/inventory',
    icon: 'inventory',
    label: 'Инвентарь'
  },
  {
    href: '/feed',
    icon: 'feed',
    label: 'Лента'
  },
  {
    href: '/catalog',
    icon: 'catalog',
    label: 'Каталог наборов',
    hasDivider: true
  },
  {
    href: '/notifications',
    icon: 'notifications',
    label: 'Уведомления'
  },
  {
    href: '/settings',
    icon: 'settings',
    label: 'Настройки'
  }
]
</script>

<template>
  <aside
    class="sticky top-0 z-100 hidden md:flex h-screen w-full flex-col bg-surface py-24 overflow-hidden shadow-[1px_0_0_rgba(0,0,0,0.07)]"
  >
    <div
      class="logo flex items-center gap-10 px-16 pt-4 pb-24 text-17 font-bold tracking-[-0.02em] whitespace-nowrap overflow-hidden"
    >
      <div
        class="logo-mark w-30 h-30 rounded-8 bg-text flex items-center justify-center shrink-0"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          class="w-16 h-16"
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

      <span class="logo-text flex-1 whitespace-nowrap overflow-hidden">
        SmartSpend
      </span>

      <button
        type="button"
        title="Свернуть"
        class="sidebar-toggle p-4 rounded-6 text-text-3 hover:text-text hover:bg-surface-2 transition-colors flex items-center justify-center shrink-0 bg-transparent border-0 cursor-pointer"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M9 3v18"></path>
        </svg>
      </button>
    </div>

    <nav
      class="flex-1 flex flex-col gap-1 px-12 py-7 overflow-y-auto overflow-x-hidden"
    >
      <template v-for="item in items" :key="item.label">
        <NuxtLink
          class="group flex items-center gap-10 px-12 py-7 rounded-10 text-14 text-text-2 font-normal tracking-[-0.01em] cursor-pointer no-underline whitespace-nowrap overflow-hidden transition-all duration-150 hover:bg-surface-2 hover:text-text"
          activeClass="bg-surface-2 text-text"
          :to="item.href"
        >
          <Icon
            :name="`icons:${item.icon}`"
            class="w-16 h-16 shrink-0 opacity-80 transition-opacity group-hover:opacity-80"
          />

          <span class="nav-label whitespace-nowrap overflow-hidden">
            {{ item.label }}
          </span>
        </NuxtLink>

        <div
          v-if="item.hasDivider"
          class="nav-divider h-1 bg-border my-6 mx-12"
        />
      </template>
    </nav>

    <div
      class="sidebar-bottom pt-12 px-12 pb-0 border-t border-border flex flex-col gap-4"
    >
      <AppSidebarThemeToggle />

      <AppSidebarUserMenu />
    </div>
  </aside>
</template>
