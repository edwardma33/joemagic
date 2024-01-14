import textBlurbs from '@/pages/api/textBlurbs'
import React from 'react'

function Groups({mainStyle, sectionHeaderStyle}) {
  return (
    <main className={`${mainStyle}`}>
        <h1 className={`${sectionHeaderStyle}`}>Join These Family Groups</h1>
        <div className='w-fit mx-auto'>
            {textBlurbs.groups.map((group, index) => {
                return <li className='text-left' key={index}>{group}</li>
            })}
        </div>

    </main>
  )
}

export default Groups