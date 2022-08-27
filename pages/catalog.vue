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
    image:
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/16FCC/production/_110865149_a8a1be04-493d-4aa4-bd9b-a393bc47d278.jpg",
  },
  {
    title: "Koto",
    route: "koto",
    image: "https://manabink.com/wp-content/uploads/2019/12/koto.jpg",
  },
  {
    title: "Violin",
    route: "violin",
    image:
      "https://zinginstruments.com/wp-content/uploads/2020/02/violin-on-top-of-sheet-music.png",
  },
  {
    title: "Guitar",
    route: "guitar",
    image:
      "https://yourguitarspace.files.wordpress.com/2022/06/img-ce-crop-left-strummed_acoustic_overview_02_in_session-9058e8f9f15f5811fb1428b67d591bfa-t402x.jpg",
  },
];
</script>

<style lang="scss">
.catalog-page {
  // .catalog-page__title-block
  &__title-block {
    margin-bottom: 80px;
    @media screen and (max-width: $breakpoint-desktop-md) {
      margin-top: 60px;
    }

    @media screen and (max-width: $breakpoint-tablet-sm) {
      margin-top: 40px;
    }
  }
}
</style>
