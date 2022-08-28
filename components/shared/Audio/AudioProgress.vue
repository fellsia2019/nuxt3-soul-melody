<template>
  <div class="audio-progress" @click="setProgress">
    <div
      class="audio-progress__thumb"
      :style="`left:${progressInPercent}%`"
    ></div>
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
interface IAudioProgressEmits {
  (e: "setProgress", progress: number): void;
}

const props = defineProps<IAudioProgressProps>();
const emit = defineEmits<IAudioProgressEmits>();

const progressInPercent = computed<number>(() => {
  return (props.musicTimeData.currentTime * 100) / props.musicTimeData.duration;
});

const setProgress = (e: MouseEvent) => {
  const res =
    (((e.clientX * 100) / window.innerWidth) * props.musicTimeData.duration) /
    100;
  emit("setProgress", res);
};
</script>

<style lang="scss">
.audio-progress {
  width: 100%;
  height: 2px;
  background-color: $color-warning-light;
  transition: $transition-mod;

  &:hover {
    height: 5px;
    .audio-progress__thumb {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  // .audio-progress__thumb
  &__thumb {
    position: absolute;
    top: 50%;
    height: 15px;
    width: 5px;
    border-radius: 5px;
    background-color: $color-warning;
    transform: translate(-50%, -50%) scale(0.3);
    opacity: 0;
    transition: $transition-mod-lazzy;
  }

  // .audio-progress__bar
  &__bar {
    height: 100%;
    background-color: $color-warning;
    transition: $transition-mod-lazzy;
  }
}
</style>
