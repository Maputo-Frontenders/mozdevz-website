'use client' // this is a client component
import Image from 'next/image'
import { UsersThree, Buildings, RocketLaunch } from 'phosphor-react'
import Section from '@/components/layouts/Section'
import TeamMember from '@/components/cards/TeamMember'
import Hero from '@/components/layouts/Hero'
import Cases from '@/components/cards/Cases'
import { RevealList } from 'next-reveal'
import Link from 'next/link'
import { useContext } from 'react'
import { LangContext } from '@/contexts/langContext'

export default function Home() {
  const { lang } = useContext(LangContext)
  return (
    <div className="min-h-screen">
      <Hero className="bg-hero">
        <h1 className="text-4xl md:text-5xl text-white break-words">
          {lang.staticContent.heroTitle}
        </h1>
        <p className="text-gray-100">{lang.staticContent.heroSubtitle}</p>

        <a className="button block lg:hidden" href="https://linktr.ee/mozdevz">
          {lang.staticContent.heroInvitation}{' '}
        </a>
      </Hero>

      <main>
        <Section>
          <div className="flex flex-wrap gap-10 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-8">
              {lang.whyMozDevz.map((items, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col gap-8 ${
                      index == 1 ? 'md:-translate-y-6' : ''
                    }`}
                  >
                    {items.map((item, index) => {
                      return <Cases key={index} {...item} />
                    })}
                  </div>
                )
              })}
            </div>

            <div className="max-w-sm flex flex-col gap-5">
              <h2 className="text-gray-900 text-3xl">
                {lang.staticContent.cardsAreaTitle}
              </h2>
              <p className="text-gray-600">
                {lang.staticContent.cardsAreaSubtitle}
              </p>
              <a
                className="text-primary font-bold border-solid border border-red-500 py-2 px-4 inline-block max-w-max"
                href="/about"
              >
                {lang.staticContent.cardsAreaInvitation}
              </a>
            </div>
          </div>
        </Section>

        <Section
          className="bg-[#f
afbfd]"
        >
          <RevealList
            interval={120}
            delay={500}
            className="flex flex-wrap items-center gap-14"
          >
            <div
              className="m
ax-w-md flex flex-col gap-5"
            >
              <h2 className="text-gray-900 text-3xl">
                {lang.staticContent.revealTitle}
              </h2>
              <p className="text-gray-600">
                {lang.staticContent.revealSubtitle}
              </p>

              <Link href="/about" className="text-primary font-bold">
                {lang.staticContent.revealInvitation}
              </Link>
            </div>

            <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-10">
              {lang.recognitions.map((recognition, index) => {
                return (
                  <div
                    key={index}
                    className="recognition flex flex-col gap-2 w-full"
                  >
                    <span className="text-primary text-4xl font-medium block">
                      +{recognition.number}
                    </span>
                    <span className="block font-bold">{recognition.text}</span>
                  </div>
                )
              })}
            </div>
          </RevealList>
        </Section>

        <Section>
          <RevealList
            interval={120}
            delay={500}
            className="flex flex-wrap items-center justify-center  gap-10"
          >
            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 p-5 rounded-full text-primary brightnessDownWhenHover">
                <UsersThree size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800">
                  {lang.staticContent.talentsTitle}
                </h3>
                <p className="mt-4 ">{lang.staticContent.talentsSubtitle}</p>
              </div>
            </div>

            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 p-5 rounded-full text-primary brightnessDownWhenHover">
                <RocketLaunch size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800">
                  {lang.staticContent.startupTitle}
                </h3>
                <p className="mt-4">{lang.staticContent.startupSubtitle}</p>
              </div>
            </div>

            <div className="load-hidden max-w-xs flex flex-col items-center gap-5">
              <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 p-5 rounded-full text-primary brightnessDownWhenHover ">
                <Buildings size={56} />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-gray-800">
                  {lang.staticContent.corporateTitle}
                </h3>
                <p className="mt-4">{lang.staticContent.corporateSubtitle}</p>
              </div>
            </div>
          </RevealList>
        </Section>

        <Section>
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-gray-900 text-3xl">
              {lang.staticContent.teamTitle}
            </h2>
            <p className="text-gray-600 text-justify">
              {lang.staticContent.teamSubtitle}
            </p>
          </div>

          <RevealList
            interval={60}
            delay={500}
            className="mt-10 w-full flex flex-wrap gap-16 justify-center"
          >
            {lang.team.map((member, index) => {
              return (
                <div key={index}>
                  <TeamMember {...member} />
                </div>
              )
            })}
          </RevealList>
        </Section>

        <Section className="bg-[#fafbfd]">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-gray-900 text-3xl mb-2">
              {lang.staticContent.sponsorsTitle}
            </h2>
            <p className="text-gray-600">
              {lang.staticContent.sponsorsSubtitle}
            </p>
          </div>

          <RevealList
            interval={75}
            delay={500}
            className="mt-10 md:px-32 w-full flex flex-wrap gap-16 justify-center"
          >
            {lang.sponsors.map((sponsor, index) => {
              return (
                <div
                  key={index}
                  className="max-w-[100px] flex justify-center items-center"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full"
                  />
                </div>
              )
            })}
          </RevealList>
        </Section>

        <Section className="bg-[#fafbfd]">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-gray-900 text-3xl mb-2">
              {lang.staticContent.schoolsTitle}
            </h2>
            <p className="text-gray-600">
              {lang.staticContent.schoolsSubtitle}{' '}
            </p>
          </div>

          <RevealList
            interval={75}
            delay={500}
            className="mt-10 md:px-32 w-full flex flex-wrap gap-16 justify-center"
          >
            {lang.schools.map((school, index) => {
              return (
                <div key={index} className="max-w-[100px]">
                  <Image
                    src={school.logo}
                    alt={school.name}
                    className="w-full"
                  />
                </div>
              )
            })}
          </RevealList>
        </Section>
      </main>
    </div>
  )
}
