<script setup lang="ts">
import AppPageHeader from '~/components/layout/AppPageHeader.vue'
import AppEmpty from '~/components/layout/AppEmpty.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Уведомления'
})
</script>

<template>
  <main class="min-w-0 w-full max-w-720 mx-auto">
    <div class="pt-64 pb-80 px-16 md:p-32 grid grid-cols-1 gap-36">
      <!-- Inner -->

      <div class="flex flex-col gap-16 pb-4">
        <AppPageHeader
          title="Уведомления"
          subTitle="Новости, ответы и напоминания"
        />

        <!-- Tabs -->
        <div class="flex flex-wrap items-center gap-8 pb-2">
          <button
            type="button"
            class="h-30 rounded-full border border-accent-green-border bg-accent-green-light text-accent-green px-12 text-12 font-medium"
          >
            Все
          </button>
          <button
            type="button"
            class="h-30 rounded-full border border-border bg-surface-2 px-12 text-12 text-text-2 hover:bg-surface hover:text-text"
          >
            Подписки
          </button>
          <button
            type="button"
            class="h-30 rounded-full border border-border bg-surface-2 px-12 text-12 text-text-2 hover:bg-surface hover:text-text"
          >
            Ответы
          </button>
          <button
            type="button"
            class="h-30 rounded-full border border-border bg-surface-2 px-12 text-12 text-text-2 hover:bg-surface hover:text-text"
          >
            Напоминания
          </button>
        </div>

        <AppEmpty
          title="Нет уведомлений"
          description="В этой категории пока ничего нет"
        />

        <!-- Items -->
        <!--        <div id="sp-notif-list" class="flex flex-col">-->
        <!--          <div-->
        <!--            class="text-11 font-semibold tracking-[0.06em] uppercase text-text-3 mt-0 mb-2"-->
        <!--          >-->
        <!--            Прочитанные-->
        <!--          </div>-->

        <!--          <div-->
        <!--            class="flex items-start gap-12 px-16 py-14 rounded-10 bg-surface shadow-app-sm mb-6 cursor-pointer transition-colors duration-120 hover:bg-surface-2"-->
        <!--          >-->
        <!--            <div class="flex flex-col items-center gap-4 shrink-0">-->
        <!--              <div-->
        <!--                class="w-40 h-40 rounded-full bg-surface-3 border border-border flex items-center justify-center text-text-3"-->
        <!--              >-->
        <!--                <svg viewBox="0 0 16 16" fill="none" width="18" height="18">-->
        <!--                  <rect-->
        <!--                    x="2"-->
        <!--                    y="2"-->
        <!--                    width="5"-->
        <!--                    height="5"-->
        <!--                    rx="1.5"-->
        <!--                    fill="currentColor"-->
        <!--                    opacity="0.8"-->
        <!--                  ></rect>-->
        <!--                  <rect-->
        <!--                    x="9"-->
        <!--                    y="2"-->
        <!--                    width="5"-->
        <!--                    height="5"-->
        <!--                    rx="1.5"-->
        <!--                    fill="currentColor"-->
        <!--                    opacity="0.4"-->
        <!--                  ></rect>-->
        <!--                  <rect-->
        <!--                    x="2"-->
        <!--                    y="9"-->
        <!--                    width="5"-->
        <!--                    height="5"-->
        <!--                    rx="1.5"-->
        <!--                    fill="currentColor"-->
        <!--                    opacity="0.4"-->
        <!--                  ></rect>-->
        <!--                  <rect-->
        <!--                    x="9"-->
        <!--                    y="9"-->
        <!--                    width="5"-->
        <!--                    height="5"-->
        <!--                    rx="1.5"-->
        <!--                    fill="currentColor"-->
        <!--                    opacity="0.8"-->
        <!--                  ></rect>-->
        <!--                </svg>-->
        <!--              </div>-->
        <!--            </div>-->

        <!--            <div class="flex-1 min-w-0">-->
        <!--              <div-->
        <!--                class="text-13 font-semibold tracking-[-0.01em] leading-[1.3] text-text"-->
        <!--              >-->
        <!--                Добро пожаловать в SmartSpend!-->
        <!--              </div>-->
        <!--              <div class="mt-2 text-12 text-text-2 leading-[1.4]">-->
        <!--                Заполните профиль и добавьте первые наборы в инвентарь-->
        <!--              </div>-->
        <!--              <div class="mt-4 text-11 text-text-3 font-secondary">-->
        <!--                только что-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </main>
</template>
