<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

type MenuItem = {
  href: string
  icon: string
  label: string
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
    href: '/promo',
    icon: 'promo',
    label: 'Промо'
  },
  {
    href: '/catalog',
    icon: 'catalog',
    label: 'Наборы'
  }
]

const bottomItems: MenuItem[] = [
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

const router = useRouter()
const { currentUser } = useCurrentUser()

const switchToAccount = () => {
  router.push('/account')
}

const onAccountMouseEnter = (event: MouseEvent) => {
  if (event.currentTarget) {
    ;(event.currentTarget as HTMLDivElement).style.background =
      'var(--surface-2)'
  }
}

const onAccountMouseLeave = (event: MouseEvent) => {
  if (event.currentTarget) {
    ;(event.currentTarget as HTMLDivElement).style.background = ''
  }
}
</script>

<template>
  <aside>
    <div class="logo">
      <div class="logo-mark">
        <svg viewBox="0 0 80 80" fill="none" width="30" height="30">
          <rect width="80" height="80" rx="18" fill="var(--logo-bg)" />
          <rect
            x="14"
            y="14"
            width="52"
            height="52"
            rx="10"
            fill="var(--logo-fg)"
          />
        </svg>
      </div>

      <span class="logo-text">SmartSpend</span>

      <button class="sidebar-toggle" title="Свернуть">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
        </svg>
      </button>
    </div>

    <nav>
      <NuxtLink
        v-for="item in items"
        :key="item.href"
        :to="item.href"
        class="nav-item"
        active-class="active"
      >
        <Icon :name="`icons:${item.icon}`" class="nav-icon" />

        <span class="nav-label">{{ item.label }}</span>
      </NuxtLink>

      <div class="nav-divider" />

      <NuxtLink
        v-for="item in bottomItems"
        :key="item.href"
        :to="item.href"
        class="nav-item"
        active-class="active"
      >
        <Icon :name="`icons:${item.icon}`" class="nav-icon" />

        <span class="nav-label">{{ item.label }}</span>
      </NuxtLink>
    </nav>

    <div class="sidebar-bottom">
      <button class="theme-toggle">
        <Icon name="icons:sun" class="nav-icon" />

        <span class="nav-label theme-label">Тёмная тема</span>
      </button>

      <div class="sidebar-user" @click="switchToAccount">
        <div class="avatar-sm">{{ currentUser?.initials }}</div>

        <div class="nav-label-block">
          <div class="sidebar-user-name">{{ currentUser?.displayName }}</div>
          <div class="sidebar-user-plan">Базовый план</div>
        </div>
      </div>
    </div>
  </aside>
</template>
