import React from 'react'
import textBlurbs from '@/pages/api/textBlurbs'
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineMarkunreadMailbox,

} from 'react-icons/md'

const styles = {
  "contactStyles": "flex gap-4 my-2 items-center font-montserrat w-fit "
}

function TextSpacer({blurbIndex, mainStyle, sectionHeaderStyle, sectionHeader, isContacts, darkMode}) {

  if (sectionHeader && !isContacts) {
    return (
      <main className={`${mainStyle}`}>
        <h1 className={`${sectionHeaderStyle}`}>{sectionHeader}</h1>
        <p className=' font-montserrat'>{textBlurbs['blurbs'][blurbIndex]}</p>
      </main>
    )
  } else if (isContacts) {
    return (
      <main id='contacts' className={`${mainStyle}`}>
        <h1 className={`${sectionHeaderStyle}`}>{sectionHeader}</h1>
        <a href={`mailto:${textBlurbs['contacts'].email}`} className={`${styles.contactStyles}`}><MdOutlineEmail />{textBlurbs['contacts'].email}</a>
        <a href={`tel:${textBlurbs['contacts'].phone}`} className={`${styles.contactStyles}`}><MdOutlinePhone />{textBlurbs['contacts'].phone}</a>
        <div className={`${styles.contactStyles} `}><MdOutlineMarkunreadMailbox/><p>{textBlurbs['contacts'].poBox}</p></div>
      </main>
    )
  } else {
      return (
        <main className={`${mainStyle}`}>
          <p className=' font-montserrat'>{textBlurbs['blurbs'][blurbIndex]}</p>
        </main>
      )
  }
  
}

export default TextSpacer