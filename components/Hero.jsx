import React from 'react'
import Image from 'next/image'

function Hero({mainStyle}) {
  return (
  <main id='home' className={`${mainStyle}`}>
    <Image src={require('../assets/hero.png')} width={300} className=' rounded-3xl mx-auto'/>
    <p className=' mx-auto text-2xl text-center mt-4 font-montserratBold max-w-sm'>Magical Programming that's PERFECT for your special event!</p>
  </main>
  )
}

export default Hero