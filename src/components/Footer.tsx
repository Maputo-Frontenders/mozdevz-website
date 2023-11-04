'use client' // this is a client component
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from 'phosphor-react'

import logo from '../../public/assets/logo-white.png'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 pt-14 pb-8  flex flex-col justify-center items-center space-y-10 ">
      <Link href="/" className="text-2xl font-bold block">
        <Image src={logo} width={230} alt={''} />
      </Link>
      <div className="flex gap-4 justify-center items-center transition-all duration-700">
        <Link href={'https://www.facebook.com/mozdevz'} target="_blank">
          <FacebookLogo color="#fff" size={32} />
        </Link>

        <Link
          href={
            'https://twitter.com/i/flow/login?redirect_after_login=%2Fmozdevz'
          }
          target="_blank"
        >
          <TwitterLogo size={32} color="#fff" />
        </Link>

        <Link href={'https://www.instagram.com/mozdevz/'} target="_blank">
          <InstagramLogo size={32} color="#fff" />
        </Link>
        <Link
          href={'https://www.linkedin.com/company/mozdevz/'}
          target="_blank"
        >
          <LinkedinLogo size={32} color="#fff" />
        </Link>
        <Link href={'https://www.youtube.com/@mozdevz6592'} target="_blank">
          <YoutubeLogo size={32} color="#fff" />
        </Link>
      </div>
      <p className="text-slate-400 text-base leading-relaxed text-center">
        ©2023 Mozdevz Community. <br />
        All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
