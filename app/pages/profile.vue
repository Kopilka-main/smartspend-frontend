<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

import ProfileFinancialCard from '~/features/profile/components/finance/ProfileFinancialCard.vue'
import ProfileFinancialSection from '~/features/profile/components/finance/ProfileFinancialSection.vue'

import ProfileCapitalSection from '~/features/profile/components/ProfileCapitalSection.vue'
import ProfileSetsSection from '~/features/profile/components/ProfileSetsSection.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Профиль'
})

const { currentUser } = useCurrentUser()
</script>

<template>
  <main class="min-w-0 w-full max-w-860 mx-auto">
    <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
      <div class="flex flex-col gap-16 pb-4">
        <div class="flex flex-col gap-5">
          <div
            class="flex items-center gap-10 text-26 font-bold leading-none tracking-[-0.03em]"
          >
            Привет, {{ currentUser?.displayName }}

            <button
              type="button"
              class="w-22 h-22 rounded-full bg-surface-2 border-1.5 border-border text-text-3 text-12 font-bold font-secondary inline-flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-150 leading-none hover:border-accent-green hover:text-accent-green hover:bg-accent-green-light"
              title="Как устроена страница"
            >
              ?
            </button>
          </div>

          <div
            class="entry-subtitle text-[14px] text-text-2 mt-1.25 tracking-[-0.01em] leading-[1.4]"
          >
            Укажи доход в разделе «Финансовая картина» — и система покажет,
            сколько ты откладываешь каждый месяц.
          </div>
        </div>

        <ProfileFinancialCard />
      </div>

      <ProfileFinancialSection />

      <ProfileSetsSection />
    </div>
  </main>
</template>
