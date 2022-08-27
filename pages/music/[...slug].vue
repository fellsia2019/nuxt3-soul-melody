<template>
  <div class="music-detail-page">
    <h1 class="music-detail-page__title title-lg">
      <span class="color-primary">{{ typeMusic }}</span>
    </h1>
    <MusicList
      :musicList="musicStore.musicList"
      :playingStatus="playingStatus"
      :isActiveIdMusic="isActiveIdMusic"
      :newProgress="newProgress"
      @setActiveMusicId="setActiveMusicId"
      @setPlayStatus="setPlayStatus"
      @goToNextTrack="goToNextTrack"
      @onUpdateMusicTimeData="onUpdateMusicTimeData"
    />
    <AudioScene
      :audioData="currentAudio"
      :isVisible="currentAudioIsNotEmpty"
      :playingStatus="playingStatus"
      :isActiveIndexMusic="isActiveIndexMusic"
      :lastIndex="lastIndex"
      :musicTimeData="musicTimeData"
      @setPlayStatus="setPlayStatus"
      @goToPrevTrack="goToPrevTrack()"
      @goToNextTrack="goToNextTrack()"
      @setProgress="setProgress"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMusicListStore } from "~/store/common/Music";
import { musicDataPlaceholder } from "~~/placeholders/common/MusicDataPlaceholder";
import { IMusicItem } from "~~/types/api/shared/Music";
import { IMusicTimeData } from "~~/types/common";

const route = useRoute();
const musicStore = useMusicListStore();

// тип плейлиста по slug в route
const typeMusic = computed<string>(() => {
  if (!route.params.slug) throw new Error("slug is not defined");
  return Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug;
});

// получаем список треков по slug страницы
musicStore.LOAD_MUSIC_LIST(typeMusic.value);

// index активного трека
const isActiveIndexMusic = computed<number | null>(() => {
  const index = musicStore.musicList.findIndex(
    (item) => item.id === isActiveIdMusic.value
  );
  return index === -1 ? null : index;
});

const lastIndex = computed<number | null>(() => {
  return musicStore.musicList.length ? musicStore.musicList.length - 1 : null;
});

// id активного трека
const isActiveIdMusic = ref<number>(0);

// текущий статус плеера
const playingStatus = ref<boolean>(false);

const setActiveMusicId = (id: number) => {
  isActiveIdMusic.value = id;
};

// текущий трек по активному айдишнику
const currentAudio = computed<IMusicItem>(() => {
  if (
    !isActiveIdMusic.value ||
    !musicStore.musicList ||
    !musicStore.musicList.length
  )
    return musicDataPlaceholder;

  return (
    musicStore.musicList.find((item) => item.id === isActiveIdMusic.value) ||
    musicDataPlaceholder
  );
});

// показываем плеер с контролами, если есть трек
const currentAudioIsNotEmpty = computed<boolean>(() => {
  return !!currentAudio.value.id;
});

const setPlayStatus = (status: boolean) => {
  playingStatus.value = status;
};

const goToPrevTrack = () => {
  if (!isActiveIndexMusic.value) return;
  setActiveMusicId(musicStore.musicList[isActiveIndexMusic.value - 1].id);
  setPlayStatus(true);
};

const goToNextTrack = () => {
  if (
    typeof isActiveIndexMusic.value !== "number" ||
    isActiveIndexMusic.value === lastIndex.value
  )
    return;
  setActiveMusicId(musicStore.musicList[isActiveIndexMusic.value + 1].id);
  setPlayStatus(true);
};

const newProgress = ref<number | null>(null);

const setProgress = (progress: number) => {
  newProgress.value = progress;
};

const musicTimeData = ref<IMusicTimeData>({ duration: 0, currentTime: 0 });

const onUpdateMusicTimeData = (data: IMusicTimeData) => {
  musicTimeData.value = data;
};

onBeforeUnmount(() => {
  musicStore.$reset();
});
</script>

<style lang="scss">
.music-detail-page {
  // .music-detail-page__title
  &__title {
    margin-bottom: 45px;
  }
}
</style>
