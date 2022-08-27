import { defineStore } from "pinia";
import { musicDataListPlaceholder } from "~~/placeholders/common/MusicDataPlaceholder";
import { IMusicItem } from "~~/types/api/shared/Music";

interface IMusicApiState {
  musicList: Array<IMusicItem>;
}

export const useMusicListStore = defineStore("musicList", {
  state: (): IMusicApiState => ({
    musicList: musicDataListPlaceholder,
  }),
  actions: {
    async LOAD_MUSIC_LIST(type: string) {
      const res: Array<IMusicItem> = await $fetch(
        getRoute("mock", "music", {}, { type: type })
      );
      if (!res) return console.error("response is empty! LOAD_VACANCY_TAGS");
      this.musicList = res;
    },
  },
});
