import React from 'react'
import Image from 'next/image'

function Hero({ mainStyle }) {
  return (
  <main id='home' className={`${mainStyle}`}>
    <p className={` mx-auto text-2xl text-center my-4 font-montserratBold max-w-sm transition-colors duration-300`}>"Magical programming that's PERFECT for your special event!"</p>
    <Image src={require('../assets/hero.png')} width={350} className=' rounded-3xl mx-auto' alt='Hero'/>
  </main>
  )
}

export default Hero