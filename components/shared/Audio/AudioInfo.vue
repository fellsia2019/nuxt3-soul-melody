<template>
  <div class="audio-info">
    <div class="audio-info__preview">
      <img :src="audioInfoData.logo" alt="" class="audio-info__logo" />
    </div>
    <div class="audio-info__name">{{ audioInfoData.name }}</div>
    <div class="audio-info__author">{{ audioInfoData.author }}</div>
  </div>
</template>

<script lang="ts" setup>
import { IMusicItem } from "~~/types/api/shared/Music";

interface IAudioInfoProps {
  audioInfoData: IMusicItem;
}

const props = defineProps<IAudioInfoProps>();
</script>

<style lang="scss">
.audio-info {
  display: grid;
  align-items: center;
  grid-template-columns: 50px auto 180px;
  gap: 20px;

  @media screen and (max-width: $breakpoint-tablet-sm) {
    gap: 5px;
  }
  @media screen and (max-width: $breakpoint-mob) {
    grid-template-columns: auto auto;
  }

  //   .audio-info__preview
  &__preview {
    height: 100%;
    width: 100%;
    aspect-ratio: 40/40;
    @media screen and (max-width: $breakpoint-tablet-sm) {
      grid-row-start: 1;
      grid-row-end: 3;
    }

    @media screen and (max-width: $breakpoint-mob) {
      display: none;
    }
  }

  // .audio-info__logo
  &__logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .audio-info__name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: $breakpoint-tablet-sm) {
      -webkit-line-clamp: 1;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 2;
      grid-column-end: 4;
    }
    @media screen and (max-width: $breakpoint-mob) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  // .audio-info__author
  &__author {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: $breakpoint-tablet-sm) {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 4;
      color: $color-secondary;
    }
    @media screen and (max-width: $breakpoint-mob) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
}
</style>
