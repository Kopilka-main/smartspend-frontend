<script setup lang="ts">
import { useAuthModal } from '~/features/home/composables/useAuthModal'

const cubeIdx = ref(0)
const cubeSlide = ref(0)

const CUBE_PHRASES = [
  { brand: true },
  { text: 'Планируй\nпокупки' },
  { text: 'Выбирай\nлучшее' },
  { text: 'Плати\nменьше' },
  { text: 'Собери\nбазу знаний' }
]

let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(() => {
    cubeIdx.value = (cubeIdx.value + 1) % CUBE_PHRASES.length
    cubeSlide.value = cubeIdx.value
  }, 2600)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})

const currentPhrase = computed(() => {
  return CUBE_PHRASES[cubeSlide.value]
})

const authModal = useAuthModal()

const onSignUp = () => {
  authModal.patchOptions({
    attrs: {
      mode: 'sign-up'
    }
  })

  authModal.open()
}

const onSignIn = () => {
  authModal.patchOptions({
    attrs: {
      mode: 'sign-in'
    }
  })

  authModal.open()
}
</script>

<template>
  <section class="ld-hero">
    <div class="ld-container ld-hero-inner">
      <div class="ld-hero-text">
        <h1 class="ld-h1">
          Твои деньги<br />заслуживают<br /><em>системы</em>
        </h1>

        <p class="ld-hero-sub">
          Большинство людей не знают, сколько потратят в следующем месяце.
          SmartSpend знает.
        </p>

        <p class="ld-hero-label">SmartSpend — Система планирования расходов</p>

        <div class="ld-hero-actions">
          <button class="landing-btn-primary" @click="onSignUp">
            Начать →
          </button>

          <button class="landing-btn-ghost" @click="onSignIn">Войти</button>
        </div>
      </div>

      <div class="ld-hero-visual">
        <div class="ld-cube-wrap">
          <div class="ld-cube-frame">
            <div class="ld-cube-screen">
              <div
                v-if="currentPhrase?.brand"
                key="{cubeSlide}"
                class="ld-cube-brand"
              >
                SMART<br />SPEND
              </div>

              <div v-else class="ld-cube-phrase">
                {{ currentPhrase?.text?.split('\n')[0] }}
                <br />
                <em> {{ currentPhrase?.text?.split('\n')[1] }} </em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
