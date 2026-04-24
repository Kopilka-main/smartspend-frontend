<script setup lang="ts">
type PromoCardVoteToastProps = {
  vote: string
}

defineProps<PromoCardVoteToastProps>()
</script>

<template>
  <div
    :class="`whisper-vote-toast whisper-vote-toast--float${vote === 'works' ? ' wvt-works' : ' wvt-not'}`"
  >
    {{ vote === 'works' ? 'Голос учтён' : 'Спасибо за проверку' }}
  </div>
</template>
