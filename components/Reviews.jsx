import { MdFormatQuote } from 'react-icons/md'
import textBlurbs from '@/pages/api/textBlurbs'

export default function Reviews() {
  return <section id='reviews' className='bg-slate-50'>
    <div className='mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20'>
      <div className='max-w-xl'><p className='eyebrow text-[#39715a]'>Kind words</p><h2 className='mt-3 font-grandCru text-5xl leading-none text-[#283b46]'>The applause says it best.</h2></div>
      <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>{textBlurbs.quotes.map((quote) => <figure key={quote.person} className='flex min-h-[225px] flex-col justify-between rounded-lg border border-slate-200 bg-white p-6'>
        <MdFormatQuote className='text-3xl text-[#73a487]' /><blockquote className='mt-5 text-base leading-7 text-slate-600'>{quote.quote}</blockquote><figcaption className='mt-7 text-xs leading-5 text-slate-400'><strong className='block font-bold uppercase tracking-[.12em] text-[#39715a]'>{quote.person}</strong>{quote.location}</figcaption>
      </figure>)}</div>
    </div>
  </section>
}
