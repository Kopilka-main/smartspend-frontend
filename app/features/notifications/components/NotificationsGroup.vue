<script setup lang="ts">
type NotificationsGroupProps = {
  label: string
  labelStyle?: any
}

withDefaults(defineProps<NotificationsGroupProps>(), {
  labelStyle: null
})
</script>

<template>
  <div class="notif-group-label" :style="labelStyle">
    {{ label }}
  </div>

  <slot />
</template>
