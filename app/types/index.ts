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
  followersCount: number
  finance: {
    income: number
    housing: number
    credit: number
    creditMonths: number
    capital: number
    emoRate: string
  }
}

export type UserProfile = {
  id: string
  displayName: string
  username: string
  initials: string
  color: string
  bio: string
  avatarUrl: string
  joinedAt: Date
  followersCount: number
  followingCount: number
  articlesCount: number
  setsCount: number
  isFollowing: boolean
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
  categoryName: string
  setType: string
  color: string
  title: string
  description: string
  amount: number
  monthly: any
  fullCost: any
  amountLabel: string
  usersCount: number
  isPrivate: boolean
  itemsCount: number
  itemNames: string[]
  likesCount: number
  period: any
  author: {
    id: string
    displayName: string
    initials: string
    color: string
    avatarUrl: string
  }
  items: SetItem[]
  createdAt: Date
  commentsCount: number
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
  categoryName: string
  likesCount: number
  commentsCount: number
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
  id: string
  name: string
  basePrice: number
  itemType: string
  wearLifeWeeks?: number
  plannedPrice?: number
  purchaseDate?: Date
  qty?: number
  unit?: string
  dailyUse?: number
  period?: number
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
  paused: boolean
  updatedAt: Date
  userId: string
  source: string
  description: string
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
  categoryName: string
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
  setLink?: {
    title: string
    color: string
  }
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

export type ArticleBlock = {
  html: any
  id: number
  items: any
  position: number
  text: string
  title: any
  type: string
}

export type ArticleLinkedSet = {
  categoryId: string
  categoryName: string
  color: string
  id: string
  title: string
  amount: number
  period: string
}

export type ArticleSingleSet = {
  title: string
  description: string
  amount: number
  amountLabel: string
  period: string
  usersCount: number
}

export type Note = {
  id: string
  text: string
  createdAt: Date
}

export type ArticleDetails = {
  id: string
  title: string
  articleType: string
  isPrivate: boolean
  categoryId: string
  categoryName: string
  preview: string
  publishedAt: string
  status: string
  viewsCount: number
  likesCount: number
  dislikesCount: number
  commentsCount: number
  linkedSetId: string
  linkedSetTitle: string
  linkedSets: ArticleLinkedSet[]
  setLink: ArticleSingleSet
  blocks: ArticleBlock[]
  author: {
    id: string
    displayName: string
    username: string
    initials: string
    color: string
    avatarUrl: string
  }
  createdAt: Date
  updatedAt: Date
  notes: Note[]
}

export type Finance = {
  income: number
  housing: number
  credit: number
  creditMonths: number
  capital: number
  emoRate: string
  updatedAt: Date | null
}

export type BudgetGroupItem = {
  id: string
  label: string
  total: number | null
  pct: number | null
  rows: { label: string; value: number | string }[]
  hint?: string | null
  hintType?: string
}

export type Tariff = {
  id: string
  name: string
  cost: number
  conditions: string
  benefits: string[]
  url: string
}

export type Deposit = {
  id: string
  bankName: string
  bankColor: string
  bankTextColor: string
  bankAbbr: string
  name: string
  rates: any
  minAmount: number
  maxAmount: number
  replenishment: boolean
  withdrawal: boolean
  freq: string
  isSystemic: boolean
  conditions: string[]
  tags: string[]
  conditionsText: string
  params: string
  isActive: boolean
  maxRate: number
  calcIncome: number
  calcTotal: number
  tariff: Tariff
}

export type DepositChartRate = {
  months: number
  label: string
  maxRate: number
}

export type Company = {
  id: string
  name: string
  abbr: string
  color: string
  categoryId: string
  categoryName: string
  description: string
  promoTypes: string[]
}

export type VoteHistoryItem = {
  userId: string
  vote: string
  createdAt: Date
}

export type Author = {
  id: string
  displayName: string
  username: string
  initials: string
  color: string
  avatarUrl: string
  followersCount: number
  articlesCount: number
  setsCount: number
}

export type PromoItem = {
  id: number
  type: string
  companyId: string
  categoryId: string
  categoryName: string
  authorId: string
  author: Author
  title: string
  text: string
  code: string
  channel: string
  url: string
  sourceUrl: string
  promoFilter: string
  conditions: string[]
  expiresAt: Date
  votesUp: number
  votesDown: number
  commentsCount: number
  myVote: string
  voteHistory: VoteHistoryItem[]
  isActive: boolean
  createdAt: Date
  company: Company
}

export type BankCardItem = {
  id: string
  bankName: string
  bankAbbr: string
  bankColor: string
  bankTextColor: string
  name: string
  cardType: string
  cashback: any
  cashbackNote: string
  graceDays: number
  fee: number
  feeBase: number
  isSystemic: boolean
  conditions: string[]
  tags: string[]
  bonusType: string
  bonusSystem: string
  bonusDesc: string
  feeDesc: string
  url: string
  isActive: boolean
  calcCashback: number
}

export type SettingsResponse = {
  theme: string
  timezone: string
  location: string
  notifyNewSets: boolean
  notifyAuthorArticles: boolean
  notifySubscriptions: boolean
  notifySetChanges: boolean
  notifyReminders: boolean
  privacySets: string
  privacyArticles: string
  privacyProfile: string
}
