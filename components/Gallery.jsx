import React from 'react'
import imageData from '@/pages/api/imageData'
import Image from 'next/image'
import useWindow from '@/hooks/useWindow'

function Gallery({mainStyle, sectionHeaderStyle, isSmall}) {
  return (
    <main id='gallery' className={`${mainStyle}`}>
      <h1 className={`${sectionHeaderStyle}`}>Gallery</h1>
        {imageData.map((img, index) => {
        return <div key={index} className=' w-fit mx-auto border-2 rounded-xl p-2 border-slate-200'>
          <Image className=' mx-auto' width={isSmall ? useWindow() / 1.8 : useWindow() / 3} src={require(`@/assets/${img}.png`)} alt={img} />
        </div>
        })}
    </main>
  )
}

export default Gallery