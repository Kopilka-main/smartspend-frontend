<script setup lang="ts">
import type { SetItem } from '~/types'

type NewSetItemProps = {
  item: SetItem
}

const props = defineProps<NewSetItemProps>()

const emit = defineEmits<{
  (e: 'remove', name: string): void
}>()

const isConsumable = computed(() => {
  return props.item.itemType === 'consumable'
})

const description = computed(() => {
  return isConsumable.value
    ? `${props.item.basePrice} ₽  ·  ${props.item.qty} ${props.item.unit}  ·  расход ${props.item.dailyUse} ${props.item.unit}/день`
    : `${props.item.basePrice} ₽  ·  срок ${props.item.wearLifeWeeks} нед.`
})

const pricePerMonth = computed(() => {
  if (isConsumable.value) {
    const monthUse = (props.item.dailyUse as number) * 30

    return props.item.basePrice * (monthUse / (props.item.qty as number))
  } else {
    return (
      Math.ceil(props.item.basePrice / (props.item.wearLifeWeeks as number)) * 4
    )
  }
})

const onRemove = () => {
  emit('remove', props.item.name)
}
</script>

<template>
  <div class="flex items-center flex-row px-16 py-6 border-b-1">
    <div>
      <h3 class="text-13 font-medium mb-2">{{ item.name }}</h3>
      <p class="text-12 text-text-3">{{ description }}</p>
    </div>

    <div class="ml-auto flex items-center gap-12">
      <h3 class="text-13 font-medium">{{ pricePerMonth }} ₽/мес</h3>

      <button
        type="button"
        class="text-16 rounded-8 border border-accent-red-border bg-accent-red-light px-10 py-5 font-medium text-accent-red-text hover:bg-accent-red-deep"
        @click="onRemove"
      >
        &times;
      </button>
    </div>
  </div>
</template>
