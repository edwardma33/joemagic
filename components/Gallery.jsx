import React from 'react'
import imageData from '@/pages/api/imageData'
import Image from 'next/image'
import useWindow from '@/hooks/useWindow'

function Gallery({mainStyle, sectionHeaderStyle}) {
  return (
    <main id='gallery' className={`${mainStyle}`}>
      <h1 className={`${sectionHeaderStyle}`}>Gallery</h1>
      <div className={``}>
        {imageData.map((img) => {
        return <div className=' w-fit mx-auto border-2 rounded-xl p-2 border-slate-200 '>
          <Image className=' mx-auto' width={useWindow() / 1.8} src={require(`@/assets/${img}.png`)} />
        </div>
        })}
      </div>
    </main>
  )
}

export default Gallery