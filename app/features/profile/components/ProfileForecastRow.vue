<script setup lang="ts">
type ProfileForecastRowProps = {
  row: any
  maxAbs: number
  index: number
}

defineProps<ProfileForecastRowProps>()

const curYear = new Date().getFullYear()

const YEAR_OFFSETS = [1, 2, 3, 5, 7, 10]

const fmtM = (v: number) => {
  const abs = Math.abs(v)
  const str = `₽${abs.toLocaleString('ru')}`

  return v < 0 ? `−${str}` : str
}
</script>

<template>
  <div class="forecast-row">
    <span class="forecast-year">
      {{ curYear + (YEAR_OFFSETS[index] as number) }}
    </span>

    <div class="forecast-bar-track">
      <div
        :class="`forecast-bar-fill${row.cap < 0 ? ' forecast-bar-fill--neg' : ''}`"
        :style="{
          width: `${Math.round((Math.abs(row.cap) / maxAbs) * 100)}%`
        }"
      />
    </div>

    <span :class="`forecast-val${row.cap < 0 ? ' forecast-val--neg' : ''}`">
      {{ fmtM(row.cap) }}
    </span>

    <span class="forecast-emo">
      {{ row.cap > 0 ? fmtM(row.emo) : '—' }}
    </span>
  </div>
</template>
