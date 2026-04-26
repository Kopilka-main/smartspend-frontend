<script setup lang="ts">
import { useBanks } from '~/features/cards/composables/useBanks'

import AppModal from '~/components/layout/AppModal.vue'

type DepositsFiltersModalProps = {
  banks?: string[]
  frequency?: string[]
  conditions?: string[]
  liquidity?: string[]
}

const props = withDefaults(defineProps<DepositsFiltersModalProps>(), {
  banks: () => [],
  frequency: () => [],
  conditions: () => [],
  liquidity: () => []
})

const emit = defineEmits<{
  (e: 'close'): void
  (
    e: 'apply',
    payload: {
      banks: string[]
      frequency: string[]
      conditions: string[]
      liquidity: string[]
    }
  ): void
}>()

const { banks: banksResults, isLoading } = useBanks()
const selectedBanks = ref<string[]>([])

const isBankSelected = (bank: string) => {
  return selectedBanks.value.includes(bank)
}
const onSelectBank = (bank: string) => {
  if (isBankSelected(bank)) {
    selectedBanks.value = selectedBanks.value.filter((b) => b !== bank)
  } else {
    selectedBanks.value.push(bank)
  }
}

const isMyCompaniesActive = ref(false)

const FREQ_FILTERS = [
  { value: 'monthly', label: 'Ежемесячно' },
  { value: 'end', label: 'В конце срока' }
]

const selectedFrequency = ref<string[]>([])

const isFrequencySelected = (frequency: string) => {
  return selectedFrequency.value.includes(frequency)
}
const onSelectFrequency = (frequency: string) => {
  if (isFrequencySelected(frequency)) {
    selectedFrequency.value = selectedFrequency.value.filter(
      (f) => f !== frequency
    )
  } else {
    selectedFrequency.value.push(frequency)
  }
}

const COND_FILTERS = [
  { value: 'new_client', label: 'Новый клиент' },
  { value: 'pension', label: 'Пенсионер' },
  { value: 'new_money', label: 'Новые деньги' },
  { value: 'insurance', label: 'Страховка / инвест' },
  { value: 'premium', label: 'Премиум' },
  { value: 'no_extra', label: 'Без доп. условий' }
]

const selectedConditions = ref<string[]>([])

const isConditionSelected = (condition: string) => {
  return selectedConditions.value.includes(condition)
}
const onSelectCondition = (condition: string) => {
  if (isConditionSelected(condition)) {
    selectedConditions.value = selectedConditions.value.filter(
      (c) => c !== condition
    )
  } else {
    selectedConditions.value.push(condition)
  }
}

const LIQUID_FILTERS = [
  { value: 'replenishment', label: 'С пополнением' },
  { value: 'no_replenishment', label: 'Без пополнения и снятия' }
]

const selectedLiquid = ref<string[]>([])

const isLiquidSelected = (liquid: string) => {
  return selectedLiquid.value.includes(liquid)
}
const onSelectLiquid = (liquid: string) => {
  if (isLiquidSelected(liquid)) {
    selectedLiquid.value = selectedLiquid.value.filter((l) => l !== liquid)
  } else {
    selectedLiquid.value.push(liquid)
  }
}

const totalActiveFilters = computed(() => {
  return (
    selectedBanks.value.length +
    selectedFrequency.value.length +
    selectedConditions.value.length +
    selectedLiquid.value.length
  )
})

const onReset = () => {
  selectedBanks.value = []
  selectedFrequency.value = []
  selectedLiquid.value = []
  selectedConditions.value = []
}

const onSubmit = () => {
  emit('apply', {
    banks: selectedBanks.value,
    frequency: selectedFrequency.value,
    liquidity: selectedLiquid.value,
    conditions: selectedConditions.value
  })
}

onMounted(() => {
  selectedBanks.value = [...props.banks]
  selectedConditions.value = [...props.conditions]
  selectedLiquid.value = [...props.liquidity]
  selectedFrequency.value = [...props.frequency]
})
</script>

<template>
  <AppModal>
    <div class="dep-modal">
      <div class="dep-modal-header">
        <span class="dep-modal-title">Фильтры</span>

        <button class="dep-modal-close" @click="emit('close')">
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

      <div class="dep-modal-body">
        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Быстрый выбор</span>
          </div>

          <div class="dep-fchips">
            <button :class="`dep-fchip${isMyCompaniesActive ? ' active' : ''}`">
              Мои компании
            </button>
          </div>
        </div>

        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Банки</span>

            <button
              v-if="selectedBanks.length > 0"
              class="dep-modal-section-reset"
              @click="selectedBanks = []"
            >
              Сбросить
            </button>
          </div>

          <input
            class="dep-bank-search"
            type="text"
            placeholder="Поиск банка..."
          />

          <div class="dep-fchips">
            <span
              v-if="banksResults.length === 0 && !isLoading"
              class="dep-bank-no-results"
            >
              Ничего не найдено
            </span>

            <template v-else>
              <button
                v-for="bank in banksResults"
                :key="bank"
                :class="`dep-fchip${isBankSelected(bank) ? ' active' : ''}`"
                @click="onSelectBank(bank)"
              >
                {{ bank }}
              </button>
            </template>
          </div>
        </div>

        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Выплата процентов</span>

            <button
              v-if="selectedFrequency.length > 0"
              class="dep-modal-section-reset"
              @click="selectedFrequency = []"
            >
              Сбросить
            </button>
          </div>

          <div class="dep-fchips">
            <button
              v-for="item in FREQ_FILTERS"
              :key="item.value"
              :class="`dep-fchip${isFrequencySelected(item.value) ? ' active' : ''}`"
              @click="onSelectFrequency(item.value)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>

        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Дополнительные условия</span>
            <button
              v-if="selectedConditions.length > 0"
              class="dep-modal-section-reset"
              @click="selectedConditions = []"
            >
              Сбросить
            </button>
          </div>

          <div class="dep-fchips">
            <button
              v-for="item in COND_FILTERS"
              :key="item.value"
              :class="`dep-fchip${isConditionSelected(item.value) ? ' active' : ''}`"
              @click="onSelectCondition(item.value)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>

        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Пополнение и снятие</span>

            <button
              v-if="selectedLiquid.length > 0"
              class="dep-modal-section-reset"
              @click="selectedLiquid = []"
            >
              Сбросить
            </button>
          </div>

          <div class="dep-fchips">
            <button
              v-for="item in LIQUID_FILTERS"
              :key="item.value"
              :class="`dep-fchip${isLiquidSelected(item.value) ? ' active' : ''}`"
              @click="onSelectLiquid(item.value)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="dep-modal-footer">
        <button class="dep-modal-reset" @click="onReset">
          Сбросить{{ totalActiveFilters > 0 ? ` (${totalActiveFilters})` : '' }}
        </button>

        <button class="dep-modal-apply" @click="onSubmit">
          Показать предложения
        </button>
      </div>
    </div>
  </AppModal>
</template>
