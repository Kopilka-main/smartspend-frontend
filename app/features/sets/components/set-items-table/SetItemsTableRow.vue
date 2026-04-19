<script setup lang="ts">
import type { SetItem } from '~/types'
import { calculateMonthlyPrice } from '~/features/sets/utils/calculateMonthlyPrice'

type SetItemsTableRowProps = {
  item: SetItem
  isConsumable: boolean
  scale: number
}

const props = defineProps<SetItemsTableRowProps>()

const rawScaled = computed(() => {
  return (props.item.qty as number) * props.scale
})

const displayQty = computed(() => {
  return parseFloat(rawScaled.value.toFixed(2))
})

const displayUnit = computed(() => {
  return props.item.unit
})

const periodStr = computed(() => {
  const periodYears = props.item.period as number

  return periodYears % 1 === 0
    ? periodYears + '\u00a0лет'
    : periodYears * 12 + '\u00a0мес'
})

const monthly = computed(() => {
  return calculateMonthlyPrice(props.item, props.scale)
})
</script>

<template>
  <tr>
    <td>
      <div class="sd-item-name">{{ item.name }}</div>
    </td>

    <td>
      <span class="sd-mono-val">
        {{ displayQty.toLocaleString('ru') }}&thinsp;{{ displayUnit }}
      </span>
    </td>

    <td>
      <span class="sd-mono-val">
        {{ Math.round(item.basePrice).toLocaleString('ru') }}
        &thinsp;₽
      </span>
    </td>

    <td>
      <span
        v-if="isConsumable"
        class="sd-mono-val"
        :style="{ color: 'var(--text-2)' }"
      >
        {{ displayQty.toLocaleString('ru') }}
        &thinsp;{{ displayUnit }}/мес
      </span>
      <span v-else class="amort-chip">{{ periodStr }}</span>
    </td>

    <td>
      <span class="sd-mono-accent">
        {{ Math.round(monthly).toLocaleString('ru') }}&thinsp;₽
      </span>
    </td>
  </tr>
</template>
