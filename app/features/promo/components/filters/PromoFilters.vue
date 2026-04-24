<script setup lang="ts">
import AppSimpleSelect from '~/components/ui/inputs/AppSimpleSelect.vue'
import PromoCompanySearch from '~/features/promo/components/filters/PromoCompanySearch.vue'
import CatalogCategoriesSelect from '~/features/catalog/components/CatalogCategoriesSelect.vue'
import PromoSortDropdown from '~/features/promo/components/filters/PromoSortDropdown.vue'

type PromoFiltersProps = {
  itemsLength: number
}

defineProps<PromoFiltersProps>()

const SCOPE_OPTIONS = [
  { value: 'all', label: 'Все компании' },
  { value: 'mine', label: 'Мои компании' }
]
const scopeModelValue = defineModel('scope', { default: 'all' })

const ACTS_FILTERS = [
  { value: 'all', label: 'Все' },
  { value: 'new_clients', label: 'Новым клиентам' },
  { value: 'referral', label: 'Приведи друга' },
  { value: 'birthday', label: 'День рождения' },
  { value: 'holiday', label: 'Праздник' },
  { value: 'regular', label: 'Обычная' }
]
const conditionModelValue = defineModel('condition', { default: 'all' })

const categoriesModelValue = defineModel('categories', { default: [] })

const companyModelValue = defineModel('company', { default: '' })

const sortModelValue = defineModel('sort', { default: 'newest' })

const hasFilters = computed(() => {
  return (
    scopeModelValue.value !== 'all' ||
    conditionModelValue.value !== 'all' ||
    categoriesModelValue.value.length > 0 ||
    companyModelValue.value.length > 0 ||
    sortModelValue.value !== 'newest'
  )
})

const noun = (n: number) => {
  const m = n % 10,
    c = n % 100
  if (m === 1 && c !== 11) return 'предложение'
  if (m >= 2 && m <= 4 && (c < 10 || c >= 20)) return 'предложения'
  return 'предложений'
}

const onReset = () => {
  scopeModelValue.value = 'all'
  conditionModelValue.value = 'all'
  categoriesModelValue.value = []
  companyModelValue.value = ''
  sortModelValue.value = 'newest'
}
</script>

<template>
  <div class="filters-sticky">
    <div class="filters-block">
      <PromoCompanySearch v-model="companyModelValue" />

      <div class="promo-selects-row">
        <div id="sp-promo-types">
          <AppSimpleSelect
            v-model="scopeModelValue"
            label="Компании"
            :items="SCOPE_OPTIONS"
          />
        </div>

        <div id="sp-promo-acts">
          <AppSimpleSelect
            v-model="conditionModelValue"
            label="Условия"
            :items="ACTS_FILTERS"
          />
        </div>

        <PromoSortDropdown v-model="sortModelValue" />
      </div>

      <div id="sp-promo-cats">
        <CatalogCategoriesSelect v-model="categoriesModelValue" />
      </div>

      <div v-if="hasFilters" class="filter-summary">
        <span>{{ itemsLength }} {{ noun(itemsLength) }}</span>
        <button class="reset-btn" @click="onReset">Сбросить</button>
      </div>
    </div>
  </div>
</template>
