import { useState } from 'react'
import Link from 'next/link'
import { MdClose, MdMenu } from 'react-icons/md'
import { buttonVariants } from '@/components/ui/button'

const links = [
  ['The Show', '/#about'],
  ['Kind Words', '/#reviews'],
  ['Gallery', '/#gallery'],
  ['Shop', '/shop'],
  ['Contact', '/#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)
  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-[#443b39] bg-[#1b1a19]/95 backdrop-blur'>
      <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8' aria-label='Main navigation'>
        <Link href='/' className='flex items-baseline gap-2 text-[#f2eee5]' onClick={close}>
          <span className='font-grandCru text-3xl tracking-wide'>Joe Lyons</span>
          <span className='hidden text-[10px] font-bold uppercase tracking-[.18em] text-[#c55049] sm:block'>Magic</span>
        </Link>
        <div className='hidden items-center gap-6 md:flex'>
          {links.map(([label, href]) => <Link key={href} href={href} className='text-sm font-medium text-stone-300 transition hover:text-[#d65a52]'>{label}</Link>)}
          <Link href='/#booking' className={buttonVariants({ className: 'h-10 px-5 text-xs uppercase tracking-[.13em]' })}>Book a show</Link>
        </div>
        <button className='grid h-9 w-9 place-items-center rounded-md text-stone-200 md:hidden' aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <MdClose size={22} /> : <MdMenu size={22} />}
        </button>
      </nav>
      {open && <div className='border-t border-[#443b39] bg-[#1b1a19] px-5 pb-5 pt-3 md:hidden'>
        <div className='mx-auto flex max-w-7xl flex-col gap-1'>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={close} className='rounded-md px-3 py-2 text-sm font-medium text-stone-200 hover:bg-[#302a29]'>{label}</Link>)}
          <Link href='/#booking' onClick={close} className='mt-2 rounded-md bg-[#a93630] px-5 py-3 text-center text-sm font-semibold text-white'>Book a show</Link>
        </div>
      </div>}
    </header>
  )
}
