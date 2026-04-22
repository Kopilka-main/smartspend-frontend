import { useFinance } from '~/features/profile/composables/useFinance'

export const useEmoRate = () => {
  const { finance } = useFinance()

  const emoRate = ref(0.04)

  const emoMonthly = computed(() => {
    return Math.round((finance.value.capital * emoRate.value) / 12)
  })

  const emoRateFormatted = computed(() => {
    return Math.round(emoRate.value * 100)
  })

  const onChangeEmoRate = (value: string) => {
    emoRate.value = Number(value) / 100
  }

  return {
    emoRate,
    emoRateFormatted,
    emoMonthly,
    onChangeEmoRate
  }
}
