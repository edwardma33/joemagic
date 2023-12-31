import React from 'react'
import Image from 'next/image'

function Hero({ mainStyle }) {
  return (
  <main id='home' className={`${mainStyle}`}>
    <Image src={require('../assets/hero.png')} width={350} className=' rounded-3xl mx-auto' alt='Hero'/>
    <p className={` mx-auto text-2xl text-center mt-4 font-montserratBold max-w-sm transition-colors duration-300`}>Magical Programming that's PERFECT for your special event!</p>
  </main>
  )
}

export default Hero