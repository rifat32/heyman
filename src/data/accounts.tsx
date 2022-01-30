// import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {FaGithub, FaTwitter,FaDiscord,FaEnvelope} from "react-icons/fa"

export interface Account {
  name: string
  href?: string
   icon?:  any
  copyEmail?: () => void
}

export const AccountData: Account[] = [
  // {
  //   name: 'GitHub',
  //   href: 'https://github.com/Kherici',
  //   icon: <FaGithub/>
  // },
  // {
  //   name: 'Twitter',
  //   href: '/twitter',
  //   icon: <FaTwitter/>
  // },
  {
    name: 'Discord',
    href: '/Scotty#7473',
    icon: <FaDiscord/>
  },
  {
    name: 'Email',
    icon: <FaEnvelope/>
  },
]
