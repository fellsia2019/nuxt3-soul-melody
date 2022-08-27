<template>
  <div class="audio-controls">
    <div
      class="audio-controls__prev"
      :class="{ 'audio-controls__prev--disabled': !canGoToPrev }"
      @click="goToPrevTrack()"
    >
      <ArrowControllIcon />
    </div>
    <div class="audio-controls__actions">
      <PlayButton @click="onPlay()" v-show="!isPlaying" />
      <Pausebutton @click="onPause()" v-show="isPlaying" />
    </div>
    <div
      class="audio-controls__next"
      :class="{ 'audio-controls__next--disabled': !canGoToNext }"
      @click="goToNextTrack()"
    >
      <ArrowControllIcon :direction="directionArrow.RIGHT" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IMusicItem } from "~~/types/api/shared/Music";
import { directionArrow } from "@/types/common";

interface IAudioControlsProps {
  musicData: IMusicItem;
  playingStatus: boolean;
  isActiveIndexMusic: number | null;
  lastIndex: number | null;
}

interface IAudioControlsPropsEmits {
  (e: "setPlayStatus", playing: boolean): void;
  (e: "goToPrevTrack"): void;
  (e: "goToNextTrack"): void;
}

const props = defineProps<IAudioControlsProps>();
const emit = defineEmits<IAudioControlsPropsEmits>();

const canGoToPrev = computed(() => {
  return props.isActiveIndexMusic && props.isActiveIndexMusic !== -1;
});

const canGoToNext = computed(() => {
  return props.lastIndex && props.isActiveIndexMusic !== props.lastIndex;
});

const isPlaying = computed(() => {
  return props.playingStatus;
});

const onPlay = () => {
  emit("setPlayStatus", true);
};

const onPause = () => {
  emit("setPlayStatus", false);
};

const goToPrevTrack = () => {
  emit("goToPrevTrack");
};

const goToNextTrack = () => {
  emit("goToNextTrack");
};
</script>

<style lang="scss">
.audio-controls {
  display: inline-flex;
  align-items: center;

  // .audio-controls__actions
  &__actions {
    margin: 0 15px;
  }

  // .audio-controls__next, .audio-controls__prev
  &__next,
  &__prev {
    transition: $transition-mod;
    cursor: pointer;
    margin-top: 5px;
    &--disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}
</style>
