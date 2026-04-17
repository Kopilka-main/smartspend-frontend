<script setup lang="ts">
import { useSetCategories } from '~/queries/useSetCategories'
import { useMySets } from '~/features/account/queries/useMySets'
import { useSets } from '~/features/catalog/queries/useSets'
import type { CustomSet } from '~/types'

type ArticleSetPickerProps = {
  category: string
}

const props = defineProps<ArticleSetPickerProps>()

const { data: categoriesData } = useSetCategories()
const { data: mySetsData } = useMySets()

const mySets = computed(() => {
  return mySetsData.value ? mySetsData.value.data : []
})

const categories = computed(() => {
  return categoriesData.value ? categoriesData.value.data : []
})

const modelValue = defineModel<CustomSet[]>({ default: () => [] })

const isSetPickedOpened = ref(false)
const setType = ref('public') // personal

const selectedCategoryTitle = computed(() => {
  const existing = categories.value.find((cat) => cat.id === props.category)

  if (existing) {
    return existing.name
  }

  return ''
})

const isSetTaken = (set: any) => {
  return false
}

const dropdownElem = useTemplateRef('dropdownElem')

onClickOutside(dropdownElem, () => {
  isSetPickedOpened.value = false
})

const pickerSets = computed(() => {
  if (setType.value === 'personal') {
    return mySets.value
  }

  return []
})
</script>

<template>
  <div class="editor-meta-row" :style="{ alignItems: 'flex-start' }">
    <div class="editor-meta-label" :style="{ paddingTop: '6px' }">
      Наборы{{ modelValue.length > 0 ? ` · ${modelValue.length}/5` : '' }}
    </div>

    <div class="set-picker-wrap">
      <div
        v-for="linkedSet in modelValue"
        :key="linkedSet.id"
        class="linked-set-chip"
      >
        <div class="linked-set-dot" :style="{ background: linkedSet.color }" />

        <span class="linked-set-name">{{ linkedSet.title }}</span>

        <span class="linked-set-amount">
          {{ linkedSet.amount }}
        </span>

        <button class="linked-set-remove">
          <svg
            width="10"
            height="10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div v-if="modelValue.length < 5" class="set-picker-anchor">
        <button
          class="linked-set-add"
          @click="isSetPickedOpened = !isSetPickedOpened"
        >
          <svg
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Прикрепить набор
        </button>

        <div
          v-if="isSetPickedOpened"
          ref="dropdownElem"
          class="set-picker-panel"
        >
          <div class="set-picker-tabs">
            <button
              :class="`set-picker-tab${setType === 'personal' ? ' active' : ''}`"
              @click="setType = 'personal'"
            >
              Личные
            </button>

            <button
              :class="`set-picker-tab${setType === 'public' ? ' active' : ''}`"
              @click="setType = 'public'"
            >
              Публичные
            </button>
          </div>

          <div class="set-picker-list">
            <div v-if="pickerSets.length === 0" class="set-picker-empty">
              {{
                category
                  ? `Нет наборов для «${selectedCategoryTitle}»`
                  : 'Сначала выберите категорию'
              }}
            </div>

            <template v-else>
              <div
                v-for="set in pickerSets"
                :key="set.id"
                :class="`set-picker-item${isSetTaken(set) ? ' set-picker-item--added' : ''}`"
              >
                <div class="set-picker-info">
                  <span class="set-picker-name">{{ set.title }}</span>

                  <span class="set-picker-meta">
                    {{ set.amount }}
                  </span>
                </div>

                <span v-if="isSetTaken(set)" class="set-picker-check"> ✓ </span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
