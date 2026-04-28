<script setup lang="ts">
import type { InventoryItem } from '~/types'

type InventoryItemDetailsProps = {
  item: InventoryItem
}

const props = defineProps<InventoryItemDetailsProps>()

const isMenuOpened = ref(false)
const isEditingParams = ref(false)
const group = ref<any>(null)
const paramForm = ref({})
const hasSet = computed(() => {
  return !!props.item.setId
})
const remainderText = computed(() => {
  return ''
})

const consumableVals = ref({
  pricePerBulk: '',
  bulkUnit: ''
})

const formatNoteDate = (dateStr: string) => {
  const d = new Date(dateStr + 'T00:00:00')
  const todayStr = new Date().toISOString().slice(0, 10)
  const yStr = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  if (dateStr === todayStr) return 'сегодня'
  if (dateStr === yStr) return 'вчера'
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
}

const notes = ref<any[]>([])
const todayNote = ref<any>(null)
</script>

<template>
  <div class="ipanel">
    <div class="ipanel-header">
      <div class="ipanel-title">{{ item.name }}</div>
      <div class="ipanel-menu-wrap">
        <button class="ipanel-menu-btn" @click="isMenuOpened = !isMenuOpened">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>

        <div v-if="isMenuOpened" class="ipanel-menu-dropdown">
          <button v-if="!hasSet" class="ipanel-menu-item">
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Редактировать параметры
          </button>

          <button v-if="hasSet" class="ipanel-menu-item">
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
              />
              <path
                d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
              />
              <line x1="2" y1="2" x2="22" y2="22" />
            </svg>
            Открепить от набора
          </button>
          <button v-else class="ipanel-menu-item">
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
              />
              <path
                d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
              />
            </svg>
            Прикрепить к набору
          </button>

          <div class="ipanel-menu-divider" />

          <button class="ipanel-menu-item ipanel-menu-item--danger">
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4h6v2" />
            </svg>

            Удалить позицию
          </button>
        </div>
      </div>

      <button class="ipanel-close">
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <div class="ipanel-meta">
      <button v-if="group" class="ipanel-cat-badge ipanel-filter-btn">
        {{ group.name }}
      </button>

      <button v-if="hasSet" class="ipanel-set-badge-link ipanel-filter-btn">
        {{ item.setId }}
      </button>
      <span v-else class="inv-personal-badge">Личное</span>
    </div>

    <div
      :class="`ipanel-remainder ipanel-remainder--${item.paused ? 'paused' : item.status}`"
    >
      {{ item.paused ? 'на паузе' : remainderText }}

      <button
        v-if="item.paused"
        class="inv-launch-btn"
        :style="{ marginLeft: '8px' }"
      >
        <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>

        Запустить
      </button>
    </div>

    <div v-if="item.type !== 'consumable'" class="ipanel-wear-section">
      <div class="ipanel-wear-top-row">
        <div class="ipanel-wear-date-cell">
          <div class="ipanel-cell-lbl">Дата покупки</div>

          <input class="ipanel-date-input" type="date" />
        </div>

        <div class="ipanel-wear-life-cell">
          <div class="ipanel-cell-lbl">Срок использования</div>

          <div class="ipanel-cell-val">
            {item.wearLifeWeeks}&thinsp;нед. ({wearVals.lifeYears}&thinsp;г.)
          </div>
        </div>
      </div>
      <div class="ipanel-wear-rows">
        <div class="ipanel-wear-row">
          <span class="ipanel-wear-row-lbl">Стоимость</span>

          <span class="ipanel-wear-row-val mono">
            ₽{(item.price || 0).toLocaleString('ru')}
          </span>
        </div>
        <div class="ipanel-wear-row">
          <span class="ipanel-wear-row-lbl">
            Остаточная стоимость

            <span class="inv-detail-pct"> {wearVals.residualPct}% </span>
          </span>

          <span class="ipanel-wear-row-val mono">
            ₽{wearVals.residualVal.toLocaleString('ru')}
          </span>
        </div>
        <div class="ipanel-wear-row">
          <span class="ipanel-wear-row-lbl">Стоимость/мес.</span>

          <span class="ipanel-wear-row-val mono">
            ₽{wearVals.monthlyAmort.toLocaleString('ru')}
          </span>
        </div>
      </div>
    </div>
    <div v-else class="ipanel-consumable-section">
      <div class="ipanel-stepper-block">
        <div class="ipanel-cell-lbl">ОСТАТОК, {{ item.unit }}</div>

        <div class="ipanel-stepper">
          <button class="ipanel-stepper-btn">−</button>

          <input class="ipanel-stepper-input" type="number" />

          <span class="ipanel-stepper-unit">{{ item.unit }}</span>

          <button class="ipanel-stepper-btn">+</button>
        </div>
      </div>

      <div class="ipanel-wear-rows">
        <div class="ipanel-wear-row">
          <span class="ipanel-wear-row-lbl">Потребность/мес.</span>
          <span class="ipanel-wear-row-val mono">
            {consumableVals.monthlyQty}&thinsp;{unit}
          </span>
        </div>

        <div class="ipanel-wear-row">
          <span class="ipanel-wear-row-lbl">Стоимость/мес.</span>
          <span class="ipanel-wear-row-val mono">
            ₽{consumableVals.monthlyBudget.toLocaleString('ru')}
          </span>
        </div>
        <div class="ipanel-wear-row">
          <span class="ipanel-wear-row-lbl">Цена за {{ item.unit }}</span>

          <span class="ipanel-wear-row-val mono">
            ₽{consumableVals.pricePerUnit}

            <span
              v-if="consumableVals.pricePerBulk"
              class="ipanel-wear-row-sub"
            >
              ₽{consumableVals.pricePerBulk}/{consumableVals.bulkUnit}
            </span>
          </span>
        </div>
      </div>
    </div>

    <div
      v-if="isEditingParams && paramForm"
      class="inv-add-form"
      :style="{ margin: '0 0 12px' }"
    >
      <div class="inv-add-form-title">Редактировать параметры</div>

      <div class="inv-add-form-grid">
        <div class="inv-add-form-field" :style="{ gridColumn: '1/-1' }">
          <div class="inv-add-form-lbl">Название</div>

          <input class="inv-add-form-input" placeholder="Название" />
        </div>

        <div class="inv-add-form-field" :style="{ gridColumn: '1/-1' }">
          <div class="inv-add-form-lbl">Цена, руб.</div>

          <input
            class="inv-add-form-input"
            placeholder="0"
            inputMode="numeric"
          />
        </div>

        <template v-if="item.type === 'consumable'">
          <div class="inv-add-form-field">
            <div class="inv-add-form-lbl">Объём / масса</div>

            <input
              class="inv-add-form-input"
              type="number"
              placeholder="500"
              max="999999"
            />
          </div>

          <div class="inv-add-form-field">
            <div class="inv-add-form-lbl">Единица</div>
            <select class="inv-add-form-select">
              <option value="г">г</option>
              <option value="мл">мл</option>
              <option value="шт">шт</option>
              <option value="кап">кап</option>
              <option value="рул">рул</option>
            </select>
          </div>

          <div class="inv-add-form-field">
            <div class="inv-add-form-lbl">Расход</div>
            <input
              class="inv-add-form-input"
              type="number"
              placeholder="10"
              step="0.1"
              max="999999"
            />
          </div>

          <div class="inv-add-form-field">
            <div class="inv-add-form-lbl">Период расхода</div>

            <select class="inv-add-form-select">
              <option value="day">в день</option>
              <option value="week">в неделю</option>
              <option value="month">в месяц</option>
            </select>
          </div>
        </template>

        <template v-else>
          <div class="inv-add-form-field">
            <div class="inv-add-form-lbl">Срок службы</div>

            <input
              class="inv-add-form-input"
              type="number"
              placeholder="1"
              max="999999"
            />
          </div>

          <div class="inv-add-form-field">
            <div class="inv-add-form-lbl">Единица срока</div>

            <select class="inv-add-form-select">
              <option value="days">дней</option>
              <option value="weeks">недель</option>
              <option value="months">месяцев</option>
              <option value="years">лет</option>
            </select>
          </div>
        </template>
      </div>

      <div class="inv-add-form-actions">
        <button class="inv-add-cancel">Отмена</button>

        <button class="inv-add-submit">Сохранить</button>
      </div>
    </div>

    <div class="ipanel-divider" />

    <div class="inv-notes-section">
      <div class="inv-notes-label">Заметки</div>

      <div v-for="note in notes" :key="note.id" class="inv-notes-entry">
        <div class="inv-notes-entry-date">{{ formatNoteDate(note.date) }}</div>
        <div class="inv-notes-entry-text">{{ note.text }}</div>
      </div>

      <div v-if="todayNote" class="inv-notes-entry-date">
        {{ formatNoteDate(todayNote.date) }}
      </div>

      <textarea class="inv-notes-textarea" placeholder="Добавьте заметку..." />
    </div>
  </div>
</template>
