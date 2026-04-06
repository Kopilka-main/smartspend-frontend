<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as v from 'valibot'
import { toTypedSchema } from '@vee-validate/valibot'

type NewItem = {
  name: string
  basePrice: number
  itemType: string
}

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'add', newItem: NewItem): void
}>()

const itemType = ref('consumable')

const isConsumable = computed(() => {
  return itemType.value === 'consumable'
})

const validationSchema = computed(() => {
  if (isConsumable.value) {
    return toTypedSchema(
      v.object({
        name: v.pipe(v.string()),
        basePrice: v.pipe(v.number()),
        unit: v.pipe(v.optional(v.string())),
        qty: v.pipe(v.optional(v.number())),
        wearLifeWeeks: v.pipe(v.optional(v.number())),
        plannedPrice: v.pipe(v.optional(v.string())),
        purchaseDate: v.pipe(v.optional(v.string())),
        dailyUse: v.pipe(v.optional(v.number()))
      })
    )
  } else {
    return toTypedSchema(
      v.object({
        name: v.pipe(v.string()),
        basePrice: v.pipe(v.number()),
        unit: v.pipe(v.optional(v.string())),
        qty: v.pipe(v.optional(v.number())),
        wearLifeWeeks: v.pipe(v.optional(v.number())),
        plannedPrice: v.pipe(v.optional(v.number(), 0)),
        purchaseDate: v.pipe(v.optional(v.string())),
        dailyUse: v.pipe(v.optional(v.number()))
      })
    )
  }
})

const { defineField, handleSubmit } = useForm({
  validationSchema
})

const [name, nameProps] = defineField('name')
const [basePrice, basePriceProps] = defineField('basePrice')
const [unit, unitProps] = defineField('unit')
const [qty, qtyProps] = defineField('qty')
const [wearLifeWeeks, wearLifeWeeksProps] = defineField('wearLifeWeeks')
const [plannedPrice, plannedPriceProps] = defineField('plannedPrice')
const [purchaseDate, purchaseDateProps] = defineField('purchaseDate')
const [dailyUse, dailyUseProps] = defineField('dailyUse')

const namePlaceholder = computed(() => {
  return isConsumable.value ? 'Например: Оливковое масло' : 'Например: Куртка'
})

const onSubmit = handleSubmit((values) => {
  emit('add', { ...values, itemType: itemType.value })
})

const onCancel = () => {
  emit('cancel')
}
</script>

<template>
  <div class="border-t border-border bg-surface-2 px-16 py-16">
    <div
      class="mb-12 text-12 font-semibold uppercase tracking-[0.04em] text-text-2"
    >
      Новая позиция
    </div>
    <div class="grid grid-cols-2 gap-10">
      <div class="col-span-2 flex flex-col gap-4">
        <div
          class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
        >
          Название
        </div>

        <input
          v-model="name"
          v-bind="nameProps"
          class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
          :placeholder="namePlaceholder"
        />
      </div>

      <div class="flex flex-col gap-4">
        <div
          class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
        >
          Тип
        </div>

        <select
          class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
          v-model="itemType"
        >
          <option value="consumable">Расходник</option>
          <option value="wear">Вещь (износ)</option>
        </select>
      </div>

      <div class="flex flex-col gap-4">
        <div
          class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
        >
          Цена, руб.
        </div>

        <input
          v-model="basePrice"
          v-bind="basePriceProps"
          class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
          placeholder="0"
          type="number"
        />
      </div>

      <template v-if="isConsumable">
        <div class="flex flex-col gap-4">
          <div
            class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Объём / масса
          </div>

          <input
            v-model="qty"
            v-bind="qtyProps"
            class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
            placeholder="500"
            type="number"
          />
        </div>

        <div class="flex flex-col gap-4">
          <div
            class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Единица
          </div>

          <select
            v-model="unit"
            v-bind="unitProps"
            class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
          >
            <option value="г">г</option>
            <option value="мл">мл</option>
            <option value="шт">шт</option>
            <option value="кап">кап</option>
            <option value="рул">рул</option>
          </select>
        </div>

        <div class="flex flex-col gap-4">
          <div
            class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Расход в день
          </div>

          <input
            v-model="dailyUse"
            v-bind="dailyUseProps"
            class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
            placeholder="10"
            step="0.1"
            type="number"
          />
        </div>
      </template>

      <template v-else>
        <div class="flex flex-col gap-4">
          <div
            class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Срок службы, нед.
          </div>

          <input
            v-model="wearLifeWeeks"
            v-bind="wearLifeWeeksProps"
            class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
            placeholder="52"
            type="number"
          />
        </div>

        <div class="flex flex-col gap-4">
          <div
            class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Плановая цена, руб.
          </div>

          <input
            v-model="plannedPrice"
            v-bind="plannedPriceProps"
            class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
            placeholder="необязательно"
            type="number"
          />
        </div>

        <div class="flex flex-col gap-4">
          <div
            class="text-10 font-semibold uppercase tracking-[0.04em] text-text-3"
          >
            Дата покупки
          </div>

          <input
            v-model="purchaseDate"
            v-bind="purchaseDateProps"
            class="w-full rounded-8 border border-border bg-surface px-10 py-8 text-13 tracking-[-0.01em] text-text outline-hidden transition-colors focus:border-accent-green-border"
            type="date"
          />
        </div>
      </template>
    </div>

    <div class="mt-12 flex justify-end gap-8">
      <button
        type="button"
        class="rounded-8 border border-border bg-surface px-16 py-8 text-13 font-medium tracking-[-0.01em] text-text-2 transition-colors hover:bg-surface-3 hover:text-text"
        @click="onCancel"
      >
        Отмена
      </button>

      <button
        type="button"
        class="rounded-8 border-0 bg-accent-green px-16 py-8 text-13 font-semibold tracking-[-0.01em] text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
        @click="onSubmit"
      >
        Добавить
      </button>
    </div>
  </div>
</template>
