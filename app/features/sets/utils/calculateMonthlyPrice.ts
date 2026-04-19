import type { SetItem } from '~/types'

export const calculateMonthlyPrice = (item: SetItem, scale: number) => {
  return (
    (item.basePrice * scale * (item.qty as number)) /
    ((item.period as number) * 12)
  )
}
