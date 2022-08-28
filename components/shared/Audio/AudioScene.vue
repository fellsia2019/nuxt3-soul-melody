<template>
  <div class="audio-scene" :class="{ 'audio-scene--is-hidden': !isVisible }">
    <AudioProgress
      class="audio-scene__audio-progress"
      :musicTimeData="musicTimeData"
      @setProgress="setProgress"
    />
    <AudioControls
      :musicData="audioData"
      :playingStatus="playingStatus"
      :isActiveIndexMusic="isActiveIndexMusic"
      :lastIndex="lastIndex"
      @setPlayStatus="setPlayStatus"
      @goToPrevTrack="goToPrevTrack"
      @goToNextTrack="goToNextTrack"
    />
    <AudioInfo :audioInfoData="audioData" />
  </div>
</template>

<script setup lang="ts">
import { IMusicItem } from "~~/types/api/shared/Music";
import { IMusicTimeData } from "~~/types/common";

interface IAudioSceneProps {
  audioData: IMusicItem;
  isVisible: boolean;
  playingStatus: boolean;
  isActiveIndexMusic: number | null;
  lastIndex: number | null;
  musicTimeData: IMusicTimeData;
}
interface IAudioSceneEmits {
  (e: "setPlayStatus", playing: boolean): void;
  (e: "goToPrevTrack"): void;
  (e: "goToNextTrack"): void;
  (e: "setProgress", progress: number): void;
}

const props = defineProps<IAudioSceneProps>();
const emit = defineEmits<IAudioSceneEmits>();

const setPlayStatus = (status: boolean) => {
  emit("setPlayStatus", status);
};

const goToPrevTrack = () => {
  emit("goToPrevTrack");
};

const goToNextTrack = () => {
  emit("goToNextTrack");
};

const setProgress = (progress: number) => {
  emit("setProgress", progress);
};
</script>

<style lang="scss">
.audio-scene {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: $gradient-dark;
  padding: 5px 15px;

  display: grid;
  grid-template-columns: 120px auto;
  gap: 20px;
  transition: $transition-mod;

  @media screen and (max-width: $breakpoint-tablet-sm) {
    grid-template-columns: 100px auto;
  }

  // .audio-scene__audio-progress
  &__audio-progress {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  // .audio-scene--is-hidden
  &--is-hidden {
    pointer-events: none;
    transform: translateY(100%);
  }

  // .audio-scene__audio-player
  &__audio-player {
    display: none;
  }
}
</style>
