<script setup lang="ts">
import type { CustomSet } from '~/types'

type ArticleLinkedSetCatalogCardProps = {
  set: CustomSet
}

defineProps<ArticleLinkedSetCatalogCardProps>()
</script>

<template>
  <div class="catalog-card">
    <div class="card-body">
      <div class="card-title">{{ set.title }}</div>

      <div v-if="set.description" class="card-desc">
        {{ set.description }}
      </div>
    </div>
    <div class="card-cost-row">
      <div class="card-cost-item card-cost-monthly">
        <div class="card-cost-val">
          {{ (set.amount || 0).toLocaleString('ru') }} ₽
        </div>
        <div class="card-cost-lbl">{{ set.amountLabel || 'в месяц' }}</div>
      </div>

      <template v-if="set.amountLabel">
        <div class="card-cost-sep" />

        <div class="card-cost-item">
          <div class="card-cost-val">{{ set.amountLabel }}</div>
          <div class="card-cost-lbl">период</div>
        </div>
      </template>

      <template v-if="set.usersCount">
        <div class="card-cost-sep" />

        <div class="card-cost-item">
          <div class="card-cost-val">{{ set.usersCount }}</div>
          <div class="card-cost-lbl">подписчиков</div>
        </div>
      </template>
    </div>
  </div>
</template>
