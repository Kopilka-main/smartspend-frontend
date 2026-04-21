<script setup lang="ts">
import { useUpdateFinance } from '~/features/profile/queries/useUpdateFinance'
import { useFinance } from '~/features/profile/composables/useFinance'

import AppModal from '~/components/layout/AppModal.vue'
import FinancialModalDone from '~/features/profile/components/modals/financial/FinancialModalDone.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { mutate, isLoading } = useUpdateFinance(() => {
  emit('close')
})

const { finance } = useFinance()

const form = ref({
  income: 0,
  housing: 0,
  credit: 0,
  creditMonths: 0,
  capital: 0,
  emoRate: '0.05'
})

const step = ref(0)
const isDone = ref(false)
const currentValue = ref('')

const current = computed(() => {
  return steps.value[step.value]
})

watch(finance, (value) => {
  form.value.income = value.income
  form.value.housing = value.housing
  form.value.credit = value.credit
  form.value.creditMonths = value.creditMonths
  form.value.capital = value.capital

  // @ts-expect-error
  currentValue.value = form.value[current.value.id]
})

watch(step, () => {
  // @ts-expect-error
  currentValue.value = form.value[current.value.id]
})

const BASE_STEPS = [
  {
    id: 'income',
    q: 'Ваш ежемесячный доход',
    hint: 'Укажите сумму после вычета налогов, которую вы получаете на руки',
    icon: '💰',
    unit: '₽ / мес'
  },
  {
    id: 'housing',
    q: 'Расходы на жильё в месяц',
    hint: 'Аренда или ипотека + коммунальные услуги (свет, вода, интернет)',
    icon: '🏠',
    unit: '₽ / мес'
  },
  {
    id: 'credit',
    q: 'Кредитные выплаты в месяц',
    hint: 'Все кредиты, ипотека (если не учтена выше), кредитные карты',
    icon: '💳',
    unit: '₽ / мес'
  },
  {
    id: 'capital',
    q: 'Ваш общий капитал',
    hint: 'Накопления, вклады, инвестиции, брокерский счёт — всё вместе',
    icon: '📈',
    unit: '₽'
  }
]

const CREDIT_MONTHS_STEP = {
  id: 'creditMonths',
  q: 'Сколько месяцев осталось платить?',
  hint: 'Когда кредит закроется, эта сумма начнёт пополнять ваши накопления — прогноз учтёт это',
  icon: '📅',
  unit: 'мес'
}

const hasCredit = computed(() => {
  return Number(form.value.credit) > 0
})

const steps = computed(() => {
  return hasCredit.value
    ? [
        BASE_STEPS[0],
        BASE_STEPS[1],
        BASE_STEPS[2],
        CREDIT_MONTHS_STEP,
        BASE_STEPS[3]
      ]
    : BASE_STEPS
})

const progress = computed(() => {
  return ((step.value + 1) / steps.value.length) * 100
})

const isValid = computed(() => {
  return !isNaN(Number(currentValue.value))
})

const buttonLabel = computed(() => {
  return step.value < steps.value.length - 1 ? 'Далее →' : 'Завершить'
})

const onClose = () => {
  emit('close')
}

const onBack = () => {
  if (step.value > 0) {
    step.value = step.value - 1
  }
}

const onNext = () => {
  if (!isValid.value) return

  // @ts-expect-error
  form.value[current.value.id] = currentValue.value

  if (step.value < steps.value.length - 1) {
    step.value = step.value + 1
  } else {
    isDone.value = true
  }
}

const onSave = () => {
  mutate({ ...form.value })
}
</script>

<template>
  <AppModal>
    <div class="quiz-modal fin-modal-v2">
      <div
        class="quiz-progress-bar"
        :style="{ width: isDone ? '100%' : `${progress}%` }"
      />

      <button class="fin-modal-close" @click="onClose">✕</button>

      <div class="fin-v2-layout">
        <div class="fin-v2-cube-col">
          <div ref="cubeRef" class="cw">
            <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
              <defs>
                <clipPath id="portalClip">
                  <path
                    d="M-100 -100 H360 V175 H175 A 45 7 0 0 1 85 175 H-100 Z"
                  />
                </clipPath>
                <mask id="outsideMask">
                  <rect width="260" height="260" fill="white" />
                  <rect
                    x="90"
                    y="90"
                    width="80"
                    height="80"
                    rx="18"
                    fill="black"
                  />
                </mask>
              </defs>

              <ellipse id="portal-ellipse" cx="130" cy="175" rx="45" ry="7" />

              <g id="masked-content">
                <g id="cube-group">
                  <rect
                    id="main-rect"
                    x="90"
                    y="90"
                    width="80"
                    height="80"
                    rx="18"
                  />
                  <g id="cube-inner">
                    <rect
                      id="cube-inner-bg"
                      x="104"
                      y="104"
                      width="52"
                      height="52"
                      rx="10"
                      fill="#EEEDE9"
                    />
                    <path
                      class="check-path"
                      d="M115 132 L124 141 L146 119"
                      stroke="#0E0E0C"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <g id="disgruntled-face">
                      <rect
                        x="115"
                        y="125"
                        width="8"
                        height="3"
                        rx="1.5"
                        fill="#0E0E0C"
                      />
                      <rect
                        x="137"
                        y="125"
                        width="8"
                        height="3"
                        rx="1.5"
                        fill="#0E0E0C"
                      />
                      <path
                        d="M120 140 Q124 137 128 140 Q132 143 136 140 Q139 138 140 140"
                        stroke="#0E0E0C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div class="fin-v2-form">
          <FinancialModalDone
            v-if="isDone"
            :is-loading="isLoading"
            @save="onSave"
          />

          <template v-else>
            <div class="fin-v2-q">{{ current?.q }}</div>

            <div class="fin-v2-hint">{{ current?.hint }}</div>

            <div class="fin-input-wrap">
              <input
                v-model.number="currentValue"
                class="fin-input"
                type="text"
                inputMode="numeric"
                placeholder="0"
              />

              <span class="fin-input-unit">{{ current?.unit }}</span>
            </div>
            <div class="quiz-actions">
              <button v-if="step > 0" class="quiz-btn-skip" @click="onBack">
                ← Назад
              </button>

              <button
                class="quiz-btn-next"
                :disabled="!isValid"
                :style="{
                  opacity: isValid ? 1 : 0.4,
                  cursor: isValid ? 'pointer' : 'default'
                }"
                @click="onNext"
              >
                {{ buttonLabel }}
              </button>
            </div>

            <div class="fin-v2-counter">
              {{ step + 1 }} / {{ steps.length }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </AppModal>
</template>
