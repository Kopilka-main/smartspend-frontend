export const formatType = (setType: string) => {
  if (setType === 'base') {
    return 'Основа'
  }

  if (setType === 'custom') {
    return 'Дополнение'
  }

  return ''
}
