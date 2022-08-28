<template>
  <main class="catalog-page">
    <CatalogTitleBlock class="catalog-page__title-block" :title="title" />
    <CatalogCards :catalogList="catalogList" />
  </main>
</template>

<script lang="ts" setup>
import { ICatalogCard } from "~~/types/api/shared/Catalog";

const title = "Pick a playlist for your soul";

const catalogList: Array<ICatalogCard> = [
  {
    title: "Pianino",
    route: "pianino",
    image: "/img/catalog/pianino.jpg",
  },
  {
    title: "Koto",
    route: "koto",
    image: "/img/catalog/koto.jpg",
  },
  {
    title: "Violin",
    route: "violin",
    image: "/img/catalog/violin.jpg",
  },
  {
    title: "shamisen",
    route: "shamisen",
    image: "/img/catalog/shamisen.jpeg",
  },
];
</script>

<style lang="scss">
.catalog-page {
  // .catalog-page__title-block
  &__title-block {
    margin-bottom: 80px;
    @media screen and (max-width: $breakpoint-desktop-md) {
      margin-bottom: 60px;
    }

    @media screen and (max-width: $breakpoint-tablet-sm) {
      margin-bottom: 40px;
    }
  }
}
</style>
