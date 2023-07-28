import React from 'react'
import textBlurbs from '@/pages/api/textBlurbs'

function Reviews({mainStyle, sectionHeaderStyle, isSmall}) {

  return (
    <main id='reviews' className={`${mainStyle}`}>
      <h1 className={`${sectionHeaderStyle}`}>Reviews</h1>
      <div className={` w-full h-fit overflow-x-auto flex gap-10 ${isSmall ? 'flex-col' : ''}`}>
        {textBlurbs['quotes'].map((quote) => {
        return <div className=' flex flex-col justify-between border-2 rounded-xl p-2 border-slate-200'>
          <p className=' font-montserrat'>{quote.quote}</p>
          <p className=' font-montserratThin float-right'>-{quote.person}</p>
        </div>
        })}
      </div>
      
    </main>
  )
}

export default Reviews