import Image from 'next/image'
import imageData from '@/pages/api/imageData'

export default function Gallery() {
  return <section id='gallery' className='bg-white'>
    <div className='mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20'>
      <div className='flex flex-wrap items-end justify-between gap-4'><div><p className='eyebrow text-[#39715a]'>A peek backstage</p><h2 className='mt-3 font-grandCru text-5xl leading-none text-[#283b46]'>The trick is in<br/>the telling.</h2></div><p className='max-w-xs text-sm leading-6 text-slate-500'>Music, stories, audience helpers—and a few surprises that never get old.</p></div>
      <div className='gallery-grid mt-12'>{imageData.map((image, index) => <figure key={image} className='gallery-item'><Image src={require(`@/assets/${image}.png`)} alt={`Joe Lyons magic performance ${index + 1}`} className='block h-auto w-full' /></figure>)}</div>
    </div>
  </section>
}
