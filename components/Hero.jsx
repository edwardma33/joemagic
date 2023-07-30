import React from 'react'
import Image from 'next/image'

function Hero({mainStyle, darkMode}) {
  return (
  <main id='home' className={`${mainStyle}`}>
    <Image src={require('../assets/hero.png')} width={350} className=' rounded-3xl mx-auto'/>
    <p className={` mx-auto text-2xl text-center text-slate-600 mt-4 font-montserratBold max-w-sm transition-colors duration-300 ${darkMode ? 'text-slate-200' : '' } `}>Magical Programming that's PERFECT for your special event!</p>
  </main>
  )
}

export default Hero