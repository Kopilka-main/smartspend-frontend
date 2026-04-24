<script setup lang="ts">
import { useFinance } from '~/features/profile/composables/useFinance'
import { useEmoRate } from '~/features/profile/composables/useEmoRate'
import { useEnvelopes } from '~/features/sets/composables/useEnvelopes'
import { useCategories } from '~/composables/useCategories'

import ProfileCategoryCard from '~/features/profile/components/ProfileCategoryCard.vue'

const FEDERAL_PM_2026 = 20644 // Прожиточный минимум РФ 2026, ₽/мес
const SMART_SPEND_BASE = Math.round(FEDERAL_PM_2026 * 0.75) // 75% — конверты (без жилья ~25%)

const router = useRouter()
const { finance, grandTotal } = useFinance()
const { emoMonthly } = useEmoRate()
const { envelopes } = useEnvelopes()
const { categories } = useCategories()

const isEditMode = ref(false)

const categoriesWithEnvelopes = computed(() => {
  const result: any[] = []

  categories.value.forEach((category) => {
    const existingEnvelopesInCategory = envelopes.value.filter(
      (envelope) => envelope.categoryId === category.id
    )

    if (isEditMode.value) {
      result.push({
        id: category.id,
        name: category.name,
        items: existingEnvelopesInCategory
      })
    } else {
      if (existingEnvelopesInCategory.length > 0) {
        result.push({
          id: category.id,
          name: category.name,
          items: existingEnvelopesInCategory
        })
      }
    }
  })

  return result
})

const isEmpty = computed(() => {
  return categoriesWithEnvelopes.value.length === 0
})

const available = computed(() => {
  return SMART_SPEND_BASE + emoMonthly.value
})

const diff = computed(() => {
  return available.value - grandTotal.value
})

const over = computed(() => {
  return diff.value < 0
})

const isBsOpened = ref(false)
</script>

<template>
  <div id="sp-envelopes">
    <div class="section-heading">
      <div :style="{ display: 'flex', flexDirection: 'column', gap: '2px' }">
        <span class="section-title">Конверты и наборы</span>

        <div class="section-subtitle">
          Распределяйте бюджет по конвертам раз в месяц
        </div>
      </div>
    </div>

    <div class="env-budget-summary">
      <div
        :class="`env-bs-details${isBsOpened ? ' env-bs-details--open' : ''}`"
      >
        <div class="env-bs-details-inner" @click="isBsOpened = false">
          <div class="env-bs-row">
            <div class="env-bs-left">
              <span class="env-bs-label">Минимальные расходы</span>
              <span class="env-bs-hint">
                75% федерального прожиточного минимума · ₽
                {{ SMART_SPEND_BASE.toLocaleString('ru') }}
              </span>
            </div>

            <span class="env-bs-val">
              ₽{{ SMART_SPEND_BASE.toLocaleString('ru') }}
            </span>
          </div>

          <div class="env-bs-row">
            <div class="env-bs-left">
              <span class="env-bs-label">Доход от капитала</span>

              <span class="env-bs-hint">
                {{ Math.round(Number(finance.emoRate) * 100) }}% годовых ·
                капитал {{ finance.capital.toLocaleString('ru') }} ₽
              </span>
            </div>

            <span class="env-bs-val env-bs-val--income">
              + ₽{{ emoMonthly.toLocaleString('ru') }}
            </span>
          </div>
          <div class="env-bs-row">
            <div class="env-bs-left">
              <span class="env-bs-label">План расходов по наборам</span>
              <span class="env-bs-hint">сумма активных конвертов</span>
            </div>

            <span class="env-bs-val env-bs-val--minus">
              − ₽{{ grandTotal.toLocaleString('ru') }}
            </span>
          </div>
        </div>
      </div>
      <button
        :class="`env-bs-row env-bs-row--total${over ? ' env-bs-row--over' : ''}`"
        @click="isBsOpened = !isBsOpened"
      >
        <span class="env-bs-left">
          <span class="env-bs-label">
            {{ over ? 'Превышен расход' : 'Ещё можно потратить' }}
          </span>

          <span class="env-bs-hint">
            {{
              over
                ? 'нажмите чтобы увидеть разбивку'
                : 'нажмите чтобы увидеть разбивку'
            }}
          </span>
        </span>

        <span class="env-bs-total-right">
          <span class="env-bs-val env-bs-val--total">
            {{ over ? '−' : '+' }}₽{{ Math.abs(diff).toLocaleString('ru') }}
          </span>

          <svg
            :class="`env-bs-chevron${isBsOpened ? ' env-bs-chevron--open' : ''}`"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </span>
      </button>
    </div>

    <button
      id="sp-btn-envelopes"
      :class="`whisper-add-cta${isEditMode ? ' whisper-add-cta--active' : ''}`"
      @click="isEditMode = !isEditMode"
    >
      <template v-if="isEditMode">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>

        Готово
      </template>
      <template v-else>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
          />
        </svg>

        Редактировать наборы
      </template>
    </button>

    <div class="envelopes-list">
      <div v-if="isEmpty" class="envelopes-empty">
        <div class="env-empty-icon">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <rect
              x="6"
              y="14"
              width="40"
              height="28"
              rx="5"
              fill="var(--surface-2)"
              stroke="var(--border)"
              strokeWidth="1.5"
            />
            <path
              d="M6 20l20 13 20-13"
              stroke="var(--border)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="38"
              cy="36"
              r="9"
              fill="var(--bg)"
              stroke="var(--border)"
              strokeWidth="1.5"
            />
            <path
              d="M38 32v4M38 38v.5"
              stroke="var(--accent-green)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div class="env-empty-title">Конверты пока пусты</div>

        <div class="env-empty-desc">
          Добавьте готовые наборы из каталога — и SmartSpend автоматически
          рассчитает ваши расходы по категориям и покажет сколько откладывать
          каждый месяц.
        </div>

        <div class="env-empty-steps">
          <div class="env-empty-step">
            <div class="env-empty-step-num">1</div>
            <div class="env-empty-step-text">
              Откройте каталог и выберите набор, подходящий вашему образу жизни
            </div>
          </div>

          <div class="env-empty-step">
            <div class="env-empty-step-num">2</div>
            <div class="env-empty-step-text">
              Нажмите «Добавить в конверт» — набор появится в нужной категории
            </div>
          </div>

          <div class="env-empty-step">
            <div class="env-empty-step-num">3</div>
            <div class="env-empty-step-text">
              Укажите доход в настройках — и система покажет, сколько остаётся
              на накопления
            </div>
          </div>
        </div>

        <button class="env-empty-cta">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>

          Перейти в каталог
        </button>
      </div>

      <ProfileCategoryCard
        v-for="category in categoriesWithEnvelopes"
        :key="category.id"
        :category="category"
        :is-edit-mode="isEditMode"
      />
    </div>

    <div id="sp-cards" class="profile-tool-row" @click="router.push('/cards')">
      <div class="profile-tool-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      </div>

      <div class="profile-tool-text">
        <div class="profile-tool-title">Подобрать банковскую карту</div>
        <div class="profile-tool-desc">Кешбэк под ваши категории трат</div>
      </div>

      <svg
        class="profile-tool-chevron"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  </div>
</template>
