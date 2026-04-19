<script setup lang="ts">
import { useCurrentUser } from '~/composables/useCurrentUser'

import ProfileFinanceSection from '~/features/profile/components/ProfileFinanceSection.vue'
import ProfileEnvelopesSection from '~/features/profile/components/ProfileEnvelopesSection.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Профиль'
})

const router = useRouter()
const { currentUser } = useCurrentUser()

const capital = ref(0)
const emoRate = ref(0.04)
const emoMonthly = ref(0)

const INDICES = [0, 1, 2, 4, 6, 9]

const YEAR_OFFSETS = [1, 2, 3, 5, 7, 10]

const grandTotal = computed(() => {
  return 0
  // return CATEGORIES.reduce((sum, cat) => {
  //   const envAmt = (envelopes[cat.id] || [])
  //     .filter((x) => !x.paused)
  //     .reduce((s, x) => s + x.amount, 0)
  //   const personalAmt = (personalByCat[cat.id] || []).reduce(
  //     (s, i) => s + calcItemMonthly(i),
  //     0
  //   )
  //   return sum + envAmt + personalAmt
  // }, 0)
})

const BASE_RETURN = 0.04

const calcSavings = (
  monthlyFree: number,
  emoRate: number,
  startCapital: number,
  creditPayment = 0,
  remainingCreditMonths = 0
) => {
  const points = []
  let cap = startCapital
  for (let m = 1; m <= 120; m++) {
    const freed =
      creditPayment > 0 &&
      remainingCreditMonths > 0 &&
      m > remainingCreditMonths
        ? creditPayment
        : 0
    cap = cap + (cap * (BASE_RETURN - emoRate)) / 12 + monthlyFree + freed
    if (m % 12 === 0) {
      points.push({
        year: m / 12,
        cap: Math.round(cap),
        emo: Math.round((cap * emoRate) / 12)
      })
    }
  }
  return points
}

const findSavingsCeiling = (
  monthlyFree: number,
  emoRate: number,
  startCapital: number,
  creditPayment = 0,
  remainingCreditMonths = 0
) => {
  let cap = startCapital
  let prevYearCap = startCapital
  for (let m = 1; m <= 600; m++) {
    const freed =
      creditPayment > 0 &&
      remainingCreditMonths > 0 &&
      m > remainingCreditMonths
        ? creditPayment
        : 0
    cap = cap + (cap * (BASE_RETURN - emoRate)) / 12 + monthlyFree + freed
    if (cap <= 0) return { year: Math.ceil(m / 12), cap: 0, depleted: true }
    if (m % 12 === 0) {
      const yoy = prevYearCap > 0 ? (cap - prevYearCap) / prevYearCap : 1
      if (yoy < 0.05 && cap > startCapital)
        return { year: m / 12, cap: Math.round(cap), depleted: false }
      prevYearCap = cap
    }
  }
  // Капитал не достиг 0 за 50 лет, но убывает — экстраполируем когда исчерпается
  if (cap < startCapital && cap > 0) {
    const monthlyDecline = (prevYearCap - cap) / 12
    if (monthlyDecline > 0) {
      const extraMonths = cap / monthlyDecline
      return { year: Math.round(50 + extraMonths / 12), cap: 0, depleted: true }
    }
  }
  return null
}

const totalExpenses = computed(() => {
  return finance.value.housing + finance.value.credit + grandTotal.value
})

const savings = computed(() => {
  return finance.value.income - totalExpenses.value
})

const finance = computed(() => {
  return currentUser.value
    ? currentUser.value.finance
    : {
        income: 0,
        housing: 0,
        credit: 0,
        creditMonths: 0,
        capital: 0,
        emoRate: 0
      }
})

const pts = computed(() => {
  return calcSavings(
    savings.value,
    emoRate.value,
    finance.value.capital,
    finance.value.credit,
    finance.value.creditMonths
  )
})

const rows = computed(() => {
  return INDICES.map((i) => pts.value[i]).filter(Boolean) as any[]
})

const maxAbs = rows.value.length
  ? Math.max(...rows.value.map((r) => Math.abs(r.cap)), 1)
  : 1

const curYear = new Date().getFullYear()

const fmtM = (v: number) => {
  const abs = Math.abs(v)
  const str = `₽${abs.toLocaleString('ru')}`

  return v < 0 ? `−${str}` : str
}

const onChangeEmoRate = (event: any) => {
  emoRate.value = Number(event.target.value) / 100
}

const ceiling = computed(() => {
  return findSavingsCeiling(
    savings.value,
    emoRate.value,
    finance.value.capital,
    finance.value.credit,
    finance.value.creditMonths
  )
})

const fmt = (v: number) =>
  v >= 1_000_000
    ? `₽${(v / 1_000_000).toFixed(1)}М`
    : `₽${Math.round(v / 1000)}K`

const capStr = computed(() => {
  return ceiling.value ? fmt(ceiling.value.cap) : ''
})

const emoStr = computed(() => {
  return ceiling.value
    ? fmt(Math.round((ceiling.value.cap * emoRate.value) / 12))
    : ''
})

const yrs = computed(() => {
  return ceiling.value ? ceiling.value.year : 0
})

const yrsLabel = computed(() => {
  return yrs.value === 1 ? 'год' : yrs.value < 5 ? 'года' : 'лет'
})
</script>

<template>
  <main class="profile-main">
    <div id="sp-tiles" class="entry-header">
      <div class="entry-greeting">
        <div
          class="entry-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Привет, {{ currentUser?.displayName }}
        </div>
      </div>
    </div>

    <ProfileFinanceSection />

    <div id="sp-emo">
      <div class="section-heading">
        <div>
          <span class="section-title">Пассивный доход</span>
          <div class="section-subtitle">
            Сумма, которую можно тратить не затрагивая накопления
          </div>
        </div>
      </div>

      <div class="emo-inner">
        <div class="emo-stats-card">
          <div class="emo-stat">
            <div class="emo-stat-num">₽{{ capital.toLocaleString('ru') }}</div>
            <div class="emo-stat-label">текущий капитал</div>
          </div>

          <div class="emo-stat">
            <div class="emo-stat-num">{{ Math.round(emoRate * 100) }}%</div>
            <div class="emo-stat-label">ставка EmoSpend</div>
          </div>

          <div class="emo-stat">
            <div class="emo-stat-num">
              ₽{{ emoMonthly.toLocaleString('ru') }}
              <span class="emo-stat-per">/мес</span>
            </div>

            <div class="emo-stat-label">можно тратить</div>
          </div>
        </div>

        <div class="emo-card">
          <div class="emo-card-body">
            <div class="emo-card-left">
              <div class="emo-card-header">
                <div class="emo-card-label">EmoSpend</div>
                <div class="emo-card-sub">от накопленного капитала</div>
              </div>

              <div class="emo-slider-wrap">
                <div class="emo-slider-labels">
                  <span>0%</span>
                  <span>10%</span>
                  <span>25%</span>
                </div>

                <div class="emo-slider-track">
                  <div
                    class="emo-slider-fill"
                    :style="{ width: `${emoRate * 400}%` }"
                  />

                  <div
                    class="emo-slider-thumb"
                    :style="{ left: `${emoRate * 400}%` }"
                  />

                  <input
                    type="range"
                    :min="0"
                    :max="25"
                    :step="1"
                    class="emo-slider-input"
                    :value="Math.round(emoRate * 100)"
                    @change="onChangeEmoRate"
                  />
                </div>
              </div>

              <div class="emo-forecast">
                <div class="forecast-row forecast-row--header">
                  <span class="forecast-year" />

                  <div
                    class="forecast-bar-track"
                    :style="{ visibility: 'hidden' }"
                  />

                  <span class="forecast-val forecast-header-label">
                    Капитал
                  </span>

                  <span class="forecast-emo forecast-header-label">
                    EmoSpend
                  </span>
                </div>

                <div
                  v-for="(row, index) in rows"
                  :key="index"
                  class="forecast-row"
                >
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

                  <span
                    :class="`forecast-val${row.cap < 0 ? ' forecast-val--neg' : ''}`"
                  >
                    {{ fmtM(row.cap) }}
                  </span>

                  <span class="forecast-emo">
                    {{ row.cap > 0 ? fmtM(row.emo) : '—' }}
                  </span>
                </div>
              </div>

              <div v-if="!ceiling" class="savings-ceiling">
                Предел накоплений — не достигается в ближайшие 50 лет
              </div>

              <div
                v-if="ceiling?.depleted"
                class="savings-ceiling savings-ceiling--warn"
              >
                Капитал исчерпается через {{ ceiling.year }}

                {{
                  ceiling.year === 1 ? 'год' : ceiling.year < 5 ? 'года' : 'лет'
                }}
              </div>

              <div class="savings-ceiling">
                Предел накоплений — через {{ yrs }} {{ yrsLabel }} ·
                {{ capStr }} · {{ emoStr }}/мес
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="sp-deposits"
        class="profile-tool-row"
        @click="router.push('/deposits')"
      >
        <div class="profile-tool-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 4h6a4 4 0 0 1 0 8H6V4z" />
            <path d="M6 12h8" />
            <path d="M6 16h8" />
            <path d="M6 20v-4" />
          </svg>
        </div>

        <div class="profile-tool-text">
          <div class="profile-tool-title">Вклады и накопительные счета</div>
          <div class="profile-tool-desc">Посмотреть ставки в банках</div>
        </div>

        <svg
          class="profile-tool-chevron"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>

    <ProfileEnvelopesSection />
  </main>
</template>
