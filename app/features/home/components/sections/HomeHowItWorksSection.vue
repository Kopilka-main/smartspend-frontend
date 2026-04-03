<script setup lang="ts">
import { useAuthModal } from '~/features/home/composables/useAuthModal'

const authModal = useAuthModal()

const onSignUp = () => {
  authModal.patchOptions({
    attrs: {
      mode: 'sign-up'
    }
  })

  authModal.open()
}
</script>

<template>
  <section id="landing-how" class="py-48 900:py-72">
    <div class="mx-auto max-w-[110rem] px-16 900:px-32">
      <div
        class="mb-16 inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-4 text-11 font-semibold uppercase tracking-[0.06em] text-accent-green"
      >
        Как это работает
      </div>
      <h2
        class="mb-0 text-32 font-bold leading-[1.2] tracking-[-0.03em] text-text"
      >
        Три шага до финансового порядка
      </h2>
      <div class="mt-36 grid grid-cols-1 gap-16 900:grid-cols-3">
        <div
          class="rounded-16 border border-border bg-surface p-28 shadow-main"
        >
          <div
            class="mb-20 inline-block rounded-8 border border-accent-green-border bg-accent-green-light px-10 py-3 font-secondary text-20 font-medium leading-[1.4] text-accent-green"
          >
            01
          </div>
          <h3 class="mb-8 text-15 font-semibold tracking-[-0.02em] text-text">
            Выберите наборы
          </h3>
          <p class="mb-16 text-13 leading-[1.6] text-text-2">
            50+ готовых наборов: еда, одежда, косметика, техника. Каждый
            рассчитан по принципу «максимум пользы — минимум затрат».
          </p>
          <span
            class="inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-3 text-11 font-medium text-accent-green"
            >→ Не нужно думать, что покупать</span
          >
        </div>
        <div
          class="rounded-16 border border-border bg-surface p-28 shadow-main"
        >
          <div
            class="mb-20 inline-block rounded-8 border border-accent-green-border bg-accent-green-light px-10 py-3 font-secondary text-20 font-medium leading-[1.4] text-accent-green"
          >
            02
          </div>
          <h3 class="mb-8 text-15 font-semibold tracking-[-0.02em] text-text">
            Добавьте в инвентарь
          </h3>
          <p class="mb-16 text-13 leading-[1.6] text-text-2">
            SmartSpend запустит таймеры. Система знает срок службы каждой вещи и
            предупредит заранее — не когда уже плохо, а когда самое время.
          </p>
          <span
            class="inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-3 text-11 font-medium text-accent-green"
            >→ Покупки перестают быть срочными</span
          >
        </div>
        <div
          class="rounded-16 border border-border bg-surface p-28 shadow-main"
        >
          <div
            class="mb-20 inline-block rounded-8 border border-accent-green-border bg-accent-green-light px-10 py-3 font-secondary text-20 font-medium leading-[1.4] text-accent-green"
          >
            03
          </div>
          <h3 class="mb-8 text-15 font-semibold tracking-[-0.02em] text-text">
            Копилка растёт сама
          </h3>
          <p class="mb-16 text-13 leading-[1.6] text-text-2">
            Всё, что сэкономлено — направляется в инвестиционное ядро. Со
            временем пассивный доход начинает оплачивать ваши удовольствия.
          </p>
          <span
            class="inline-block rounded-full border border-accent-green-border bg-accent-green-light px-10 py-3 text-11 font-medium text-accent-green"
            >→ Богатеете, не меняя образ жизни</span
          >
        </div>
      </div>

      <div
        class="mt-32 flex flex-col gap-24 rounded-16 border border-border bg-surface-2 px-40 py-32 900:flex-row 900:items-center 900:justify-between 900:px-40"
      >
        <div>
          <h3 class="mb-3 text-17 font-bold tracking-[-0.025em] text-text">
            Готовы попробовать?
          </h3>

          <p class="text-13 text-text-2">
            Регистрация занимает меньше минуты. Карта не нужна.
          </p>
        </div>

        <button
          type="button"
          class="shrink-0 w-max h-40 rounded-10 bg-text px-24 text-14 font-medium tracking-[-0.01em] text-surface transition-opacity duration-150 hover:opacity-80"
          @click="onSignUp"
        >
          Создать аккаунт →
        </button>
      </div>
    </div>
  </section>
</template>
