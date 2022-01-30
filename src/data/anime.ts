export interface Anime {
  title: string
  altTitle?: string
  href: string
  img: string
  starred?: boolean
}

export const AnimeData: Anime[] = [
  {
    title: 'Dragon Ball',
    href: 'https://myanimelist.net/anime/223/Dragon_Ball?q=dragon%20ba&cat=anime',
    img: 'https://cdn.myanimelist.net/images/anime/1887/92364.jpg',
    starred: true,
  },
  {
    title: 'Death Note: Rewrite',
    href: 'https://myanimelist.net/anime/2994/Death_Note__Rewrite?q=death%20note&cat=anime',
    img: 'https://cdn.myanimelist.net/images/anime/13/8518.jpg',
    starred: true,
  },
  {
    title: 'Attack on Titan',
    href: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
    img: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    starred: true,
  },
  {
    title: 'Jujutsu Kaisen (TV)',
    href: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV',
    img: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
    starred: true,
  },
  {
    title: 'Parasyte: The Maxim',
    href: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu?q=Parasyte%20(Kiseijuu)&cat=anime',
    img: 'https://cdn.myanimelist.net/images/anime/3/73178.jpg',
    starred: true,
  },

]
