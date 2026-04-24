export const formatMoney = (n: number) =>
  Math.round(n).toLocaleString('ru') + '\u00a0₽'
