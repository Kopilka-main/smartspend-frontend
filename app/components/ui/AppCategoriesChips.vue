<script setup lang="ts">
import { useCategories } from '~/composables/useCategories'

const modelValue = defineModel<string>({ required: true })

const { categories } = useCategories()
</script>

<template>
  <div class="editor-meta-row">
    <div class="editor-meta-label">Категория</div>

    <div class="editor-cats">
      <button
        v-for="category in categories"
        :key="category.id"
        :class="`editor-cat-btn${modelValue === category.id ? ' active' : ''}`"
        @click="modelValue = category.id"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>
