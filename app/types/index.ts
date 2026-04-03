export type User = {
  id: string
  initials: string
  joinedAt: Date
  status: string
  theme: 'light' | 'dark'
  avatarUrl: string | null
  bio: string | null
  color: string
  displayName: string
  email: string
  username: string
  finance: {
    income: number
    housing: number
    credit: number
    creditMonths: number
    capital: number
    emoRate: string
  }
}

export type SetCategory = {
  id: string
  name: string
  color: string
}

export type CustomSet = {
  id: string
  source: string
  categoryId: string
  setType: string
  color: string
  title: string
  description: string
  amount: number
  amountLabel: string
  usersCount: number
  isPrivate: boolean
  itemsCount: number
  author: {
    id: string
    displayName: string
    initials: string
    color: string
    avatarUrl: string
  }
  createdAt: Date
}

export type SetItem = {
  name: string
  basePrice: number
  itemType: string
  wearLifeWeeks?: number
  plannedPrice?: number
  purchaseDate?: Date
  qty?: number
  unit?: string
  dailyUse?: number
}

export type CreateSetPayload = {}
