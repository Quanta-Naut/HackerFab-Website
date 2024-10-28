import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'
import Image from 'next/image'
import Illustration from '../../../public/Illustration.png'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <div style={{ paddingTop: 40 }} className='lg:flex flex-row'>
      <div className='flex justify-between flex-col'>
        <h1 style={{ fontSize: isMobile ? 30 : 60 }}>THE HACKER FAB <br/> open-source semiconductor fab</h1>
        <p className='hidden lg:block mt-8' style={{ fontSize: 24 }}>
          We design, build, document, and share DIY machines and processes to fabricate semiconductor devices in any room, for anyone with access to the Internet.
        </p>
        <button
          className='hidden lg:block mt-8 text-white'
          style={{
            width: 264,
            height: 68,
            backgroundColor: '#191A23',
            borderRadius: 14,
            fontSize: 20
          }}
        >
          Become a Campus Ambassador
        </button>
      </div>
      <div className='pt-4 lg:pt-0 lg:h-3/4 w-full h-full lg:flex items-end justify-center'>
        <Image
          className='w-full lg:w-3/4 lg:h-3/4'
          src={Illustration}
          alt="logo"
          unoptimized
        />
      </div>
      <div>
        <p className='lg:hidden mt-4' style={{ fontSize: 24 }}>
          We design, build, document, and share DIY machines and processes to fabricate semiconductor devices in any room, for anyone with access to the Internet.
        </p>
        <button
          className='lg:hidden mt-4 text-white'
          style={{
            width: 264,
            height: 68,
            backgroundColor: '#191A23',
            borderRadius: 14,
            fontSize: 20,
          }}
        >
          Become a Campus Ambassador
        </button>
      </div>
    </div>
  )
}
