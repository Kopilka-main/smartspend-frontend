<script setup lang="ts">
type SetAuthorChipProps = {
  color: string
  name: string
  initials: string
  date: Date
}

defineProps<SetAuthorChipProps>()
</script>

<template>
  <div class="author-chip-wrap">
    <button class="author-chip">
      <span class="author-avatar-sm" :style="{ background: color }">
        {{ initials }}
      </span>

      <span class="author-chip-meta">
        <span class="author-name-inline">{{ name }}</span>
        <span v-if="date" class="author-chip-date">
          {{ formatDate(date, 'PP') }}
        </span>
      </span>
    </button>
  </div>
</template>
