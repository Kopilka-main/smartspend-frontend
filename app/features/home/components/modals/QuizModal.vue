<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const currentStep = ref(1)

const quiz = [
  {
    question: 'Как часто вы покупаете вещи импульсивно?',
    items: [
      {
        label: 'Почти никогда',
        value: ''
      },
      {
        label: 'Иногда, пару раз в месяц',
        value: ''
      },
      {
        label: 'Часто, почти каждую неделю',
        value: ''
      },
      {
        label: 'Постоянно, не могу остановиться',
        value: ''
      }
    ]
  }
]

const onSkipStep = () => {}

const onNextStep = () => {}
</script>

<template>
  <AppModal>
    <div
      class="relative w-full max-w-440 rounded-20 bg-surface overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.18)] transform translate-y-0 transition-transform duration-300"
    >
      <div
        class="h-3 bg-accent-green transition-[width] duration-300"
        style="width: 25%"
      />

      <div class="px-32 pt-32 pb-28">
        <div class="text-20 font-bold tracking-[-0.02em] mb-20">
          Как часто вы покупаете вещи импульсивно?
        </div>

        <div class="flex flex-col gap-8">
          <button
            type="button"
            class="w-full text-left px-16 py-12 rounded-10 bg-surface-2 border border-border font-medium text-14 text-text-2 cursor-pointer transition-all duration-150 tracking-[-0.01em] hover:bg-surface-3 hover:text-text hover:border-accent-green-border"
          >
            Почти никогда
          </button>
          <button
            type="button"
            class="w-full text-left px-16 py-12 rounded-10 bg-surface-2 border border-border font-medium text-14 text-text-2 cursor-pointer transition-all duration-150 tracking-[-0.01em] hover:bg-surface-3 hover:text-text hover:border-accent-green-border"
          >
            Иногда, пару раз в месяц
          </button>
          <button
            type="button"
            class="w-full text-left px-16 py-12 rounded-10 bg-surface-2 border border-border font-medium text-14 text-text-2 cursor-pointer transition-all duration-150 tracking-[-0.01em] hover:bg-surface-3 hover:text-text hover:border-accent-green-border"
          >
            Часто, почти каждую неделю
          </button>
          <button
            type="button"
            class="w-full text-left px-16 py-12 rounded-10 bg-surface-2 border border-border font-medium text-14 text-text-2 cursor-pointer transition-all duration-150 tracking-[-0.01em] hover:bg-surface-3 hover:text-text hover:border-accent-green-border"
          >
            Постоянно, не могу остановиться
          </button>
        </div>

        <div class="mt-20 flex items-center justify-between gap-16">
          <button
            type="button"
            class="bg-transparent border-0 cursor-pointer font-medium text-13 text-text-3 px-8 py-4 rounded-6 transition-colors duration-120 hover:text-text-2"
            @click="onSkipStep"
          >
            Пропустить
          </button>

          <button
            type="button"
            class="px-20 h-38 rounded-10 bg-text text-surface text-14 font-medium border-0 cursor-pointer transition-opacity duration-150 tracking-[-0.01em] hover:opacity-85"
            @click="onNextStep"
          >
            Далее →
          </button>
        </div>
      </div>
    </div>
  </AppModal>

  <!--  <div>-->
  <!--    &lt;!&ndash; Quiz modal Inputs &ndash;&gt;-->
  <!--    <div-->
  <!--      style="display: none"-->
  <!--      class="fixed inset-0 z-1000 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 opacity-100 pointer-events-auto transition-opacity duration-200"-->
  <!--    >-->
  <!--      -->
  <!--    </div>-->

  <!--    &lt;!&ndash; Quiz modal Results &ndash;&gt;-->
  <!--    <div-->
  <!--      style="display: none"-->
  <!--      class="fixed inset-0 z-1000 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 opacity-100 pointer-events-auto transition-opacity duration-200"-->
  <!--    >-->
  <!--      <div-->
  <!--        class="relative w-full max-w-440 rounded-20 bg-surface overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.18)] transform translate-y-0 transition-transform duration-300"-->
  <!--      >-->
  <!--        <div-->
  <!--          class="h-3 bg-accent-green transition-[width] duration-300"-->
  <!--          style="width: 25%"-->
  <!--        ></div>-->
  <!--        <div class="px-32 pt-32 pb-28">-->
  <!--          <div class="text-center py-8">-->
  <!--            <div class="text-40 mb-16">🎉</div>-->
  <!--            <div class="text-22 font-bold tracking-[-0.02em] mb-8">-->
  <!--              Вы готовы!-->
  <!--            </div>-->
  <!--            <div class="text-14 text-text-2 leading-normal mb-24">-->
  <!--              SmartSpend поможет вам тратить осознанно и достигать финансовых-->
  <!--              целей-->
  <!--            </div>-->
  <!--            <button-->
  <!--              type="button"-->
  <!--              class="w-full h-45 rounded-12 bg-accent-green text-white text-15 font-semibold border-0 cursor-pointer tracking-[-0.01em] hover:opacity-[0.88]"-->
  <!--            >-->
  <!--              Войти в приложение →-->
  <!--            </button>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>
