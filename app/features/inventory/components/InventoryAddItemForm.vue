<script setup lang="ts">
import { useForm } from 'vee-validate'
import { useCategories } from '~/composables/useCategories'
import type { CustomSet, SetCategory } from '~/types'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { categories } = useCategories()

const selectedCategory = ref<SetCategory | null>(null)
const type = ref('consumable')

const categorySets = computed<CustomSet[]>(() => {
  return []
})
</script>

<template>
  <div class="inv-add-panel">
    <div class="inv-add-panel-header">
      <span class="inv-add-panel-title">Новая позиция</span>

      <button class="ipanel-close" @click="emit('close')">
        <svg
          width="14"
          height="14"
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

    <div v-if="!selectedCategory" class="inv-add-group-chooser">
      <div class="inv-add-group-chooser-title">Выберите категорию</div>

      <div class="inv-add-group-list">
        <button
          v-for="category in categories"
          :key="category.id"
          class="inv-add-group-btn"
          @click="selectedCategory = category"
        >
          {{ category.name }}

          <svg
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            :style="{ marginLeft: 'auto', color: 'var(--text-3)' }"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>

    <div v-else>
      <div class="inv-add-group-back">
        <button class="inv-add-group-back-btn" @click="selectedCategory = null">
          <svg
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>

          Категория: {{ selectedCategory.name }}
        </button>
      </div>

      <div class="inv-add-form">
        <div class="inv-add-form-grid">
          <div class="inv-add-form-field" :style="{ gridColumn: '1/-1' }">
            <div class="inv-add-form-lbl">Название</div>

            <input
              class="inv-add-form-input"
              :placeholder="
                type === 'wear'
                  ? 'Например: Зимние ботинки'
                  : 'Например: Оливковое масло'
              "
            />
          </div>

          <div class="inv-add-form-field">
            <div class="inv-add-form-lbl">Тип</div>

            <select v-model="type" class="inv-add-form-select">
              <option value="consumable">Расходник</option>
              <option value="wear">Вещь (износ)</option>
            </select>
          </div>

          <div class="inv-add-form-field">
            <div class="inv-add-form-lbl">Цена, руб.</div>

            <input class="inv-add-form-input" placeholder="0" />
          </div>

          <template v-if="type === 'consumable'">
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
                value="{form.dailyUse}"
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

            <div class="inv-add-form-field">
              <div class="inv-add-form-lbl">Дата покупки</div>

              <input class="inv-add-form-input" type="date" />
            </div>
          </template>

          <div
            v-if="categorySets.length"
            class="inv-add-form-field"
            :style="{ gridColumn: '1/-1' }"
          >
            <div class="inv-add-form-lbl">
              Привязать к набору (необязательно)
            </div>

            <select class="inv-add-form-select">
              <option value="">Личное — без набора</option>

              <option v-for="set in categorySets" :key="set.id" :value="set.id">
                {{ set.title }}
              </option>
            </select>
          </div>
        </div>

        <div class="inv-add-form-actions">
          <button class="inv-add-cancel" @click="emit('close')">Отмена</button>

          <button class="inv-add-submit">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>
