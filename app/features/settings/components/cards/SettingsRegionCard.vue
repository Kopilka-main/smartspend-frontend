<script setup lang="ts">
const timeZone = ref('Europe/Moscow')

const timeZoneOptions = [
  {
    label: 'UTC+2 — Калининград',
    value: 'Europe/Kaliningrad'
  },
  {
    label: 'UTC+3 — Москва, Санкт-Петербург',
    value: 'Europe/Moscow'
  },
  {
    label: 'UTC+4 — Самара, Ижевск',
    value: 'Europe/Samara'
  },
  {
    label: 'UTC+5 — Екатеринбург',
    value: 'Asia/Yekaterinburg'
  },
  {
    label: 'UTC+6 — Омск',
    value: 'Asia/Omsk'
  },
  {
    label: 'UTC+7 — Красноярск, Новосибирск',
    value: 'Asia/Krasnoyarsk'
  },
  {
    label: 'UTC+8 — Иркутск',
    value: 'Asia/Irkutsk'
  },
  {
    label: 'UTC+9 — Якутск',
    value: 'Asia/Yakutsk'
  },
  {
    label: 'UTC+10 — Владивосток',
    value: 'Asia/Vladivostok'
  },
  {
    label: 'UTC+11 — Магадан',
    value: 'Asia/Magadan'
  },
  {
    label: 'UTC+12 — Камчатка',
    value: 'Asia/Kamchatka'
  }
]

const positionOptions = [
  {
    groupLabel: 'Крупные города',
    items: []
  },
  {
    groupLabel: 'Области и регионы',
    items: []
  }
]
</script>

<template>
  <div class="settings-section">
    <div class="settings-section-title">Региональные настройки</div>

    <div class="settings-row">
      <div>
        <div class="settings-row-label">Часовой пояс</div>

        <div class="settings-row-desc">
          Используется для расчёта напоминаний и временных меток
        </div>
      </div>

      <select v-model="timeZone" class="settings-tz-select">
        <option
          v-for="option in timeZoneOptions"
          :key="option.label"
          :value="option.value"
        >
          {{ option.label }}
        </option>
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
          <option value="karachayevo">Карачаево-Черкесская Республика</option>
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
</template>
