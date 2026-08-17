import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import textBlurbs from '@/pages/api/textBlurbs'

export function About() {
  return <section id='about' className='bg-[#282625]'>
    <div className='mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-20'>
      <div><p className='eyebrow text-[#c55049]'>The show</p><h2 className='mt-3 font-grandCru text-5xl leading-none text-[#f4eee4]'>A proper bit<br/>of wonder.</h2></div>
      <div className='max-w-2xl'><p className='text-lg leading-8 text-stone-300'>{textBlurbs.blurbs[0]}</p><p className='mt-6 border-l-2 border-[#a93630] pl-5 text-base leading-7 text-stone-400'>{textBlurbs.blurbs[1]}</p></div>
    </div>
  </section>
}

export function Contact() {
  const { contacts } = textBlurbs
  return <section id='contact' className='mx-auto max-w-6xl px-5 pb-16 lg:px-8 lg:pb-20'>
    <div className='grid gap-8 rounded-xl bg-[#79231f] px-7 py-10 sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:items-center'>
      <div><p className='eyebrow text-[#f0b9af]'>For availability</p><h2 className='mt-3 font-grandCru text-5xl leading-none text-white'>Let&apos;s make<br/>some magic.</h2></div>
      <div className='grid gap-4 text-sm text-white sm:grid-cols-2'>
        <a href={`mailto:${contacts.email}`} className='contact-link sm:col-span-2'><MdEmail className='text-[#f0b9af]' /> {contacts.email}</a>
        <a href={`tel:${contacts.phone}`} className='contact-link'><MdPhone className='text-[#f0b9af]' /> {contacts.phone}</a>
        <span className='contact-link'><MdLocationOn className='text-[#f0b9af]' /> {contacts.poBox}</span>
      </div>
    </div>
  </section>
}
