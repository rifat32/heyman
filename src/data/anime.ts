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
    img: 'https://i.imgur.com/8ILBB7F.jpeg',
    starred: true,
  },
  {
    title: 'Death Note: Rewrite',
    href: 'https://myanimelist.net/anime/2994/Death_Note__Rewrite?q=death%20note&cat=anime',
    img: 'https://i.imgur.com/BZeyceQ.jpeg',
    starred: true,
  },
  {
    title: 'Attack on Titan',
    href: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
    img: 'https://i.imgur.com/ayGXjvN.jpeg',
    starred: true,
  },
  {
    title: 'Jujutsu Kaisen (TV)',
    href: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV',
    img: 'https://i.imgur.com/l9bDXet.jpeg',
    starred: true,
  },
  {
    title: 'Parasyte: The Maxim',
    href: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu?q=Parasyte%20(Kiseijuu)&cat=anime',
    img: 'https://i.imgur.com/H0wPp3M.png',
    starred: true,
  },

]
