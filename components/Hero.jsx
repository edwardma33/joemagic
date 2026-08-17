import Image from 'next/image'
import { MdArrowDownward } from 'react-icons/md'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return <section id='top' className='bg-[#201f1e] pt-24'>
    <div className='mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_.8fr] lg:px-8 lg:py-20'>
      <div className='max-w-2xl'>
        <p className='text-xs font-bold uppercase tracking-[.2em] text-[#c55049]'>Family entertainment since 1987</p>
        <h1 className='mt-4 font-grandCru text-6xl leading-[.92] text-[#f4eee4] sm:text-7xl'>Magic, Mirth,<br/>&amp; Mayhem</h1>
        <p className='mt-6 max-w-lg text-lg leading-8 text-stone-300'>A wonderfilled family event with music, laughter, stories, and just enough mystery to keep everyone guessing.</p>
        <div className='mt-8 flex flex-wrap items-center gap-4'>
          <a href='#booking'><Button size='lg'>Plan your event <span aria-hidden='true' className='ml-2'>→</span></Button></a>
          <a href='#about' className='inline-flex items-center gap-2 text-sm font-semibold text-[#db8179] hover:underline'>Learn about the show <MdArrowDownward /></a>
        </div>
        <p className='mt-10 border-l-2 border-[#a93630] pl-4 font-grandCru text-2xl italic text-[#c8b8ad]'>“A wonderfilled family event.”</p>
      </div>
      <div className='mx-auto w-full max-w-md'>
        <div className='overflow-hidden rounded-xl border border-[#4b4140] bg-[#292625] p-2 shadow-sm'>
          <Image src={require('../assets/hero.png')} alt='Joe Lyons performing magic' priority className='aspect-[4/5] w-full rounded-lg object-cover' />
        </div>
        <p className='mt-4 text-center font-grandCru text-2xl text-[#c8b8ad]'>Made for wide eyes &amp; big laughs</p>
      </div>
    </div>
  </section>
}
