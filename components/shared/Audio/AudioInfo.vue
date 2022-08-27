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
  grid-template-columns: 50px auto 180px 45px;
  gap: 20px;

  //   .audio-info__preview
  &__preview {
    height: 100%;
    width: 100%;
    aspect-ratio: 40/40;
  }

  // .audio-info__logo
  &__logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
