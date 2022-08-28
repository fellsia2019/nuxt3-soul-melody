import { IMusicItem } from "~~/types/api/shared/Music";

interface IMusicApi {
  [key: string]: Array<IMusicItem>;
}

export default defineEventHandler((event) => {
  const typeMusic = useQuery(event);

  const musicList: IMusicApi = {
    pianino: [
      {
        id: 1,
        logo: "https://i.natgeofe.com/n/72dab815-674c-4fe0-9f3e-f1556934381a/chopin_square.jpg",
        name: "Cry of soul",
        author: "Frederis Chopin",
        url: "/audio/piano/Chopin/frederik-shopen--dusha-plachet.mp3",
      },
      {
        id: 2,
        logo: "https://i.natgeofe.com/n/72dab815-674c-4fe0-9f3e-f1556934381a/chopin_square.jpg",
        name: "Собачий Вальс",
        author: "Frederis Chopin",
        url: "/audio/piano/Chopin/frederik-shopen--sobachiy-val-s.mp3",
      },
      {
        id: 3,
        logo: "https://i.natgeofe.com/n/72dab815-674c-4fe0-9f3e-f1556934381a/chopin_square.jpg",
        name: "Edem garden",
        author: "Frederis Chopin",
        url: "/audio/piano/Chopin/frederik-shopen-sad-edema.mp3",
      },
      {
        id: 4,
        logo: "https://i.natgeofe.com/n/72dab815-674c-4fe0-9f3e-f1556934381a/chopin_square.jpg",
        name: "Venskiy Valtz",
        author: "Frederis Chopin",
        url: "/audio/piano/Chopin/frederik-shopen-venskiy-val-s.mp3",
      },
      {
        id: 5,
        logo: "https://i.natgeofe.com/n/72dab815-674c-4fe0-9f3e-f1556934381a/chopin_square.jpg",
        name: "Valtz of Chopin",
        author: "Frederis Chopin",
        url: "/audio/piano/Chopin/shopen-shubert-val-s-f-shopen.mp3",
      },
    ],
    koto: [
      {
        id: 1,
        logo: "https://readersrecommend.files.wordpress.com/2011/10/koto-yurimoto_keiko-koto-x800.jpg",
        name: "Koto classical japan melody",
        author: "Japan artist",
        url: "/audio/koto/any/eidai-fuzoku-koto-gakko-sokyoku-bu-exposed-wind-hand-saundtrek-iz-anime-zaderzhi-ehtot-zvuk-stop-this-sound-sezon-1.mp3",
      },
      {
        id: 2,
        logo: "https://readersrecommend.files.wordpress.com/2011/10/koto-yurimoto_keiko-koto-x800.jpg",
        name: "Himesaka Jogakuin Sokyoku-Bu",
        author: "Two Personalities",
        url: "/audio/koto/any/Himesaka Jogakuin Sokyoku-Bu - Two Personalities.mp3",
      },
      {
        id: 3,
        logo: "https://readersrecommend.files.wordpress.com/2011/10/koto-yurimoto_keiko-koto-x800.jpg",
        name: "For the 13 man tribe stop this sound",
        author: "Kazusa Aoi and Satsuki Aoi and Sakurai Ayu",
        url: "/audio/koto/any/kazusa-aoi-and-satsuki-aoi-sakurai-ayu-sakura-sakura-for-the-13-man-tribe-muzyka-iz-anime-zaderzhi-ehtot-zvuk-stop-this-sound-sezon-.mp3",
      },
      {
        id: 4,
        logo: "https://readersrecommend.files.wordpress.com/2011/10/koto-yurimoto_keiko-koto-x800.jpg",
        name: "Tokise Koto Gakko Sokyoku",
        author: "Kuon",
        url: "/audio/koto/any/Tokise_Koto_Gakko_Sokyoku-bu_-_Kuon.mp3",
      },
    ],
    violin: [
      {
        id: 1,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Concerto In G Minor, RV 517 II. Andante",
        author: "Antonio Vivaldi",
        url: "/audio/strings/Vivaldi/Antonio Vivaldi - Concerto In G Minor, RV 517 II. Andante.mp3",
      },
      {
        id: 2,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Tosco fantasy",
        author: "Antonio Vivaldi",
        url: "/audio/strings/Vivaldi/antonio-lyuchio-vival-di---tosco-fantasy.mp3",
      },
      {
        id: 3,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Танго смерти",
        author: "Antonio Vivaldi",
        url: "/audio/strings/Vivaldi/antonio-lyuchio-vival-di-tango-smerti.mp3",
      },
      {
        id: 4,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Menuet Concerto In G Minor, RV 517 II. Andante",
        author: "Antonio Vivaldi",
        url: "/audio/strings/Vivaldi/antonio-vival-di-menuet.mp3",
      },
      {
        id: 5,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Raint melody S Minor",
        author: "Antonio Vivaldi",
        url: "/audio/strings/Vivaldi/antonio-vival-di-muzyka-dozhdya.mp3",
      },
      {
        id: 6,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Concerto In G Minor",
        author: "Antonio Vivaldi",
        url: "/audio/strings/Vivaldi/AntonioVivaldi_ConcertoinGMinor.mp3",
      },
      {
        id: 7,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Summer Concerto In G Minor",
        author: "Antonio Vivaldi",
        url: "/audio/strings/Vivaldi/vival-di-4-sezona-leto.mp3",
      },
    ],
    shamisen: [
      {
        id: 1,
        logo: "https://static.kvraudio.com/i/b/tsugaru-shamisen_2.jpg",
        name: "Shamisen classic melody",
        author: "Japan artist",
        url: "/audio/shamisen/any/syamisen-bez-nazvaniya.mp3",
      },
      {
        id: 2,
        logo: "https://static.kvraudio.com/i/b/tsugaru-shamisen_2.jpg",
        name: "Shamisen  melody hideko",
        author: "Japan artist",
        url: "/audio/shamisen/any/yaponskie-instrumenty--syamisen-melodiya-hideko.mp3",
      },
      {
        id: 3,
        logo: "https://static.kvraudio.com/i/b/tsugaru-shamisen_2.jpg",
        name: "Shamisen classic melody",
        author: "Yoshida brothers",
        url: "/audio/shamisen/any/yoshida-brothers-yaponiya-syamisen.mp3",
      },
    ],
  };

  return typeMusic.type
    ? musicList[typeMusic.type as keyof typeof musicList]
    : [];
});
