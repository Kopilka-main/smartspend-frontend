<script setup lang="ts">
import { useBanks } from '~/features/cards/composables/useBanks'

import AppModal from '~/components/layout/AppModal.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isMyBanksActive = ref(false)
const onSelectMyBanks = () => {
  if (isMyBanksActive.value) {
    isMyBanksActive.value = false
  }

  isMyBanksActive.value = true
  // select my banks
}

const { banks } = useBanks()
const selectedBanks = ref<string[]>([])
const isBankSelected = (bank: string) => {
  return selectedBanks.value.includes(bank)
}
const onToggleSelectBank = (bank: string) => {
  if (isBankSelected(bank)) {
    selectedBanks.value = selectedBanks.value.filter((b) => b !== bank)
  } else {
    selectedBanks.value.push(bank)
  }
}
const onResetBanks = () => {
  selectedBanks.value = []
}

const CARD_TYPES_OPTIONS = [
  { value: 'debit', label: 'Дебетовая' },
  { value: 'credit', label: 'Кредитная' }
]
const selectedCardTypes = ref<string[]>([])
const isCardTypeSelected = (type: string) => {
  return selectedCardTypes.value.includes(type)
}
const onToggleSelectCardType = (type: string) => {
  if (isCardTypeSelected(type)) {
    selectedCardTypes.value = selectedCardTypes.value.filter((t) => t !== type)
  } else {
    selectedCardTypes.value.push(type)
  }
}
const onResetCardTypes = () => {
  selectedCardTypes.value = []
}

const CONDITIONS_OPTIONS = [
  { value: 'salary', label: 'Зарплатный проект' },
  { value: 'pension', label: 'Для пенсионеров' },
  { value: 'premium', label: 'Премиальная' },
  { value: 'subscription', label: 'С подпиской' },
  { value: 'no_extra', label: 'Без условий' }
]
const selectedConditions = ref<string[]>([])
const isConditionSelected = (condition: string) => {
  return selectedConditions.value.includes(condition)
}
const onToggleSelectCondition = (condition: string) => {
  if (isConditionSelected(condition)) {
    selectedConditions.value = selectedConditions.value.filter(
      (c) => c !== condition
    )
  } else {
    selectedConditions.value.push(condition)
  }
}
const onResetConditions = () => {
  selectedConditions.value = []
}

const totalActive = computed(() => {
  return (
    selectedCardTypes.value.length +
    selectedConditions.value.length +
    selectedBanks.value.length
  )
})

const onReset = () => {
  selectedCardTypes.value = []
  selectedBanks.value = []
  selectedConditions.value = []
}

const onShowResults = () => {}
</script>

<template>
  <AppModal>
    <div class="crd-modal">
      <div class="crd-modal-header">
        <span class="crd-modal-title">Фильтры</span>
        <button class="crd-modal-close" @click="emit('close')">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div class="crd-modal-body">
        <div class="crd-modal-section">
          <div class="crd-modal-section-hdr">
            <span class="crd-modal-section-title">Быстрый выбор</span>
          </div>

          <div class="crd-fchips">
            <button
              :class="`crd-fchip${isMyBanksActive ? ' active' : ''}`"
              @click="onSelectMyBanks"
            >
              Мои банки
            </button>
          </div>
        </div>

        <div class="crd-modal-section">
          <div class="crd-modal-section-hdr">
            <span class="crd-modal-section-title">Банки</span>

            <button
              v-if="selectedBanks.length > 0"
              class="crd-modal-section-reset"
              @click="onResetBanks"
            >
              Сбросить
            </button>
          </div>

          <input
            class="crd-bank-search"
            type="text"
            placeholder="Поиск банка..."
          />

          <div class="crd-fchips">
            <button
              v-for="bank in banks"
              :key="bank"
              :class="`crd-fchip${isBankSelected(bank) ? ' active' : ''}`"
              @click="onToggleSelectBank(bank)"
            >
              {{ bank }}
            </button>
          </div>
        </div>

        <div class="crd-modal-section">
          <div class="crd-modal-section-hdr">
            <span class="crd-modal-section-title">Тип карты</span>

            <button
              v-if="selectedCardTypes.length > 0"
              class="crd-modal-section-reset"
              @click="onResetCardTypes"
            >
              Сбросить
            </button>
          </div>

          <div class="crd-fchips">
            <button
              v-for="option in CARD_TYPES_OPTIONS"
              :key="option.value"
              :class="`crd-fchip${isCardTypeSelected(option.value) ? ' active' : ''}`"
              @click="onToggleSelectCardType(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div class="crd-modal-section">
          <div class="crd-modal-section-hdr">
            <span class="crd-modal-section-title">Дополнительные условия</span>

            <button
              v-if="selectedConditions.length > 0"
              class="crd-modal-section-reset"
              @click="onResetConditions"
            >
              Сбросить
            </button>
          </div>

          <div class="crd-fchips">
            <button
              v-for="option in CONDITIONS_OPTIONS"
              :key="option.value"
              :class="`crd-fchip${isConditionSelected(option.value) ? ' active' : ''}`"
              @click="onToggleSelectCondition(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="crd-modal-footer">
        <button
          class="crd-modal-reset"
          :disabled="totalActive === 0"
          @click="onReset"
        >
          Сбросить{{ totalActive > 0 ? ` (${totalActive})` : '' }}
        </button>

        <button class="crd-modal-apply" @click="onShowResults">
          Показать результаты
        </button>
      </div>
    </div>
  </AppModal>
</template>
