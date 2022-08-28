<template>
  <section class="catalog-cards">
    <div class="catalog-cards__inner">
      <div
        class="catalog-cards__card"
        v-for="(item, i) in catalogList"
        :key="`catalog-cards__card-${i}`"
      >
        <CatalogCard :cardData="item" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ICatalogCard } from "~~/types/api/shared/Catalog";

interface ICatalogCardsProps {
  catalogList: Array<ICatalogCard>;
}

const props = defineProps<ICatalogCardsProps>();
</script>

<style lang="scss">
.catalog-cards {
  // .catalog-cards__inner
  &__inner {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
    @media screen and (max-width: $breakpoint-mob) {
      display: block;
      margin: 0;
    }
  }

  // .catalog-cards__card
  &__card {
    padding: 15px;
    max-width: 50%;
    width: 100%;
    @media screen and (max-width: $breakpoint-mob) {
      max-width: 100%;
      padding: 0;
      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }
  }
}
</style>
