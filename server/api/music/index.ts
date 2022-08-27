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
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Arr. for Pianino from Concerto for Strings in G Minor",
        author: "Antonio Vivald",
        url: "/audio/strings/AntonioVivaldi_ConcertoinGMinor.mp3",
      },
      {
        id: 2,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "2 Pianino ",
        author: "Antonio Vivald",
        url: "/audio/korabelnyy_gudok.mp3",
      },
      {
        id: 3,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "3 Concerto for Strings in G Minor",
        author: "Antonio Vivald",
        url: "/audio/strings/AntonioVivaldi_ConcertoinGMinor.mp3",
      },
    ],
    koto: [
      {
        id: 1,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Arr. for koto from Concerto for Strings in G Minor",
        author: "Antonio Vivald",
        url: "/audio/strings/AntonioVivaldi_ConcertoinGMinor.mp3",
      },
    ],
    violin: [
      {
        id: 1,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Arr. for violin from Concerto for Strings in G Minor",
        author: "Antonio Vivald",
        url: "/audio/strings/AntonioVivaldi_ConcertoinGMinor.mp3",
      },
    ],
    guitar: [
      {
        id: 1,
        logo: "https://assets.classicfm.com/2021/50/vivaldi-1639578130-editorial-long-form-0.jpg",
        name: "Arr. for guitar from Concerto for Strings in G Minor",
        author: "Antonio Vivald",
        url: "/audio/strings/AntonioVivaldi_ConcertoinGMinor.mp3",
      },
    ],
  };

  return typeMusic.type
    ? musicList[typeMusic.type as keyof typeof musicList]
    : [];
});
