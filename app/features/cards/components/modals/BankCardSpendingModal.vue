<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

import { useEnvelopes } from '~/features/sets/composables/useEnvelopes'
import { useCategories } from '~/composables/useCategories'
import { useSpending } from '~/features/cards/composables/useSpending'
import { useUpdateSpending } from '~/features/cards/queries/useUpdateSpending'

const emit = defineEmits<{
  (e: 'close'): void
}>()

type SpendingCategory = {
  id: string
  name: string
  value: number
}

const { mutate } = useUpdateSpending(() => {
  emit('close')
})
const { envelopes } = useEnvelopes()
const { categories } = useCategories()
const { spending } = useSpending()

const spendingCategories = ref<SpendingCategory[]>([])

watch(
  () => [categories.value, spending.value],
  () => {
    spendingCategories.value = categories.value.map((category) => {
      let value = 0

      if (category.id in spending.value) {
        value = spending.value[category.id] || 0
      }

      return {
        id: category.id,
        name: category.name,
        value
      }
    })
  },
  {
    immediate: true
  }
)

const total = computed(() => {
  return spendingCategories.value.reduce((acc, cur) => acc + cur.value, 0)
})

const onReset = () => {
  spendingCategories.value = spendingCategories.value.map((category) => ({
    ...category,
    value: 0
  }))
}

const onLoadSpendingFromEnvelopes = () => {
  spendingCategories.value = spendingCategories.value.map((category) => {
    const envelopesWithCategory = envelopes.value.filter(
      (envelope) => envelope.categoryId === category.id
    )

    return {
      ...category,
      value: envelopesWithCategory.reduce((acc, cur) => acc + cur.amount, 0)
    }
  })
}

const onApply = () => {
  const spendingData: Record<string, number> = {}

  spendingCategories.value.forEach((category) => {
    if (category.value) {
      spendingData[category.id] = Number(category.value)
    }
  })

  mutate({ spending: spendingData })
}
</script>

<template>
  <AppModal>
    <div class="crd-modal">
      <div class="crd-modal-header">
        <span class="crd-modal-title">Расходы по категориям</span>

        <button class="crd-modal-close" @click="emit('close')">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div class="crd-modal-body">
        <p class="crd-modal-hint">
          Укажи среднемесячные расходы по каждой категории — SmartSpend
          рассчитает реальный кешбэк для каждой карты. Данные из конвертов
          подставлены автоматически.
        </p>

        <div class="crd-spend-list">
          <div
            v-for="category in spendingCategories"
            :key="category.id"
            class="crd-spend-row"
          >
            <span class="crd-spend-label">{{ category.name }}</span>

            <div class="crd-spend-input-wrap">
              <input
                v-model.number="category.value"
                class="crd-spend-input"
                type="text"
                inputMode="numeric"
                placeholder="0"
              />

              <span class="crd-spend-unit">₽</span>
            </div>
          </div>
        </div>

        <div class="crd-spend-total">
          <span class="crd-spend-total-label">Итого расходов</span>

          <span class="crd-spend-total-val">
            {{ formatMoney(total) }}
            <span class="crd-spend-total-sub"> / мес</span>
          </span>
        </div>
      </div>

      <div class="crd-modal-footer">
        <button class="crd-modal-reset" @click="onReset">Сбросить</button>

        <button
          v-if="envelopes.length"
          class="crd-modal-reset"
          @click="onLoadSpendingFromEnvelopes"
        >
          Из конвертов
        </button>

        <button class="crd-modal-apply" @click="onApply">Применить</button>
      </div>
    </div>
  </AppModal>
</template>
