<script setup lang="ts">
import { useCategories } from '~/composables/useCategories'
import { useMyCompanies } from '~/features/companies/composables/useMyCompanies'
import AccountCompaniesEmpty from '~/features/account/components/companies/AccountCompaniesEmpty.vue'

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

    <AccountCompaniesEmpty v-if="myCompanies.length === 0" />

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
