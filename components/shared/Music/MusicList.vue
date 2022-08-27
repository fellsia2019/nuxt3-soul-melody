<template>
  <div class="music-list">
    <MusicItem
      class="music-list__music-item"
      v-for="music in musicList"
      :key="`music-list__music-item-${music.id}`"
      :musicData="music"
      :isActiveIdMusic="isActiveIdMusic"
      :playingStatus="playingStatus"
      @setActiveMusicId="setActiveMusicId"
      @setPlayStatus="setPlayStatus"
      @goToNextTrack="goToNextTrack"
      @onUpdateMusicTimeData="onUpdateMusicTimeData"
    />
  </div>
</template>

<script lang="ts" setup>
import { IMusicItem } from "~~/types/api/shared/Music";
import { IMusicTimeData } from "~~/types/common";

interface IMusicListProps {
  musicList: Array<IMusicItem>;
  playingStatus: boolean;
  isActiveIdMusic: number;
}

interface IMusicListEmits {
  (e: "setActiveMusicId", id: number): void;
  (e: "setPlayStatus", playing: boolean): void;
  (e: "goToNextTrack"): void;
  (e: "onUpdateMusicTimeData", data: IMusicTimeData): void;
}

const emit = defineEmits<IMusicListEmits>();

const props = defineProps<IMusicListProps>();

const setActiveMusicId = (id: number) => {
  emit("setActiveMusicId", id);
};

const setPlayStatus = (status: boolean) => {
  emit("setPlayStatus", status);
};

const goToNextTrack = () => {
  emit("goToNextTrack");
};

const onUpdateMusicTimeData = (data: IMusicTimeData) => {
  emit("onUpdateMusicTimeData", data);
};
</script>

<style lang="scss">
.music-list {
  // .music-list__music-item
  &__music-item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
