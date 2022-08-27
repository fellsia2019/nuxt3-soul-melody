<template>
  <div class="music-item" :class="{ 'music-item--is-active': isActive }">
    <div class="music-item__inner">
      <audio class="music-item__audio" ref="audioRef">
        <source :src="musicData.url" type="audio/mpeg" />
      </audio>
      <div class="music-item__preview">
        <img
          :src="musicData.logo"
          class="music-item__logo"
          :class="{ 'music-item__logo--with-filter': isActive }"
        />
        <PlayButton
          class="music-item__controll"
          v-show="!isPlaying || !isActive"
          @click="onEmitPlay()"
        />
        <Pausebutton
          class="music-item__controll"
          v-show="isPlaying && isActive"
          @click="onEmitPause()"
        />
      </div>
      <p class="music-item__track">{{ musicData.name }}</p>
      <p class="music-item__author">{{ musicData.author }}</p>
      <time class="music-item__time color-secondary">{{ duration }} </time>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMusicItem } from "@/types/api/shared/Music";

import { IMusicTimeData } from "~~/types/common";

interface IMusicItemProps {
  musicData: IMusicItem;
  isActiveIdMusic: number | null;
  playingStatus: boolean;
  newProgress: number | null;
}

interface IMusicItemEmits {
  (e: "setActiveMusicId", id: number): void;
  (e: "setPlayStatus", playing: boolean): void;
  (e: "goToNextTrack"): void;
  (e: "onUpdateMusicTimeData", data: IMusicTimeData): void;
}

const props = defineProps<IMusicItemProps>();

const emit = defineEmits<IMusicItemEmits>();

// для отображения в DOM, форматированная строка
const duration = ref<string>("");

// в секундах
const currentTime = ref<number>(0);

const audioRef = ref<HTMLAudioElement | null>(null);

const isActive = computed<boolean>(() => {
  return props.musicData.id === props.isActiveIdMusic;
});

const isPlaying = computed<boolean>(() => {
  return props.playingStatus && isActive.value;
});

const onEmitPlay = () => {
  if (!audioRef.value) return;
  emit("setPlayStatus", true);
  emit("setActiveMusicId", props.musicData.id);
};

const onEmitPause = () => {
  if (!audioRef.value) return;
  emit("setPlayStatus", false);
  emit("setActiveMusicId", props.musicData.id);
};

const onEmitMusicTimeData = () => {
  emit("onUpdateMusicTimeData", {
    duration: audioRef.value?.duration || 0,
    currentTime: currentTime.value,
  });
};

const formatedTime = (time: number) => {
  const val = time / 60;
  const minute = Math.trunc(val) < 10 ? `0${Math.trunc(val)}` : Math.trunc(val);
  const second =
    Math.trunc((val % 1) * 60) < 10
      ? `0${Math.trunc((val % 1) * 60)}`
      : Math.trunc((val % 1) * 60);
  return `${minute}:${second}`;
};

// длительность трека должна быть в апи, но так как апи фейковый, то получаем длительность на фронте
const setDuration = () => {
  if (!audioRef.value) return;
  duration.value = formatedTime(audioRef.value.duration);
};

const stopAudio = () => {
  if (!audioRef.value) return;
  audioRef.value.pause();
  audioRef.value.currentTime = 0;
};

const onTimeUpdate = () => {
  if (!audioRef.value) return;
  currentTime.value = audioRef.value.currentTime;
  onEmitMusicTimeData();
};

// останавливаем трек и включаем следующий по окончанию текущего
const onEnded = () => {
  stopAudio();
  onEmitMusicTimeData();
  onEmitPause();
  emit("goToNextTrack");
};

// перемотка
// инициализируется при клике по прогрессбару
const onSetNewProgress = () => {
  if (typeof props.newProgress !== "number" || !audioRef.value) return;
  audioRef.value.currentTime = props.newProgress;
};

onMounted(() => {
  setTimeout(() => {
    if (!audioRef.value) return;
    audioRef.value.addEventListener("timeupdate", onTimeUpdate);
    audioRef.value.addEventListener("ended", onEnded);
    audioRef.value.addEventListener("loadeddata", setDuration);
  });
});

onBeforeUnmount(() => {
  if (!audioRef.value) return;
  audioRef.value.removeEventListener("timeupdate", onTimeUpdate);
  audioRef.value.removeEventListener("ended", onEnded);
  audioRef.value.removeEventListener("loadeddata", setDuration);
});

// change progress
watch(
  () => props.newProgress,
  () => {
    onSetNewProgress();
  }
);

// play / pause
watch(
  () => isPlaying.value,
  () => {
    if (isPlaying.value) {
      audioRef.value?.play();
    } else {
      audioRef.value?.pause();
    }
  }
);

watch(
  () => props.isActiveIdMusic,
  () => {
    setTimeout(() => {
      // останавливаем трек, с которого ушли на новый
      if (!isActive.value) return stopAudio();

      // эмитим duration и время проигрывания
      onEmitMusicTimeData();
    });
  }
);
</script>

<style lang="scss">
.music-item {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    user-select: none;
    pointer-events: none;
    background: $gradient-dark;
    transition: $transition-mod;
    z-index: -1;
  }

  // .music-item--is-active
  &--is-active,
  &:hover {
    &::before {
      width: 100%;
    }
  }
  // .music-item__inner
  &__inner {
    display: grid;
    grid-template-columns: 40px auto 180px 50px;
    gap: 25px;
    align-items: center;
    padding: 5px;
  }

  // .music-item__audio
  &__audio {
    display: none;
  }

  //   .music-item__preview
  &__preview {
    position: relative;

    &:hover {
      .music-item__controll {
        opacity: 1;
      }
      .music-item__logo {
        filter: blur(1px);
      }
    }
  }

  // .music-item__logo
  &__logo {
    width: 100%;
    height: 100%;
    aspect-ratio: 50/50;
    object-position: center;
    object-fit: cover;
    transition: $transition-mod;

    // .music-item__logo--with-filter
    &--with-filter {
      opacity: 0.7;
    }
  }

  // .music-item__controll
  &__controll {
    opacity: 0;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
