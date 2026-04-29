<script setup lang="ts">
import type { Subscription } from '~/types'

type AccountSubscriptionCardProps = {
  subscription: Subscription
}

const props = defineProps<AccountSubscriptionCardProps>()

const router = useRouter()

const initials = computed(() => {
  return props.subscription.initials
})
</script>

<template>
  <div
    class="subscription-card"
    @click="router.push(`/authors/${subscription}`)"
  >
    <div class="subscription-top">
      <div
        class="subscription-avatar"
        :style="{ background: subscription.color || '#4E8268' }"
      >
        {{ initials }}
      </div>

      <div class="subscription-info">
        <div class="subscription-name">{{ subscription.displayName }}</div>

        <div v-if="subscription.username" class="subscription-handle">
          @{{ subscription.username }}
        </div>
      </div>
    </div>

    <div v-if="subscription.bio" class="subscription-bio">
      {{ subscription.bio }}
    </div>

    <div class="subscription-bottom">
      <div class="subscription-stats">
        <span v-if="subscription.followersCount">
          {{ subscription.followersCount }} подписчиков
        </span>

        <span v-if="subscription.articlesCount">
          {{ subscription.articlesCount }} статей
        </span>

        <span v-if="subscription.setsCount">
          {{ subscription.setsCount }} наборов
        </span>
      </div>
    </div>
  </div>
</template>
