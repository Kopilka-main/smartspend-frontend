<script setup lang="ts">
const showCard = ref(false)
const isFollowing = ref(false)
const followAnim = ref(false)

const SS_PROMO = {
  name: 'SmartSpend',
  initials: 'SS',
  color: '#4E8268',
  followers: 12400,
  articles: 47,
  sets: 14
}
</script>

<template>
  <div class="author-chip-wrap">
    <button class="whisper-author">@smartspend</button>

    <div v-if="showCard" class="author-popover">
      <div class="ap-top">
        <div class="ap-avatar" :style="{ background: SS_PROMO.color }">
          {{ SS_PROMO.initials }}
        </div>
        <button
          :class="`ap-follow-btn${isFollowing ? ' following' : ''}${followAnim ? ' follow-pop' : ''}`"
        >
          {{ isFollowing ? 'Отменить подписку' : 'Подписаться' }}
        </button>
      </div>
      <div class="ap-name">{{ SS_PROMO.name }}</div>

      <div class="ap-meta">
        {{ SS_PROMO.followers.toLocaleString('ru') }} подписчиков ·
        {{ SS_PROMO.articles }} статей · {{ SS_PROMO.sets }} наборов
      </div>
    </div>
  </div>
</template>
