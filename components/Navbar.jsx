import { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { Button } from '@/components/ui/button'

const links = [
  ['The Show', '#about'],
  ['Kind Words', '#reviews'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)
  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur'>
      <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8' aria-label='Main navigation'>
        <a href='#top' className='flex items-baseline gap-2 text-[#283b46]' onClick={close}>
          <span className='font-grandCru text-3xl tracking-wide'>Joe Lyons</span>
          <span className='hidden text-[10px] font-bold uppercase tracking-[.18em] text-[#39715a] sm:block'>Magic</span>
        </a>
        <div className='hidden items-center gap-6 md:flex'>
          {links.map(([label, href]) => <a key={href} href={href} className='text-sm font-medium text-slate-600 transition hover:text-[#39715a]'>{label}</a>)}
          <Button className='h-10 px-5 text-xs uppercase tracking-[.13em]' onClick={() => { window.location.hash = 'booking' }}>Book a show</Button>
        </div>
        <button className='grid h-9 w-9 place-items-center rounded-md text-slate-700 md:hidden' aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <MdClose size={22} /> : <MdMenu size={22} />}
        </button>
      </nav>
      {open && <div className='border-t border-slate-100 bg-white px-5 pb-5 pt-3 md:hidden'>
        <div className='mx-auto flex max-w-7xl flex-col gap-1'>
          {links.map(([label, href]) => <a key={href} href={href} onClick={close} className='rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50'>{label}</a>)}
          <a href='#booking' onClick={close} className='mt-2 rounded-md bg-[#39715a] px-5 py-3 text-center text-sm font-semibold text-white'>Book a show</a>
        </div>
      </div>}
    </header>
  )
}
