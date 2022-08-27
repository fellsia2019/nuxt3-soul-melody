<template>
  <nuxt-link
    :to="{ name: 'music-slug', params: { slug: cardData.route } }"
    class="catalog-card"
    :style="`background-image:url(${cardData.image})`"
  >
    <div class="catalog-card__shadow"></div>
    <div class="catalog-card__inner">
      <h2 class="catalog-card__title color-light">{{ cardData.title }}</h2>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { ICatalogCard } from "~~/types/api/shared/Catalog";

interface ICatalogCardProps {
  cardData: ICatalogCard;
}

const props = defineProps<ICatalogCardProps>();
</script>

<style lang="scss">
.catalog-card {
  position: relative;
  background-color: $color-warning;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  aspect-ratio: 100/100;
  padding: 20px;
  cursor: pointer;

  &:hover {
    .catalog-card__shadow {
      background-color: rgba($color-dark, 0.2);
    }
  }

  //   .catalog-card__shadow
  &__shadow {
    box-shadow: 2px 2px 9px 3px rgba($color-primary, 0.45);
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color-dark, 0.6);
    transition: $transition-mod;
  }

  //   .catalog-card__inner
  &__inner {
    position: relative;
    z-index: 1;
    transition: $transition-mod;
  }
}
</style>
