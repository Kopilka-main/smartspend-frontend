<script setup lang="ts">
import AppEmpty from '~/components/layout/AppEmpty.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-16">
    <!-- Tab header -->
    <div class="mt-4 flex items-center justify-between">
      <span class="text-14 font-semibold tracking-[-0.01em] text-text-2">
        Авторы и блоги, на которые вы подписаны
      </span>
    </div>

    <AppEmpty
      title="Нет подписок"
      description="Подписывайтесь на авторов, чтобы следить за их статьями и наборами"
    />

    <!-- Tab cards -->
    <!--    <div class="grid grid-cols-1 gap-16">-->
    <!--      <div-->
    <!--        class="cursor-pointer rounded-12 border border-border bg-surface p-20 shadow-app-sm"-->
    <!--      >-->
    <!--        <div class="mb-10 flex items-center gap-12">-->
    <!--          <div-->
    <!--            class="flex h-40 w-40 shrink-0 items-center justify-center rounded-10 bg-surface-3 text-18 font-semibold text-text-2"-->
    <!--          >-->
    <!--            АС-->
    <!--          </div>-->
    <!--          <div class="flex-1">-->
    <!--            <div class="text-16 font-semibold tracking-[-0.01em] text-text">-->
    <!--              Анна Соколова-->
    <!--            </div>-->
    <!--            <div class="mt-2 text-12 text-text-3">-->
    <!--              @anna_sokolova · 2 400 подписчиков-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="mb-10 text-13 leading-normal text-text-3">-->
    <!--          Нутрициолог. Пишу о здоровом питании и осознанном потреблении. Набор-->
    <!--          «Правильное питание» — мой флагман.-->
    <!--        </div>-->
    <!--        <div-->
    <!--          class="flex gap-16 border-t border-border pt-12 text-12 text-text-2"-->
    <!--        >-->
    <!--          <span>24 статей</span>-->
    <!--          <span>8 наборов</span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
