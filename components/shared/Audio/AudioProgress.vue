<template>
  <div class="audio-progress">
    <div
      class="audio-progress__bar"
      :style="`width:${progressInPercent}%`"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { IMusicTimeData } from "~~/types/common";

interface IAudioProgressProps {
  musicTimeData: IMusicTimeData;
}

const props = defineProps<IAudioProgressProps>();
const progressInPercent = computed<number>(() => {
  return (props.musicTimeData.currentTime * 100) / props.musicTimeData.duration;
});
</script>

<style lang="scss">
.audio-progress {
  width: 100%;
  height: 2px;
  background-color: $color-dark;

  // .audio-progress__bar
  &__bar {
    height: 100%;
    background-color: $color-warning;
    transition: $transition-mod-lazzy;
  }
}
</style>
