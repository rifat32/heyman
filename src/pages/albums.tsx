import FadeIn from 'react-fade-in'
import { GenericMeta } from 'components/GenericMeta'
import { v4 as uuidv4 } from 'uuid'
import { truncate } from 'lib/utils'
import useSWR from 'swr'
import { LastFMResponse } from 'types/lastFM'
import { AlbumCard } from 'components/AlbumCard'

import {AlbumData} from "../data/album";
import { useEffect,useState } from 'react'

export default function Albums() {
  // const { data }: { data?: LastFMResponse } = useSWR('topAlbums')
const [data,setData] = useState<any>(null)
  useEffect(() => {
  
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=Kherici&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
       
  
      })
  }, [])

  return (
    <>
      <GenericMeta title="Albums" description="My top albums on Spotify." />

      {data?  (
        <div className="md:px-8">
          <FadeIn>
            <div
              className="rounded-lg justify-center md:justify-start
           grid grid-flow-row xs:grid-flow-col gap-6 xs:grid-rows-2 overflow-scroll no-scrollbar p-3"
          //  className="grid   rounded-lg justify-center md:justify-start  grid-flow-row  gap-2
          //  xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2   overflow-scroll no-scrollbar p-3"
            >
              {data.topalbums.album
                .filter((album:any) => album.image[3]['#text'])
                .map((album:any) => (
                  <AlbumCard
                    key={uuidv4()}
                    artist={album.artist.name}
                    name={truncate(album.name, 25)}
                    coverImage={album.image[3]['#text']}
                    href={album.url}
                  />
                ))}
               
                {/* {

                AlbumData.map((album) => (
                  <AlbumCard
                    key={uuidv4()}
                    artist={album.artist}
                    name={truncate(album.name, 25)}
                    coverImage={album.coverImage}
                    href={album.href}
                  />
                ))} */}
                
            </div>
          </FadeIn>
        </div>
      ):<></>}
    </>
  )
}
