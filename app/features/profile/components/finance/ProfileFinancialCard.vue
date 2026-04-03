<script setup lang="ts"></script>

<template>
  <div
    class="flex items-stretch gap-0 bg-surface rounded-16 shadow-main overflow-hidden"
  >
    <div class="flex-1 py-16 px-20 flex flex-col gap-3">
      <div class="text-11 font-medium text-text-3 uppercase tracking-[0.06em]">
        Доход
      </div>
      <div
        class="text-text font-secondary text-20 font-medium tracking-[-0.02em] leading-[1.1]"
      >
        0 ₽
      </div>
    </div>

    <div class="w-1 bg-border shrink-0"></div>

    <div class="flex-1 py-16 px-20 flex flex-col gap-3">
      <div class="text-11 font-medium text-text-3 uppercase tracking-[0.06em]">
        Расходы
      </div>
      <div
        class="text-text font-secondary text-20 font-medium tracking-[-0.02em] leading-[1.1]"
      >
        0 ₽
      </div>
      <!--              <div class="text-11 text-text-3">29% дохода</div>-->
    </div>

    <div class="w-1 bg-border shrink-0"></div>

    <div class="flex-1 py-16 px-20 flex flex-col gap-3 bg-accent-green-light">
      <div class="text-11 font-medium text-text-3 uppercase tracking-[0.06em]">
        Откладывается
      </div>
      <div
        class="font-secondary text-20 font-medium tracking-[-0.02em] leading-[1.1] text-accent-green"
      >
        0 ₽
      </div>

      <!--              <div class="text-11 text-accent-green-slight">71% дохода</div>-->
    </div>
  </div>
</template>