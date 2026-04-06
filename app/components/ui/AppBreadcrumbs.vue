<script setup lang="ts">
type BreadcrumbItem = {
  label: string
  href?: string
}

type AppBreadcrumbsProps = {
  items: BreadcrumbItem[]
}

defineProps<AppBreadcrumbsProps>()

const router = useRouter()

const onSwitchPage = (item: BreadcrumbItem) => {
  if (item.href) {
    router.push(item.href)
  }
}
</script>

<template>
  <div class="flex items-center gap-6 text-12 tracking-[-0.01em] text-text-3">
    <template v-for="item in items">
      <span
        class="cursor-pointer transition-colors duration-150 hover:text-text"
        :class="{ 'cursor-default! text-text-2!': !item.href }"
        @click="onSwitchPage(item)"
      >
        {{ item.label }}
      </span>

      <svg
        v-if="item.href"
        width="12"
        height="12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke-width="2"
        class="opacity-40"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </template>
  </div>
</template>
