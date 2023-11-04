'use client' // this is a client component

import { useContext, useEffect, useState } from 'react'
import { List, X } from 'phosphor-react'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import logoWhite from '../../public/assets/logo-white.png'
import ActiveLink from './ActiveLink'
import Link from 'next/link'
import { LangContext } from '@/contexts/langContext'
import LangSelector from './LangSelector'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const {
    lang: { menuItems, staticContent },
    handleChange,
  } = useContext(LangContext)

  useEffect(() => {
    document.querySelector('body')?.classList.remove('overflow-y-hidden')
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  }, [])


  return (
    <header
      className={`transition-colors duration-700 fixed z-50 right-0 left-0 top-0 ${scrollY > 200 ? 'text-black bg-white shadow' : 'bg-black/20 text-white'
        }`}
    >
      <div
        className={`w-full bg-black/60 right-0 top-0 h-screen ${isMenuOpen ? 'absolute z-20 w-screen' : 'hidden w-0'
          }`}
      ></div>

      <div className="max-w-7xl mx-auto p-5">
        {/*Div da nav para large */}

        <div className="hidden items-center justify-around lg:flex">
          {/**LOGO */}
          <div className=" basis-1/5 flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold block">
              <Image
                src={scrollY > 200 ? logo : logoWhite}
                width={130}
                alt={staticContent.headerTitle}
              />
            </Link>
          </div>
          {/**Menu Items */}
          <div className="w-full flex justify-center items-center">
            <nav>
              <ul className="flex items-center gap-5 text-sm">
                {menuItems.map((menuItem) => {
                  return (
                    <li key={menuItem.href}>
                      <ActiveLink
                        href={menuItem.href}
                        className="font-bold hover:text-red-500 transition-colors"
                        activeClassName="text-red-500"
                      >
                        {menuItem.name}
                      </ActiveLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
          {/**Buttons Div */}
          <div className=' basis-2/5 flex justify-end gap-x-4'>

            <a className="button text-sm" href="https://linktr.ee/mozdevz">
              {staticContent.headerSubtitle}
            </a>
            <LangSelector className=' text-sm' />
          </div>
        </div>

        {/**inicio mobile navBar  */}

        <div className="flex justify-between lg:hidden">

          <Link href="/" className="text-2xl font-bold block">
            <Image
              src={scrollY > 200 ? logo : logoWhite}
              width={130}
              alt={staticContent.headerTitle}
            />
          </Link>

          <List
            size={32}
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(true)
              document.querySelector('body')?.classList.add('overflow-y-hidden')
            }}
          />

          <div
            className={`absolute z-30 flex text-base right-0 top-0 transition-transform duration-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="bg-white h-screen w-full max-w-xs min-w-[300px] p-8 text-black">
              <div className="flex gap-3 justify-between items-center">
                <Link href="/" className="text-2xl font-bold block">
                  <Image
                    src={logo}
                    width={130}
                    alt={staticContent.headerTitle}
                  />
                </Link>

                <X
                  size={24}
                  className="cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false)
                    document
                      .querySelector('body')
                      ?.classList.remove('overflow-y-hidden')
                  }}
                />
              </div>

              <nav className="block mt-28 mb-10">
                <ul className="flex flex-col gap-5 font-thin">
                  {menuItems.map((menuItem) => {
                    return (
                      <li key={menuItem.href}>
                        <ActiveLink
                          href={menuItem.href}
                          className="font-bold hover:text-red-500 transition-colors"
                          activeClassName="text-red-500"
                        >
                          {menuItem.name}
                        </ActiveLink>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              <a
                className="button !px-5 !text-sm"
                href="https://linktr.ee/mozdevz"
              >
                {staticContent.headerSubtitle}
              </a>
              <select onChange={handleChange} className="bg-transparent mt-7 outline-none mt">
                <option>Português</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
