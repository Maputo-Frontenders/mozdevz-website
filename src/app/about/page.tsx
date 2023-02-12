'use client' // this is a client component

import Image from 'next/image'
import { Desktop, Buildings } from 'phosphor-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import TeamMember from '@/components/cards/TeamMember'
import { recognitions, team, sponsors, cases as whyMozDevz } from '@/data'
import Cases from '@/components/cards/Cases'
import { RevealList } from 'next-reveal'

export default function About() {
  return (
    <>
      <Header />
      <div className="bg-hero bg-cover bg-center p-5 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl flex flex-col gap-6 pt-36 pb-20">
            <h1 className="text-4xl md:text-5xl text-white font-bold break-words">
              Impactamos milhares de devz e impulsionamos carreiras
            </h1>
          </div>
        </div>
      </div>

      <main>
        <Section>
          <div className="md:px-4 px-6">
            <div className="md:flex md:space-x-10 md:gap-28">
              <div className="mb-8 md:w-2/5">
                <h2 className="text-[24px] md:text-4xl mb-4 md:mb-8">
                  Take a look into how we got started.
                </h2>
                <a className="text-blue-500 font-bold" href='#'>
                  Conheça a nossa team
                </a>
              </div>
              <div className="md:w-3/5 mb-12">
                <p className="mb-4 leading-loose">
                  Exponent WordPress theme is insanely flexible and amazingly easy to use. This alone would be enough for a 5 star rating. On top of a great tool is even better customer support. The only theme you will ever need.
                </p>
                <p className="leading-loose">
                  Over 30 high quality professionally designed pre-built website concepts to choose from. Build your website using a fully visual interface, using our revolutionary page & header builder.
                </p>
              </div>
            </div>
            <div className="bg-about bg-cover bg-center p-5 w-full h h-96 min-h-full"></div>
          </div>
        </Section>
        <Wrapper className='py-16 px-10 bg-[#fafbfd] '>
          <div className='mb-10 text-center'>
            <p className="mb-4">How we work</p>
            <h2 className='text-2xl'>A simple process</h2>
          </div>
          <div className='flex flex-col gap-10 text-center px-6'>
            <div>
              <h3 className='font-bold mb-4'>Missão</h3>
              <p className="font-light">
                Wireframing has its pros and cons as it the crutial part of the design stage.
              </p>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Valores</h3>
              <p className="font-light">
                Wireframing has its pros and cons as it the crutial part of the design stage.
              </p>
            </div>
            <div>
              <h3 className='font-bold mb-4'>Visão</h3>
              <p className="font-light">
                Wireframing has its pros and cons as it the crutial part of the design stage.
              </p>
            </div>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  )
}