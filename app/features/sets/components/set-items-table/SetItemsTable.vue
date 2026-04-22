<script setup lang="ts">
import { useSet } from '~/features/sets/composables/useSet'
import { calculateMonthlyPrice } from '~/features/sets/utils/calculateMonthlyPrice'

import SetItemsTableRow from './SetItemsTableRow.vue'

type SetItemsTableProps = {
  scale: number
}

const props = defineProps<SetItemsTableProps>()

const route = useRoute()

const { set, isConsumable } = useSet(route.params.id as string)

const totalMonthly = computed(() => {
  return set.value?.items.reduce(
    (s, i) => s + calculateMonthlyPrice(i, props.scale),
    0
  )
})

const totalPrice = computed(() => {
  return set.value?.items.reduce(
    (s, i) => s + Math.round(i.basePrice * props.scale * (i.qty as number)),
    0
  )
})
</script>

<template>
  <table class="sd-items-table">
    <thead>
      <tr>
        <th>Позиция</th>
        <th>Кол-во</th>
        <th>Цена</th>
        <th>{{ isConsumable ? 'Расход / мес' : 'Срок службы' }}</th>
        <th>₽/мес</th>
      </tr>
    </thead>

    <tbody>
      <SetItemsTableRow
        v-for="item in set?.items"
        :key="item.id"
        :item="item"
        :scale="scale"
        :is-consumable="isConsumable"
      />

      <tr id="sp-sd-calc" class="sd-total-row">
        <td :colSpan="4">
          Итого в месяц

          <span
            v-if="scale !== 1.0"
            :style="{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              fontWeight: 400,
              color: 'var(--accent-green)',
              marginLeft: '6px'
            }"
          >
            (×{{ scale.toFixed(2).replace(/\.?0+$/, '') }})
          </span>
        </td>

        <td class="sd-total-amt">{{ totalMonthly }}</td>
      </tr>

      <tr
        v-if="totalPrice !== null"
        class="sd-total-row"
        :style="{ opacity: 0.7 }"
      >
        <td :colSpan="4">Общая стоимость</td>
        <td class="sd-total-amt">{{ totalPrice }}</td>
      </tr>
    </tbody>
  </table>
</template>
