import React from 'react'
import textBlurbs from '@/pages/api/textBlurbs'
import {
  MdOutlineAlternateEmail,
  MdOutlinePhone,
  MdOutlineMarkunreadMailbox,

} from 'react-icons/md'

const styles = {
  "contactStyles": "flex gap-2 items-center font-montserrat w-fit mx-auto"
}

function TextSpacer({blurbIndex, mainStyle, sectionHeaderStyle, sectionHeader, isContacts}) {

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
        <p className={`${styles.contactStyles}`}><MdOutlineAlternateEmail />{textBlurbs['contacts'].email}</p>
        <p className={`${styles.contactStyles}`}><MdOutlinePhone />{textBlurbs['contacts'].phone}</p>
        <p className={`${styles.contactStyles}`}><MdOutlineMarkunreadMailbox/>{textBlurbs['contacts'].poBox}</p>
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