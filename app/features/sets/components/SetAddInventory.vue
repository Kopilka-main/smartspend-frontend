<script setup lang="ts">
import { useAddToEnvelope } from '~/features/sets/queries/useAddToEnvelope'
import { useRemoveFromEnvelope } from '~/features/sets/queries/useRemoveFromEnvelope'
import { useFetchEnvelopes } from '~/features/sets/queries/useFetchEnvelopes'

const route = useRoute()

const { data } = useFetchEnvelopes()
const { mutate: addToEnvelopeMutation } = useAddToEnvelope(
  route.params.id as string
)

const { mutate: removeEnvelopeMutation } = useRemoveFromEnvelope(
  route.params.id as string
)

const envelopes = computed(() => {
  return data.value ? data.value.data : []
})

const isAdded = computed(() => {
  return envelopes.value.find(
    (envelope) => envelope.setId === (route.params.id as string)
  )
})

const onAddSet = () => {
  if (isAdded.value) return

  addToEnvelopeMutation()
}

const onRemoveSet = () => {
  removeEnvelopeMutation()
}
</script>

<template>
  <div class="sd-inv-btn-wrap">
    <button
      id="sp-sd-add"
      :class="`sd-inv-btn${isAdded ? ' added' : ''}`"
      @click="onAddSet"
    >
      <template v-if="isAdded">
        <svg
          class="sd-inv-icon"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>

        В профиле
      </template>
      <template v-else>
        <svg
          class="sd-inv-icon"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v13M7 10l5 5 5-5" />
          <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
        </svg>

        Использовать
      </template>
    </button>

    <button v-if="isAdded" class="sd-btn-remove" @click="onRemoveSet">
      <svg
        width="13"
        height="13"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
        <path d="M10 11v6M14 11v6" />
        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
      </svg>
    </button>
  </div>
</template>
