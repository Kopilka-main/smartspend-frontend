export const formatSource = (source: string) => {
  if (source === 'smartspend') {
    return 'Smartspend'
  }

  if (source === 'community') {
    return 'Сообщество'
  }

  if (source === 'own') {
    return 'Мой набор'
  }

  return ''
}
