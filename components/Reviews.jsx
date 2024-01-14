import React from 'react'
import textBlurbs from '@/pages/api/textBlurbs'

function Reviews({mainStyle, sectionHeaderStyle, isSmall}) {

  return (
    <main id='reviews' className={`${mainStyle}`}>
      <h1 className={`${sectionHeaderStyle}`}>Reviews</h1>
      <div className={` w-full h-fit overflow-x-auto flex gap-8 ${isSmall ? 'flex-col' : ''}`}>
        {textBlurbs['quotes'].map((quote, index) => {
        return <div key={index} className={`flex flex-col justify-between border-2 rounded-xl p-2 border-slate-200 ${isSmall ? '' : 'w-1/4'}`}>
          <p className=' font-montserrat'>{`"${quote.quote}"`}</p>
          <div>
            <p className=' font-montserratThin text-left'>-{quote.person}</p>
            <p className=' font-montserratThin text-left'>{quote.location}</p>
          </div>

        </div>
        })}
      </div>
      
    </main>
  )
}

export default Reviews