<script setup lang="ts">
import AppSwitch from '~/components/ui/inputs/AppSwitch.vue'
import AppVisibilitySelect from '~/components/ui/inputs/AppVisibilitySelect.vue'

definePageMeta({
  layout: 'dashboard',
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/'
  }
})

useHead({
  title: 'Настройки'
})

const isDarkMode = ref(false)

const notifications = [
  {
    key: 'newSets',
    label: 'Новые наборы',
    desc: 'Когда добавляются новые наборы в каталог'
  },
  {
    key: 'articles',
    label: 'Статьи от авторов',
    desc: 'Когда выходят новые статьи'
  },
  {
    key: 'authorUpdates',
    label: 'Обновления подписок',
    desc: 'Уведомления о новых статьях и наборах у авторов, на которых вы подписаны'
  },
  {
    key: 'setChanges',
    label: 'Изменения в наборах',
    desc: 'Уведомления об изменениях в наборах, которые у вас оформлены'
  },
  {
    key: 'reminders',
    label: 'Напоминания',
    desc: 'Напоминания обновить инвентарь'
  }
]

const hasPassword = computed(() => {
  return false
})

const socialProviderLabel = computed(() => {
  return ''
})

const isSocialUser = computed(() => {
  return false
})

const currentEmail = computed(() => {
  return ''
})
</script>

<template>
  <main class="settings-main">
    <div class="settings-inner">
      <div>
        <div
          class="page-title"
          :style="{ display: 'flex', alignItems: 'center', gap: '10px' }"
        >
          Настройки
        </div>

        <div class="page-subtitle">Управление приложением и аккаунтом</div>
      </div>

      <div id="sp-settings-appear" class="settings-section">
        <div class="settings-section-title">Внешний вид</div>

        <div class="settings-row">
          <div>
            <div class="settings-row-label">Тёмная тема</div>

            <div class="settings-row-desc">
              Переключить оформление приложения
            </div>
          </div>

          <AppSwitch v-model="isDarkMode" />
        </div>
      </div>

      <div id="sp-settings-notifs" class="settings-section">
        <div class="settings-section-title">Уведомления</div>

        <div
          v-for="item in notifications"
          :key="item.label"
          class="settings-row"
        >
          <div>
            <div class="settings-row-label">{{ item.label }}</div>
            <div class="settings-row-desc">{{ item.desc }}</div>
          </div>

          <AppSwitch />
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-section-title">Региональные настройки</div>

        <div class="settings-row">
          <div>
            <div class="settings-row-label">Часовой пояс</div>

            <div class="settings-row-desc">
              Используется для расчёта напоминаний и временных меток
            </div>
          </div>

          <select class="settings-tz-select">
            <option value="Europe/Kaliningrad">UTC+2 — Калининград</option>
            <option value="Europe/Moscow">
              UTC+3 — Москва, Санкт-Петербург
            </option>
            <option value="Europe/Samara">UTC+4 — Самара, Ижевск</option>
            <option value="Asia/Yekaterinburg">UTC+5 — Екатеринбург</option>
            <option value="Asia/Omsk">UTC+6 — Омск</option>
            <option value="Asia/Krasnoyarsk">
              UTC+7 — Красноярск, Новосибирск
            </option>
            <option value="Asia/Irkutsk">UTC+8 — Иркутск</option>
            <option value="Asia/Yakutsk">UTC+9 — Якутск</option>
            <option value="Asia/Vladivostok">UTC+10 — Владивосток</option>
            <option value="Asia/Magadan">UTC+11 — Магадан</option>
            <option value="Asia/Kamchatka">UTC+12 — Камчатка</option>
          </select>
        </div>

        <div class="settings-row">
          <div>
            <div class="settings-row-label">Местоположение</div>

            <div class="settings-row-desc">
              Влияет на локальные акции и предложения в вашем регионе
            </div>
          </div>

          <select class="settings-tz-select">
            <option value="">Не указано</option>
            <optgroup label="Крупные города">
              <option value="moscow">Москва</option>
              <option value="spb">Санкт-Петербург</option>
              <option value="novosibirsk">Новосибирск</option>
              <option value="ekaterinburg">Екатеринбург</option>
              <option value="kazan">Казань</option>
              <option value="nizhny">Нижний Новгород</option>
              <option value="chelyabinsk">Челябинск</option>
              <option value="samara">Самара</option>
              <option value="omsk">Омск</option>
              <option value="rostov">Ростов-на-Дону</option>
              <option value="ufa">Уфа</option>
              <option value="krasnoyarsk">Красноярск</option>
              <option value="voronezh">Воронеж</option>
              <option value="perm">Пермь</option>
              <option value="volgograd">Волгоград</option>
            </optgroup>
            <optgroup label="Области и регионы">
              <option value="adygeya">Республика Адыгея</option>
              <option value="altay_r">Республика Алтай</option>
              <option value="altaysky">Алтайский край</option>
              <option value="amurskaya">Амурская область</option>
              <option value="arhangelskaya">Архангельская область</option>
              <option value="astrahanskaya">Астраханская область</option>
              <option value="bashkortostan">Республика Башкортостан</option>
              <option value="belgorodskaya">Белгородская область</option>
              <option value="bryanskaya">Брянская область</option>
              <option value="buryatiya">Республика Бурятия</option>
              <option value="vladimirskaya">Владимирская область</option>
              <option value="volgogradskaya">Волгоградская область</option>
              <option value="vologodskaya">Вологодская область</option>
              <option value="voronezhskaya">Воронежская область</option>
              <option value="dagestan">Республика Дагестан</option>
              <option value="evrey">Еврейская автономная область</option>
              <option value="zabaykalsky">Забайкальский край</option>
              <option value="ivanovskaya">Ивановская область</option>
              <option value="ingushetiya">Республика Ингушетия</option>
              <option value="irkutskaya">Иркутская область</option>
              <option value="kabardino">Кабардино-Балкарская Республика</option>
              <option value="kalinigradskaya">Калининградская область</option>
              <option value="kalmykiya">Республика Калмыкия</option>
              <option value="kaluzhskaya">Калужская область</option>
              <option value="kamchatsky">Камчатский край</option>
              <option value="karachayevo">
                Карачаево-Черкесская Республика
              </option>
              <option value="kareliya">Республика Карелия</option>
              <option value="kemerovskaya">Кемеровская область</option>
              <option value="kirovskaya">Кировская область</option>
              <option value="komi">Республика Коми</option>
              <option value="kostromskaya">Костромская область</option>
              <option value="krasnodarsky">Краснодарский край</option>
              <option value="krasnoyarsky">Красноярский край</option>
              <option value="kurganskaya">Курганская область</option>
              <option value="kurskaya">Курская область</option>
              <option value="leningradskaya">Ленинградская область</option>
              <option value="lipetskaya">Липецкая область</option>
              <option value="magadanskaya">Магаданская область</option>
              <option value="mariy_el">Республика Марий Эл</option>
              <option value="mordoviya">Республика Мордовия</option>
              <option value="moskovskaya">Московская область</option>
              <option value="murmanskaya">Мурманская область</option>
              <option value="nenets">Ненецкий автономный округ</option>
              <option value="nizhegorodskaya">Нижегородская область</option>
              <option value="novgorodskaya">Новгородская область</option>
              <option value="novosibirskaya">Новосибирская область</option>
              <option value="omskaya">Омская область</option>
              <option value="orenburgskaya">Оренбургская область</option>
              <option value="orlovskaya">Орловская область</option>
              <option value="penzenskaya">Пензенская область</option>
              <option value="permsky">Пермский край</option>
              <option value="primorsky">Приморский край</option>
              <option value="pskovskaya">Псковская область</option>
              <option value="rostovskaya">Ростовская область</option>
              <option value="ryazanskaya">Рязанская область</option>
              <option value="samarskaya">Самарская область</option>
              <option value="saratovskaya">Саратовская область</option>
              <option value="sakha">Республика Саха (Якутия)</option>
              <option value="sakhalinskaya">Сахалинская область</option>
              <option value="sverdlovskaya">Свердловская область</option>
              <option value="severnaya_osetiya">
                Республика Северная Осетия — Алания
              </option>
              <option value="smolenskaya">Смоленская область</option>
              <option value="stavropolsky">Ставропольский край</option>
              <option value="tambovskaya">Тамбовская область</option>
              <option value="tatarstan">Республика Татарстан</option>
              <option value="tverskaya">Тверская область</option>
              <option value="tomskaya">Томская область</option>
              <option value="tulskaya">Тульская область</option>
              <option value="tyva">Республика Тыва</option>
              <option value="tyumenskaya">Тюменская область</option>
              <option value="udmurtiya">Удмуртская Республика</option>
              <option value="ulyanovskaya">Ульяновская область</option>
              <option value="khabarovsk">Хабаровский край</option>
              <option value="khakasiya">Республика Хакасия</option>
              <option value="khanty">Ханты-Мансийский автономный округ</option>
              <option value="chelyabinskaya">Челябинская область</option>
              <option value="chechnya">Чеченская Республика</option>
              <option value="chuvashiya">Чувашская Республика</option>
              <option value="chukotka">Чукотский автономный округ</option>
              <option value="yamalo">Ямало-Ненецкий автономный округ</option>
              <option value="yaroslavskaya">Ярославская область</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div id="sp-settings-privacy" class="settings-section">
        <div class="settings-section-title">Конфиденциальность</div>

        <div class="settings-row settings-row-vert">
          <div>
            <div class="settings-row-label">Кто может видеть мои наборы</div>
            <div class="settings-row-desc">
              Личные наборы всегда видны только вам
            </div>
          </div>

          <AppVisibilitySelect />
        </div>

        <div class="settings-row settings-row-vert">
          <div>
            <div class="settings-row-label">Кто может видеть мои статьи</div>
            <div class="settings-row-desc">
              Статьи в черновике всегда видны только вам
            </div>
          </div>

          <AppVisibilitySelect />
        </div>

        <div class="settings-row settings-row-vert">
          <div>
            <div class="settings-row-label">Кто может видеть мой профиль</div>
            <div class="settings-row-desc">
              Имя, аватар, подписки и активность
            </div>
          </div>

          <AppVisibilitySelect />
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-section-title">Аккаунт и безопасность</div>

        <div class="settings-row">
          <div>
            <div class="settings-row-label">Электронная почта</div>

            <div class="settings-row-desc settings-row-value">
              {{ currentEmail }}

              <span v-if="isSocialUser" class="conn-provider-badge">
                управляется {{ socialProviderLabel }}
              </span>
            </div>
          </div>

          <button v-if="!isSocialUser" class="settings-action-btn">
            Изменить
          </button>
        </div>

        <div class="settings-row">
          <div>
            <div class="settings-row-label">Пароль</div>
            <div class="settings-row-desc">
              <span v-if="isSocialUser && !hasPassword">
                Не установлен — вход через {{ socialProviderLabel }}
              </span>
              <span v-else>
                <span class="pass-dots">••••••••</span> Последнее изменение:
                недавно
              </span>
            </div>

            <div v-if="isSocialUser && !hasPassword" class="settings-row-hint">
              После создания можно будет также входить по email
            </div>
          </div>

          <button class="settings-action-btn">
            {{ isSocialUser && !hasPassword ? 'Создать пароль' : 'Сменить' }}
          </button>
        </div>

        <div class="settings-conn-accounts">
          <div class="settings-conn-title">Привязанные аккаунты</div>
        </div>
      </div>

      <div class="settings-section settings-danger-zone">
        <div class="settings-section-title">Опасная зона</div>

        <div class="settings-row">
          <div>
            <div class="settings-row-label">Выйти из аккаунта</div>
            <div class="settings-row-desc">
              Завершить сеанс на этом устройстве
            </div>
          </div>

          <button class="btn-danger">Выйти</button>
        </div>
      </div>
    </div>
  </main>
</template>
