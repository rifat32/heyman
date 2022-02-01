import useSWR from 'swr'

import { motion } from 'framer-motion'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import { FaSoundcloud } from 'react-icons/fa'
import { WeatherResponse } from 'types/weather'
import { useEffect, useState } from 'react'

export const Weather = () => {
  const [useCelsius, setCelsius] = useState(true)

  // const { data }: { data?: WeatherResponse } = useSWR('weather')
  const [data,setData] = useState<any>();
  useEffect(() => {
  
   fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=el+bayadh&units=metric&appid=${process.env.NEXT_PUBLIC_Weather_API_KEY}`
   )
     .then((res) => res.json())
     .then((data) => {
      setData(data)
      
     })
 }, [])

  if (!data) return null

  const { main: weatherName, description: weatherDescription } = data.weather[0]
  const { temp: celsius } = data.main

  const fahrenheit = (celsius * 9) / 5 + 32
  const toggleTemperature = () => setCelsius((celsius) => !celsius)

  return (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* <FontAwesomeIcon
        icon={
          ({
            Snow: ['far', 'cloud-snow'],
            Thunderstorm: ['far', 'thunderstorm'],
            Rain: ['far', 'cloud-showers-heavy'],
            Drizzle: ['far', 'cloud-rain'],
            Mist: ['far', 'cloud-rain'],
            Clouds: ['far', 'clouds'],
            Clear: ['far', 'cloud-sun'],
            Haze: ['far', 'sun-haze'],
          }[weatherName] as [IconPrefix, IconName]) || ['far', 'cloud']
        }
        className="mr-2"
      /> */}
      <FaSoundcloud className="mr-2" style={{display:"inline"}}/>
      It's currently{' '}
      {(celsius < 8 && <span className="mr-1">❄️</span>) ||
        (celsius > 30 && <span className="mr-1">🔥</span>)}
      <span onMouseOver={toggleTemperature} onMouseLeave={toggleTemperature} className="font-bold">
        {useCelsius ? `${Math.round(celsius)} °C` : `${Math.round(fahrenheit)} °F`}
      </span>{' '}
      <span className="text-xs">({weatherDescription})</span> in{' '}
      <a
        href="https://weather.com/en-GB/weather/today/l/bb5f448522ff58b50af28a405e51917e72ae28bc6e84e807bad09b51c7e58bc4"
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
      >
      El Bayadh
      </a>
      .
    </motion.p>
  )
}
