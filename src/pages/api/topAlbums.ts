import { NextApiRequest, NextApiResponse } from 'next'
const { LASTFM_API_KEY } = process.env




export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=Kherici&api_key=${LASTFM_API_KEY}&format=json`
  )
  const data = await response.json()
 

  res.status(200).json(data)
}
