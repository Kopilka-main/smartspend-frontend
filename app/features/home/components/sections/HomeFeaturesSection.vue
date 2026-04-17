<script setup lang="ts">
const planInflation = ref(0)

const rows = [
  { year: '2027', nominal: 1120048, yrs: 1 },
  { year: '2028', nominal: 2053696, yrs: 2 },
  { year: '2029', nominal: 2987344, yrs: 3 },
  { year: '2031', nominal: 4854640, yrs: 5 },
  { year: '2033', nominal: 6721936, yrs: 7 },
  { year: '2036', nominal: 9522880, yrs: 10 }
]

const adj = (nom: number, yrs: number) =>
  Math.round(nom * Math.pow(1 + planInflation.value / 100, yrs))

const maxVal = adj(9522880, 10)

const inflationItems = computed(() => {
  return rows.map((r) => {
    const val = adj(r.nominal, r.yrs)

    const pct = Math.round((val / maxVal) * 100)

    return {
      ...r,
      pct,
      val
    }
  })
})

const planInflationLabel = computed(() => {
  return planInflation.value === 0
    ? 'Предел накоплений — через 21 год · 19.8 млн ₽'
    : `При инфляции ${planInflation.value}% — зарплаты и ставки по вкладам растут вместе с ценами`
})
</script>

<template>
  <div id="ld-features">
    <section class="ld-section">
      <div class="ld-container">
        <div class="ld-feature">
          <div class="ld-feature-text">
            <div class="ld-section-label">Инвентарь</div>
            <h2 class="ld-h2">
              МЫ СМОТРИМ <span class="ld-h2-pill">ВПЕРЁД, НЕ НАЗАД</span>
            </h2>
            <div class="ld-quote-block">
              <div class="ld-quote-text">
                «Рациональный человек принимает решения, глядя только вперёд.
                То, что вы потратили вчера, уже ушло, и это не должно влиять на
                то, стоит ли вам тратить завтра.»
              </div>
              <div class="ld-quote-author">
                <img
                  class="ld-quote-avatar"
                  src="/images/authors/reed.png"
                  alt="Джон Т. Рид"
                />
                <div>
                  <div class="ld-quote-name">Джон Т. Рид</div>
                  <div class="ld-quote-role">
                    Автор книг по инвестициям и финансовой независимости
                  </div>
                </div>
              </div>
            </div>
            <p class="ld-feature-desc">
              Приложения по учёту финансов показывают прошлое — мы показываем
              будущее. SmartSpend не спрашивает куда делись деньги. Он
              показывает,
              <strong>сколько потратишь в следующем месяце</strong> — ещё до
              первой покупки. Инвентарь следит за сроком службы вещей и
              предупреждает заранее: зубная щётка ожидает обновления, кроссовки
              — через 3 месяца. Ноль сюрпризов.
            </p>
          </div>

          <div class="ld-mockup ld-mockup--tilt-right">
            <div class="ld-mockup-topbar">
              <div class="ld-mockup-dots"><span /><span /><span /></div>
              <span class="ld-mockup-title">Инвентарь · 9 200 ₽/мес</span>
            </div>
            <div class="ld-mockup-body">
              <div class="ld-mk-inv-group">
                <div class="ld-mk-inv-group-lbl">Ожидает покупки</div>
                <div class="ld-mk-inv-item ld-mk-inv-urgent">
                  <span>Зубная щётка</span
                  ><span class="ld-mk-inv-date">сегодня</span
                  ><span class="ld-mk-inv-price">250 ₽</span>
                </div>
                <div class="ld-mk-inv-item ld-mk-inv-soon">
                  <span>Дезодорант</span
                  ><span class="ld-mk-inv-date">3 дня</span
                  ><span class="ld-mk-inv-price">300 ₽</span>
                </div>
                <div class="ld-mk-inv-item ld-mk-inv-soon">
                  <span>Крем для лица</span
                  ><span class="ld-mk-inv-date">7 дней</span
                  ><span class="ld-mk-inv-price">600 ₽</span>
                </div>
              </div>
              <div class="ld-mk-inv-group">
                <div class="ld-mk-inv-group-lbl">Планируется</div>
                <div class="ld-mk-inv-item ld-mk-inv-ok">
                  <span>Толстовка</span><span class="ld-mk-inv-date">2 мес</span
                  ><span class="ld-mk-inv-price">4 000 ₽</span>
                </div>
                <div class="ld-mk-inv-item ld-mk-inv-ok">
                  <span>Кроссовки</span><span class="ld-mk-inv-date">3 мес</span
                  ><span class="ld-mk-inv-price">6 000 ₽</span>
                </div>
                <div class="ld-mk-inv-item ld-mk-inv-ok">
                  <span>Музыка</span><span class="ld-mk-inv-date">1 мес</span
                  ><span class="ld-mk-inv-price">399 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ld-section ld-section--alt">
      <div class="ld-container">
        <div class="ld-feature ld-feature--reverse">
          <div class="ld-feature-text">
            <div class="ld-section-label">Инвентарь и Наборы</div>
            <h2 class="ld-h2">
              <span class="ld-h2-pill">ПЛАНИРУЙ ПОКУПКИ</span> НА ГОДЫ ВПЕРЁД
            </h2>
            <div class="ld-quote-block">
              <div class="ld-quote-text">
                «Когда вы устали или голодны, вы не просто принимаете плохие
                решения — вы позволяете своей интуитивной системе диктовать
                правила, потому что самоконтроль требует огромных усилий.»
              </div>
              <div class="ld-quote-author">
                <img
                  class="ld-quote-avatar"
                  src="/images/authors/kaneman.png"
                  alt="Даниэль Канеман"
                />
                <div>
                  <div class="ld-quote-name">Даниэль Канеман</div>
                  <div class="ld-quote-role">
                    Нобелевский лауреат по экономике · «Думай медленно, решай
                    быстро»
                  </div>
                </div>
              </div>
            </div>
            <p class="ld-feature-desc">
              Принимай решения о покупках
              <strong>заранее — когда сыт, спокоен и рационален.</strong> Тогда
              не придётся решать в моменте: усталость, голод и стресс всегда
              толкают к импульсивному выбору. Наборы — это твои решения,
              принятые в спокойный день: подобранные товары, рассчитанные сроки,
              зафиксированный бюджет. Долгосрочный план защищает от сиюминутных
              ошибок.
            </p>
          </div>
          <div class="ld-mockup ld-mockup--tilt-left">
            <div class="ld-mockup-topbar">
              <div class="ld-mockup-dots"><span /><span /><span /></div>
              <span class="ld-mockup-title">Набор · Рабочее место 2026</span>
            </div>
            <div class="ld-mockup-body">
              <div class="ld-mk-hero">
                <div class="ld-mk-hero-tag">Гаджеты и техника</div>
                <div class="ld-mk-hero-title">Рабочее место 2026</div>
                <div class="ld-mk-stats">
                  <div class="ld-mk-stat">
                    <div class="ld-mk-stat-val">106 000 ₽</div>
                    <div class="ld-mk-stat-lbl">Бюджет</div>
                  </div>
                  <div class="ld-mk-stat">
                    <div
                      class="ld-mk-stat-val"
                      :style="{ color: 'var(--accent-green)' }"
                    >
                      1 169 ₽/мес
                    </div>
                    <div class="ld-mk-stat-lbl">Амортизация</div>
                  </div>
                </div>
              </div>
              <div class="ld-mk-items">
                <div class="ld-mk-item">
                  <span>MacBook Air M2</span
                  ><span class="ld-mk-item-term">84 мес</span
                  ><span class="ld-mk-item-price">80 000 ₽</span
                  ><span class="ld-mk-item-amort">952 ₽/мес</span>
                </div>
                <div class="ld-mk-item">
                  <span>Монитор 27"</span
                  ><span class="ld-mk-item-term">120 мес</span
                  ><span class="ld-mk-item-price">18 000 ₽</span
                  ><span class="ld-mk-item-amort">150 ₽/мес</span>
                </div>
                <div class="ld-mk-item">
                  <span>Клавиатура + мышь</span
                  ><span class="ld-mk-item-term">120 мес</span
                  ><span class="ld-mk-item-price">5 000 ₽</span
                  ><span class="ld-mk-item-amort">42 ₽/мес</span>
                </div>
                <div class="ld-mk-item">
                  <span>Кронштейн (экран + ноут)</span
                  ><span class="ld-mk-item-term">120 мес</span
                  ><span class="ld-mk-item-price">3 000 ₽</span
                  ><span class="ld-mk-item-amort">25 ₽/мес</span>
                </div>
              </div>
              <div class="ld-mk-articles">
                <div class="ld-mk-art">
                  MacBook M2 или M3: стоит ли переплачивать в 2026?
                </div>
                <div class="ld-mk-art">Мониторы до 20 000 ₽: полный разбор</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ld-section">
      <div class="ld-container">
        <div class="ld-feature">
          <div class="ld-feature-text">
            <div class="ld-section-label">Профиль · Конверты</div>
            <h2 class="ld-h2">
              <span class="ld-h2-pill">РАЗЛОЖИ ДЕНЬГИ</span> ПО КОНВЕРТАМ
            </h2>
            <div class="ld-quote-block">
              <div class="ld-quote-text">
                «Наш мозг раскладывает деньги по «виртуальным конвертам». Вы
                можете жалеть 100 рублей на платную парковку (конверт «текущие
                расходы»), но легко потратить 5000 рублей на ужин в ресторане
                (конверт «развлечения»).»
              </div>
              <div class="ld-quote-author">
                <img
                  class="ld-quote-avatar"
                  src="/images/authors/taler.png"
                  alt="Ричард Талер"
                />
                <div>
                  <div class="ld-quote-name">Ричард Талер</div>
                  <div class="ld-quote-role">
                    Нобелевский лауреат по экономике · Теория ментального учёта
                  </div>
                </div>
              </div>
            </div>
            <p class="ld-feature-desc">
              Распредели доход по <strong>Конвертам</strong> один раз в начале
              месяца — и больше не думай о деньгах. Видно сколько осталось на
              еду, на досуг, на транспорт. Когда конверт пустой — стоп. Вопрос
              «куда делись деньги?» просто перестаёт существовать.
            </p>
          </div>
          <div class="ld-mockup ld-mockup--tilt-right">
            <div class="ld-mockup-topbar">
              <div class="ld-mockup-dots"><span /><span /><span /></div>
              <span class="ld-mockup-title">Профиль · Конверты</span>
            </div>
            <div class="ld-mockup-body">
              <div class="ld-mk-income">
                <div class="ld-mk-income-row">
                  <span :style="{ fontWeight: 600 }"
                    >Доступно в этом месяце</span
                  ><span
                    :style="{ fontWeight: 700, color: 'var(--accent-green)' }"
                    >+42 000 ₽</span
                  >
                </div>
                <div class="ld-mk-bar-track">
                  <div class="ld-mk-bar-fill" :style="{ width: '30%' }"></div>
                </div>
                <div
                  class="ld-mk-income-row"
                  :style="{ fontSize: '10px', opacity: 0.6, marginTop: 4 }"
                >
                  <span>Доход: 60 000 ₽</span><span>Конверты: 18 000 ₽</span>
                </div>
              </div>
              <div class="ld-mk-envs">
                <div class="ld-mk-env ld-mk-env--expanded">
                  <div class="ld-mk-env-name">
                    <div>Еда и Супермаркеты</div>
                    <div class="ld-mk-env-sub">осталось 18 дней</div>
                    <div class="ld-mk-env-sets">
                      <div class="ld-mk-env-set-card">
                        <span class="ld-mk-env-set-name">Северная диета</span
                        ><span class="ld-mk-env-set-meta">14 поз.</span
                        ><span class="ld-mk-env-set-amt">11 000 ₽/мес</span>
                      </div>
                      <div class="ld-mk-env-set-card">
                        <span class="ld-mk-env-set-name">Вкусняшки и снеки</span
                        ><span class="ld-mk-env-set-meta">4 поз.</span
                        ><span class="ld-mk-env-set-amt">3 000 ₽/мес</span>
                      </div>
                    </div>
                  </div>
                  <div class="ld-mk-env-amt" :style="{ color: '#5E9478' }">
                    14 000 ₽
                    <div class="ld-mk-env-sub">/мес</div>
                  </div>
                </div>
                <div class="ld-mk-env">
                  <div class="ld-mk-env-name">
                    <div>Одежда и Обувь</div>
                    <div class="ld-mk-env-sub">в норме</div>
                  </div>
                  <div class="ld-mk-env-amt" :style="{ color: '#4E8268' }">
                    3 000 ₽
                    <div class="ld-mk-env-sub">/мес</div>
                  </div>
                </div>
                <div class="ld-mk-env">
                  <div class="ld-mk-env-name">
                    <div>Дом и Техника</div>
                    <div class="ld-mk-env-sub">7 дней до покупки</div>
                  </div>
                  <div class="ld-mk-env-amt" :style="{ color: '#B08840' }">
                    2 000 ₽
                    <div class="ld-mk-env-sub">/мес</div>
                  </div>
                </div>
                <div class="ld-mk-env">
                  <div class="ld-mk-env-name">
                    <div>Красота и Здоровье</div>
                    <div class="ld-mk-env-sub">скоро закончится</div>
                  </div>
                  <div class="ld-mk-env-amt" :style="{ color: '#B85555' }">
                    2 000 ₽
                    <div class="ld-mk-env-sub">/мес</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ld-section ld-section--alt">
      <div class="ld-container">
        <div class="ld-feature ld-feature--reverse">
          <div class="ld-feature-text">
            <div class="ld-section-label">Профиль · EmoSpend</div>
            <h2 class="ld-h2">
              <span class="ld-h2-pill">БАЛУЙ СЕБЯ</span> — БЕЗ ВИНЫ
            </h2>
            <div class="ld-quote-block">
              <div class="ld-quote-text">
                «Мы покупаем новую вещь (телефон, машину), ожидая долгого
                счастья. Но наш уровень радости возвращается к базовому очень
                быстро.»
              </div>
              <div class="ld-quote-author">
                <div>
                  <div class="ld-quote-name">Гедонистическая адаптация</div>
                  <div class="ld-quote-role">
                    Психологический феномен · Брикман и Кэмпбелл, 1971
                  </div>
                </div>
              </div>
            </div>
            <p class="ld-feature-desc">
              Импульсивные покупки — не слабость характера. Это физиология.
              Поэтому в SmartSpend есть <strong>EmoSpend</strong> — выделенный
              бюджет на эмоциональные радости вне всяких наборов и конвертов.
              Трать на что хочешь, без чувства вины: деньги на это уже отложены.
              И чем больше растёт твой капитал — тем больше растёт EmoSpend.
            </p>
          </div>
          <div class="ld-mockup ld-mockup--tilt-left">
            <div class="ld-mockup-topbar">
              <div class="ld-mockup-dots"><span /><span /><span /></div>
              <span class="ld-mockup-title">Профиль · EmoSpend</span>
            </div>
            <div class="ld-mockup-body">
              <div class="ld-mk-emo-header">
                <div class="ld-mk-emo-title">EmoSpend</div>
                <div class="ld-mk-emo-sub">4% от капитала · ежегодный рост</div>
              </div>
              <div class="ld-mk-emo-rows">
                <div class="ld-mk-emo-row ld-mk-emo-row--header">
                  <span>Год</span><span>в месяц</span
                  ><span :style="{ textAlign: 'right' }">в год</span>
                </div>
                <div class="ld-mk-emo-row">
                  <span class="ld-mk-emo-year">2026</span><span>621 ₽</span
                  ><span class="ld-mk-emo-val">7 452 ₽</span>
                </div>
                <div class="ld-mk-emo-row">
                  <span class="ld-mk-emo-year">2027</span><span>3 733 ₽</span
                  ><span class="ld-mk-emo-val">44 796 ₽</span>
                </div>
                <div class="ld-mk-emo-row">
                  <span class="ld-mk-emo-year">2028</span><span>6 846 ₽</span
                  ><span class="ld-mk-emo-val">82 152 ₽</span>
                </div>
                <div class="ld-mk-emo-row">
                  <span class="ld-mk-emo-year">2031</span><span>16 182 ₽</span
                  ><span class="ld-mk-emo-val">194 184 ₽</span>
                </div>
                <div class="ld-mk-emo-row ld-mk-emo-row--future">
                  <span class="ld-mk-emo-year">2036</span><span>31 743 ₽</span
                  ><span class="ld-mk-emo-val">380 916 ₽</span>
                </div>
              </div>
              <div class="ld-mk-emo-note">
                Чем больше капитал — тем выше EmoSpend
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ld-section">
      <div class="ld-container">
        <div class="ld-feature">
          <div class="ld-feature-text">
            <div class="ld-section-label">Лента · Каталог</div>
            <h2 class="ld-h2">
              <span class="ld-h2-pill">УЧИСЬ</span> НА ГОТОВЫХ ПРОТОКОЛАХ
            </h2>
            <div class="ld-quote-block">
              <div class="ld-quote-text">
                «Экономический подход не предполагает, что люди не совершают
                ошибок. Он предполагает, что люди делают лучший выбор из
                доступных им знаний.»
              </div>
              <div class="ld-quote-author">
                <img
                  class="ld-quote-avatar"
                  src="/images/authors/beker.png"
                  alt="Гэри Беккер"
                />
                <div>
                  <div class="ld-quote-name">Гэри Беккер</div>
                  <div class="ld-quote-role">
                    Нобелевский лауреат по экономике · Теория человеческого
                    капитала
                  </div>
                </div>
              </div>
            </div>
            <p class="ld-feature-desc">
              Не начинай с нуля. В <strong>Ленте и Каталоге</strong> — готовые
              наборы и статьи от сообщества: питание, техника, здоровье, одежда.
              Кто-то уже потратил годы на то, чтобы разобраться — возьми их
              протокол и адаптируй под себя за один клик.
            </p>
          </div>
          <div class="ld-mockup ld-mockup--tilt-right">
            <div class="ld-mockup-topbar">
              <div class="ld-mockup-dots"><span /><span /><span /></div>
              <span class="ld-mockup-title">Лента</span>
            </div>
            <div class="ld-mockup-body">
              <div class="ld-mk-chips">
                <div class="ld-mk-chip ld-mk-chip--active">Все</div>
                <div class="ld-mk-chip">Питание</div>
                <div class="ld-mk-chip">Гаджеты</div>
                <div class="ld-mk-chip">Здоровье</div>
              </div>
              <div class="ld-mk-feed">
                <div class="ld-mk-feed-item">
                  <div class="ld-mk-feed-meta">
                    <div
                      class="ld-mk-avatar"
                      :style="{ background: '#5E7A6A' }"
                    >
                      АК
                    </div>
                    <span class="ld-mk-feed-author">Алексей К.</span>
                    <span class="ld-mk-feed-date">2 дня назад</span>
                    <span class="ld-mk-feed-tag">Питание</span>
                  </div>
                  <div class="ld-mk-feed-title">
                    Северная диета: 11 000 ₽ в месяц на всё
                  </div>
                  <div class="ld-mk-feed-preview">
                    Как есть рыбу, крупы и овощи, не переплачивать и чувствовать
                    себя хорошо — протокол за 3 года.
                  </div>
                  <div class="ld-mk-feed-actions">
                    <span>♥ 124</span><span>18 отв.</span>
                  </div>
                </div>
                <div class="ld-mk-feed-item">
                  <div class="ld-mk-feed-meta">
                    <div
                      class="ld-mk-avatar"
                      :style="{ background: '#7A5E8A' }"
                    >
                      МП
                    </div>
                    <span class="ld-mk-feed-author">Мария П.</span>
                    <span class="ld-mk-feed-date">5 дней назад</span>
                    <span class="ld-mk-feed-tag">Гаджеты</span>
                  </div>
                  <div class="ld-mk-feed-title">
                    Смартфон до 30 000 ₽: что брать в 2026
                  </div>
                  <div class="ld-mk-feed-preview">
                    Сравнила восстановленные флагманы 2022 года и новые телефоны
                    среднего сегмента — итоговая таблица по камере, батарее и
                    стоимости владения.
                  </div>
                  <div class="ld-mk-feed-actions">
                    <span>♥ 89</span><span>31 отв.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ld-section ld-section--alt">
      <div class="ld-container">
        <div class="ld-feature ld-feature--reverse">
          <div class="ld-feature-text">
            <div class="ld-section-label">Вклады · Карты · Промо</div>
            <h2 class="ld-h2">
              <span class="ld-h2-pill">СЭКОНОМИЛ</span> — ЗНАЧИТ ЗАРАБОТАЛ
            </h2>
            <div class="ld-quote-block">
              <div class="ld-quote-text">
                «Первые 100 000 долларов — это сущий ад, но вы обязаны это
                сделать. Мне плевать, как вы это сделаете: будете ли вы ходить
                везде пешком или питаться по купонам. Найдите способ получить в
                руки эти деньги.»
              </div>
              <div class="ld-quote-author">
                <img
                  class="ld-quote-avatar"
                  src="/images/authors/manger.png"
                  alt="Чарльз Мангер"
                />
                <div>
                  <div class="ld-quote-name">Чарльз Мангер</div>
                  <div class="ld-quote-role">
                    Инвестор · Партнёр Уоррена Баффета · Berkshire Hathaway
                  </div>
                </div>
              </div>
            </div>
            <p class="ld-feature-desc">
              Вклад под 5% вместо 15% — это
              <strong>10 000 ₽ в год мимо</strong> с каждых 100 000 рублей.
              Карта без кешбэка — ещё <strong>1 500 ₽ в месяц</strong> мимо.
              Купоны и скидки, которые проходят незамеченными —
              <strong>ещё 3 000 ₽ в месяц</strong>. Мы собрали всё в одном
              месте: лучшие ставки по вкладам, карты с кешбэком под твои расходы
              и купоны от сообщества. Каждый сэкономленный рубль — это уже
              заработанный рубль.
            </p>
          </div>
          <div class="ld-mockup ld-mockup--tilt-left ld-winstack-outer">
            <div class="ld-winstack">
              <div class="ld-winstack-win ld-winstack-win--1">
                <div class="ld-winstack-bar">
                  <div class="ld-mockup-dots"><span /><span /><span /></div>
                  <span class="ld-mockup-title">Вклады · ставки по срокам</span>
                </div>
                <div class="ld-winstack-body">
                  <div class="ld-mk-dep-chart">
                    <div class="ld-mk-bars">
                      <div class="ld-mk-bar" :style="{ height: '36px' }">
                        <div class="ld-mk-bar-lbl">19%</div>
                      </div>
                      <div class="ld-mk-bar" :style="{ height: '50px' }">
                        <div class="ld-mk-bar-lbl">21%</div>
                      </div>
                      <div class="ld-mk-bar" :style="{ height: '44px' }">
                        <div class="ld-mk-bar-lbl">20%</div>
                      </div>
                      <div class="ld-mk-bar" :style="{ height: '40px' }">
                        <div class="ld-mk-bar-lbl">19%</div>
                      </div>
                      <div class="ld-mk-bar" :style="{ height: '32px' }">
                        <div class="ld-mk-bar-lbl">18%</div>
                      </div>
                    </div>
                    <div class="ld-mk-bar-labels">
                      <span
                        v-for="item in [
                          '1 мес',
                          '3 мес',
                          '6 мес',
                          '1 год',
                          '2 года'
                        ]"
                        :key="item"
                      >
                        {{ item }}
                      </span>
                    </div>
                  </div>
                  <div class="ld-wk-dep-card">
                    <div
                      class="ld-wk-dep-dot"
                      :style="{ background: '#4E8268' }"
                    />
                    <div class="ld-wk-dep-info">
                      <div class="ld-wk-dep-name">
                        Вклад · 3 мес · выплата в конце
                      </div>
                      <div class="ld-wk-dep-sub">от 10 000 ₽</div>
                    </div>
                    <div class="ld-wk-dep-right">
                      <div class="ld-wk-rate">21%</div>
                      <div class="ld-wk-dep-sub">+13 125 ₽/год</div>
                    </div>
                  </div>
                  <div class="ld-wk-dep-card">
                    <div
                      class="ld-wk-dep-dot"
                      :style="{ background: '#5E7A9A' }"
                    />

                    <div class="ld-wk-dep-info">
                      <div class="ld-wk-dep-name">
                        Вклад · 1 год · выплата ежемесячно
                      </div>
                      <div class="ld-wk-dep-sub">от 50 000 ₽</div>
                    </div>
                    <div class="ld-wk-dep-right">
                      <div class="ld-wk-rate">19%</div>
                      <div class="ld-wk-dep-sub">+11 875 ₽/год</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ld-winstack-win ld-winstack-win--2">
                <div class="ld-winstack-bar">
                  <div class="ld-mockup-dots"><span /><span /><span /></div>
                  <span class="ld-mockup-title">Банковские карты</span>
                </div>
                <div class="ld-winstack-body">
                  <div class="ld-wk-dep-card">
                    <div
                      class="ld-wk-dep-dot"
                      :style="{ background: '#7B5EA7' }"
                    />
                    <div class="ld-wk-dep-info">
                      <div class="ld-wk-dep-name">
                        Дебетовая · кешбэк на продукты
                      </div>
                      <div class="ld-wk-dep-sub">до 2 500 ₽/мес</div>
                    </div>
                    <div class="ld-wk-dep-right">
                      <div class="ld-wk-rate">5%</div>
                      <div class="ld-wk-dep-sub">кешбэк</div>
                    </div>
                  </div>
                  <div class="ld-wk-dep-card">
                    <div
                      class="ld-wk-dep-dot"
                      :style="{ background: '#B08840' }"
                    />
                    <div class="ld-wk-dep-info">
                      <div class="ld-wk-dep-name">
                        Кредитная · кешбэк повсюду
                      </div>
                      <div class="ld-wk-dep-sub">льготный период 120 дней</div>
                    </div>
                    <div class="ld-wk-dep-right">
                      <div class="ld-wk-rate">3%</div>
                      <div class="ld-wk-dep-sub">кешбэк</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ld-winstack-win ld-winstack-win--3">
                <div class="ld-winstack-bar">
                  <div class="ld-mockup-dots"><span /><span /><span /></div>
                  <span class="ld-mockup-title">Промо · Купоны</span>
                </div>
                <div class="ld-winstack-body">
                  <div class="ld-wk-promo">
                    <div class="ld-wk-promo-cat">Супермаркеты</div>
                    <div class="ld-wk-promo-desc">Скидка на первый заказ</div>
                    <div class="ld-wk-badge" :style="{ background: '#B08840' }">
                      −15%
                    </div>
                  </div>
                  <div class="ld-wk-promo">
                    <div class="ld-wk-promo-cat">Аптеки</div>
                    <div class="ld-wk-promo-desc">На весь ассортимент</div>
                    <div class="ld-wk-badge" :style="{ background: '#5E9478' }">
                      −30%
                    </div>
                  </div>
                  <div class="ld-wk-promo">
                    <div class="ld-wk-promo-cat">Одежда и обувь</div>
                    <div class="ld-wk-promo-desc">
                      Промокод на новую коллекцию
                    </div>
                    <div class="ld-wk-badge" :style="{ background: '#7B5EA7' }">
                      −20%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ld-section">
      <div class="ld-container">
        <div class="ld-feature">
          <div class="ld-feature-text">
            <div class="ld-section-label">Планирование · 10 лет</div>
            <h2 class="ld-h2">
              <span class="ld-h2-pill">ЕСТЬ ПЛАН</span> — ДЕРЖИСЬ ПЛАНА
            </h2>
            <div class="ld-quote-block">
              <div class="ld-quote-text">
                «Никто не любит богатеть медленно. Но это единственный путь,
                доступный каждому.»
              </div>
              <div class="ld-quote-author">
                <img
                  class="ld-quote-avatar"
                  src="/images/authors/bafet.png"
                  alt="Уоррен Баффет"
                />
                <div>
                  <div class="ld-quote-name">Уоррен Баффет</div>
                  <div class="ld-quote-role">
                    Инвестор · Berkshire Hathaway · Состояние $150 млрд
                  </div>
                </div>
              </div>
            </div>
            <p class="ld-feature-desc">
              Большинство людей переоценивают, что сделают за год, и
              недооценивают, что сделают за десять. SmartSpend показывает не
              только текущий бюджет — но и
              <strong>прогноз роста капитала на 10 лет вперёд</strong>. Цифра
              мотивирует сильнее любых советов.
            </p>
          </div>

          <div class="ld-mockup ld-mockup--tilt-right">
            <div class="ld-mockup-topbar">
              <div class="ld-mockup-dots"><span /><span /><span /></div>

              <span class="ld-mockup-title">
                Планирование · прогноз капитала
              </span>
            </div>
            <div class="ld-mockup-body">
              <div class="ld-mk-plan-capital">
                <div class="ld-mk-plan-lbl">Текущий капитал</div>
                <div class="ld-mk-plan-amt">186 400 ₽</div>
              </div>

              <div class="ld-mk-plan-inf-btns">
                <button
                  v-for="item in [0, 5, 15]"
                  :key="item"
                  :class="`ld-mk-plan-inf-btn${planInflation === item ? ' active' : ''}`"
                  @click="planInflation = item"
                >
                  инфляция {{ item }}%
                </button>
              </div>

              <div class="ld-mk-plan-rows">
                <div
                  v-for="item in inflationItems"
                  :key="item.year"
                  class="ld-mk-plan-row"
                >
                  <span class="ld-mk-plan-year">{{ item.year }}</span>

                  <div class="ld-mk-plan-track">
                    <div
                      class="ld-mk-plan-fill"
                      :style="{ width: `${item.pct}%` }"
                    />
                  </div>

                  <span class="ld-mk-plan-val">
                    {{ item.val.toLocaleString('ru-RU') }} ₽
                  </span>
                </div>
              </div>

              <div class="ld-mk-plan-note">
                {{ planInflationLabel }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
