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

const titlePlaceholder = computed(() => {
  return isConsumable.value ? 'Например: Оливковое масло' : 'Например: Куртка'
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

const onCancel = () => {
  emit('cancel')
}

const onSubmit = handleSubmit((values) => {
  emit('add', { ...values, itemType: itemType.value })
})
</script>

<template>
  <div class="inv-add-form">
    <div class="inv-add-form-title">Новая позиция</div>
    <div class="inv-add-form-grid">
      <div class="inv-add-form-field" :style="{ gridColumn: '1/-1' }">
        <div class="inv-add-form-lbl">Название</div>

        <input
          v-model="name"
          v-bind="nameProps"
          class="inv-add-form-input"
          :placeholder="titlePlaceholder"
        />
      </div>

      <div class="inv-add-form-field">
        <div class="inv-add-form-lbl">Тип</div>

        <select v-model="itemType" class="inv-add-form-select">
          <option value="consumable">Расходник</option>
          <option value="wear">Вещь (износ)</option>
        </select>
      </div>

      <div class="inv-add-form-field">
        <div class="inv-add-form-lbl">Цена, руб.</div>

        <input
          v-model="basePrice"
          v-bind="basePriceProps"
          class="inv-add-form-input"
          type="number"
          placeholder="0"
        />
      </div>

      <template v-if="isConsumable">
        <div class="inv-add-form-field">
          <div class="inv-add-form-lbl">Объём / масса</div>

          <input
            v-model="qty"
            v-bind="qtyProps"
            class="inv-add-form-input"
            type="number"
            placeholder="500"
          />
        </div>

        <div class="inv-add-form-field">
          <div class="inv-add-form-lbl">Единица</div>

          <select v-model="unit" v-bind="unitProps" class="inv-add-form-select">
            <option value="г">г</option>
            <option value="мл">мл</option>
            <option value="шт">шт</option>
            <option value="кап">кап</option>
            <option value="рул">рул</option>
          </select>
        </div>

        <div class="inv-add-form-field">
          <div class="inv-add-form-lbl">Расход в день</div>

          <input
            v-model="dailyUse"
            v-bind="dailyUseProps"
            class="inv-add-form-input"
            type="number"
            placeholder="10"
          />
        </div>
      </template>
      <template v-else>
        <div class="inv-add-form-field">
          <div class="inv-add-form-lbl">Срок службы, нед.</div>

          <input
            v-model="wearLifeWeeks"
            v-bind="wearLifeWeeksProps"
            class="inv-add-form-input"
            type="number"
            placeholder="52"
          />
        </div>

        <div class="inv-add-form-field">
          <div class="inv-add-form-lbl">Плановая цена, руб.</div>

          <input
            v-model="plannedPrice"
            v-bind="plannedPriceProps"
            class="inv-add-form-input"
            type="number"
            placeholder="необязательно"
          />
        </div>

        <div class="inv-add-form-field">
          <div class="inv-add-form-lbl">Дата покупки</div>

          <input
            v-model="purchaseDate"
            v-bind="purchaseDateProps"
            class="inv-add-form-input"
            type="date"
          />
        </div>
      </template>
    </div>

    <div class="inv-add-form-actions">
      <button class="inv-add-cancel" @click="onCancel">Отмена</button>

      <button class="inv-add-submit" @click="onSubmit">Добавить</button>
    </div>
  </div>
</template>
