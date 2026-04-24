<script setup lang="ts">
import AppModal from '~/components/layout/AppModal.vue'

const FREQ_FILTERS = [
  { value: 'monthly', label: 'Ежемесячно' },
  { value: 'end', label: 'В конце срока' }
]

const COND_FILTERS = [
  { value: 'new_client', label: 'Новый клиент' },
  { value: 'pension', label: 'Пенсионер' },
  { value: 'new_money', label: 'Новые деньги' },
  { value: 'insurance', label: 'Страховка / инвест' },
  { value: 'premium', label: 'Премиум' },
  { value: 'no_extra', label: 'Без доп. условий' }
]

const LIQUID_FILTERS = [
  { value: 'replenishment', label: 'С пополнением' },
  { value: 'no_replenishment', label: 'Без пополнения и снятия' }
]

// const myBanks = getMyCompanyBanks()
// if (myBanks.length === 0) return null
// const myBanksSet = new Set(myBanks)
// const isMyActive =
//   myBanks.length === filterBanks.size &&
//   myBanks.every((b) => filterBanks.has(b))

const totalActiveFilters = ref(0)

const filterBanks = ref([])
const visibleBanks = ref([])

const filterFreq = ref([])
const filterConds = ref([])
const filterLiquid = ref([])

const filtered = ref([])
</script>

<template>
  <AppModal>
    <div class="dep-modal">
      <div class="dep-modal-header">
        <span class="dep-modal-title">Фильтры</span>
        <button class="dep-modal-close">
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
            <!--            <FilterChip label="Мои компании" />-->
          </div>
        </div>

        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Банки</span>

            <button
              v-if="filterBanks.length > 0"
              class="dep-modal-section-reset"
            >
              Сбросить
            </button>

            <input
              class="dep-bank-search"
              type="text"
              placeholder="Поиск банка..."
            />
            <div class="dep-fchips">
              <span
                v-if="visibleBanks.length === 0"
                class="dep-bank-no-results"
              >
                Ничего не найдено
              </span>
              <template v-else>
                <!--                <FilterChip-->
                <!--                  v-for="bank in visibleBanks"-->
                <!--                  :key="bank.id"-->
                <!--                  label="{bank}"-->
                <!--                />-->
              </template>
            </div>
          </div>
        </div>

        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Выплата процентов</span>

            <button
              v-if="filterFreq.length > 0"
              class="dep-modal-section-reset"
            >
              Сбросить
            </button>
          </div>
          <div class="dep-fchips">
            <!--            <FilterChip-->
            <!--              key="{f.id}"-->
            <!--              label="{f.label}"-->
            <!--              active="{filterFreq.has(f.id)}"-->
            <!--            />-->
          </div>
        </div>

        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Дополнительные условия</span>
            <button
              v-if="filterConds.length > 0"
              class="dep-modal-section-reset"
            >
              Сбросить
            </button>
          </div>
          <div class="dep-fchips">
            <!--            <FilterChip-->
            <!--              key="{f.id}"-->
            <!--              label="{f.label}"-->
            <!--              active="{filterConds.has(f.id)}"-->
            <!--            />-->
          </div>
        </div>

        <div class="dep-modal-section">
          <div class="dep-modal-section-hdr">
            <span class="dep-modal-section-title">Пополнение и снятие</span>

            <button
              v-if="filterLiquid.length > 0"
              class="dep-modal-section-reset"
            >
              Сбросить
            </button>
          </div>
          <div class="dep-fchips">
            <!--            <FilterChip-->
            <!--              key="{f.id}"-->
            <!--              label="{f.label}"-->
            <!--              active="{filterLiquid.has(f.id)}"-->
            <!--            />-->
          </div>
        </div>
      </div>

      <div class="dep-modal-footer">
        <button class="dep-modal-reset">
          Сбросить{{ totalActiveFilters > 0 ? ` (${totalActiveFilters})` : '' }}
        </button>

        <button class="dep-modal-apply">
          Показать {{ filtered.length }} предложений
        </button>
      </div>
    </div>
  </AppModal>
</template>
