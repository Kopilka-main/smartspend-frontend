import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const formatDate = (date: Date, formatString: string = 'yyyy-MM-dd') => {
  return format(date, formatString, { locale: ru })
}
