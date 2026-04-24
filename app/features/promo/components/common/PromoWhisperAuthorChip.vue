<script setup lang="ts">
import type { Author } from '~/types'

type PromoWhisperAuthorChipProps = {
  author: Author
}

defineProps<PromoWhisperAuthorChipProps>()

const showCard = ref(false)
const isFollowing = ref(false)
const followAnim = ref(false)
</script>

<template>
  <div class="author-chip-wrap">
    <button class="whisper-author">@{{ author.username }}</button>

    <div v-if="showCard" class="author-popover">
      <div class="ap-top">
        <div
          class="ap-avatar"
          :style="{ background: author.color, cursor: 'pointer' }"
        >
          {{ author.initials }}
        </div>
        <button
          :class="`ap-follow-btn${isFollowing ? ' following' : ''}${followAnim ? ' follow-pop' : ''}`"
        >
          {{ isFollowing ? 'Отменить подписку' : 'Подписаться' }}
        </button>
      </div>

      <button class="ap-name">{{ author.displayName }}</button>

      <div class="ap-meta">
        {{ author.followersCount }} подписчиков

        <template v-if="author.articlesCount > 0">
          · {{ author.articlesCount }} статей
        </template>

        <template v-if="author.setsCount > 0">
          · {{ author.setsCount }} наборов
        </template>
      </div>
    </div>
  </div>
</template>
