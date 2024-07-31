import React from 'react'
import Image from 'next/image'

function Hero({ mainStyle }) {
  return (
  <main id='home' className={`${mainStyle}`}>
    <p className={` mx-auto text-3xl text-center mt-4 mb-2 font-grandCru font-extrabold text-outline text-[#B63527] max-w-sm transition-colors duration-300`}>Magic, Mirth, & Mayhem</p>
    <p className=' font-montserratBold mb-4 text-center'>"A wonderfilled family event"</p>
    <Image src={require('../assets/hero.png')} width={350} className=' rounded-3xl mx-auto' alt='Hero'/>
  </main>
  )
}

export default Hero