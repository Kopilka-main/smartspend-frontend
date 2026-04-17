<script setup lang="ts">
import { useAuthModal } from '~/features/home/composables/useAuthModal'

const authModal = useAuthModal()

const onSignUp = () => {
  authModal.patchOptions({
    attrs: {
      mode: 'sign-up'
    }
  })

  authModal.open()
}
</script>

<template>
  <section id="ld-cta" class="ld-cta">
    <div class="ld-cta-inner">
      <div class="ld-section-label" :style="{ color: 'var(--accent-green)' }">
        Начни прямо сейчас
      </div>

      <h2 class="ld-cta-title">
        Хватит считать прошлое — начни управлять будущим
      </h2>

      <p class="ld-cta-sub">
        Подбери компании, создай инвентарь, распредели бюджет по конвертам.
      </p>

      <button class="landing-btn-primary" @click="onSignUp">Начать →</button>
    </div>
  </section>
</template>
