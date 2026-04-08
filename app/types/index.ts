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
  itemNames: string[]
  author: {
    id: string
    displayName: string
    initials: string
    color: string
    avatarUrl: string
  }
  createdAt: Date
}

export type CustomSetDetails = {
  aboutText: string
  aboutTitle: string
  added: any
  amount: number
  amountLabel: string
  author: {
    id: string
    displayName: string
    initials: string
    color: string
    avatarUrl: string
  } | null
  categoryId: string
  color: string
  createdAt: Date
  description: string
  hidden: boolean
  id: string
  isPrivate: boolean
  setType: string
  source: string
  title: string
  updatedAt: Date
  usersCount: number
  items: SetItem[]
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

export type EnvelopeItem = {
  amount: number
  categoryId: string
  createdAt: Date
  envelopeType: string
  id: number
  itemsCount: number
  name: string
  period: any
  setId: string
  updatedAt: Date
  userId: string
}

export type SetComment = {
  createdAt: Date
  dislikesCount: number
  id: number
  initials: string
  likesCount: number
  name: string
  setId: string
  text: string
  userId: string
}

export type CreateSetPayload = {}

export type Reaction = {
  createdAt: Date
  id: number
  targetId: string
  targetType: string
  type: string
  userId: string
}

export type FeedArticle = {
  id: string
  type: string
  title: string
  articleType: string
  categoryId: string
  preview: string
  publishedAt: Date
  status: string
  viewsCount: number
  likesCount: number
  dislikesCount: number
  commentsCount: number
  linkedSetId: string
  linkedSetTitle: string
  author: {
    id: string
    displayName: string
    username: string
    initials: string
    color: string
    avatarUrl: string
  }
  createdAt: Date
}

export type FeedSet = {
  amount: number
  articleType: any
  author: any
  categoryId: string
  color: string
  createdAt: Date
  dislikesCount: number | null
  id: string
  itemsCount: number
  likesCount: number | null
  preview: string
  publishedAt: Date | null
  source: string
  title: string
  type: string
  usersCount: number
  viewsCount: number | null
  commentsCount: number | null
}
