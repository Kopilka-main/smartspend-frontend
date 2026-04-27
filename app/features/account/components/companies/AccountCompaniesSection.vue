<script setup lang="ts">
import { useCategories } from '~/composables/useCategories'
import { useMyCompanies } from '~/features/companies/composables/useMyCompanies'

const router = useRouter()
const { categories } = useCategories()
const { myCompanies } = useMyCompanies()

const categoryGroups = computed(() => {
  return categories.value.map((category) => {
    return {
      label: category.name,
      items: myCompanies.value.filter(
        (company) => company.categoryId === category.id
      )
    }
  })
})

const onChangeCompanies = () => {
  router.push('/companies/pick')
}
</script>

<template>
  <div class="acc-panel">
    <div
      :style="{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: myCompanies.length > 0 ? '8px' : 0
      }"
    >
      <button class="acc-btn-primary" @click="onChangeCompanies">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
          />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>

        Изменить
      </button>
    </div>

    <div v-if="myCompanies.length === 0" class="acc-companies-empty">
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>

      <div class="acc-companies-empty-title">Компании не выбраны</div>

      <div class="acc-companies-empty-desc">
        Нажмите «Изменить», чтобы добавить компании в список
      </div>
    </div>

    <div v-else class="acc-companies-list">
      <div
        v-for="group in categoryGroups"
        :key="group.label"
        class="acc-companies-group"
      >
        <div class="acc-companies-group-label">{{ group.label }}</div>

        <div class="acc-companies-group-items">
          <div
            v-for="item in group.items"
            :key="item.id"
            class="acc-company-row"
          >
            <div class="acc-company-logo" :style="{ background: item.color }">
              {{ item.abbr }}
            </div>

            <span class="acc-company-name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
