import {React, useState, useEffect} from 'react'

import { 
  MdOutlineMenu,
  MdOutlineClose,
  MdInfoOutline, 
  MdStarOutline, 
  MdDoneOutline, 
  MdOutlineFormatQuote,
  MdOutlineCall,
  MdOutlineDarkMode,
  MdOutlineLightMode
} from 'react-icons/md'

import useWindow from '@/hooks/useWindow'

function Navbar() {
  const styles = {
    "sidebarItems": `flex gap-2 items-center m-1 p-2 mx-2 hover:bg-slate-300 rounded-lg font-montserrat transition-colors duration-300 dark:text-slate-200`
  }

  const [showSidebar, setShowSidebar] = useState(false)
  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <main id='navbar' className='fixed w-full'>
      <div className={` flex text-3xl bg-slate-200 text-slate-600 p-4 w-full shadow-xl transition-colors duration-300 dark:bg-slate-600 dark:text-slate-200`}>
        {showSidebar ? <MdOutlineClose onClick={handleSidebar} className='cursor-pointer ' /> : <MdOutlineMenu onClick={handleSidebar} className='cursor-pointer' />}
        <h1 className=" text-center font-montserratBold tracking-wide w-fit mx-auto">Joe Magic</h1>
      </div>
      <div className={` fixed flex-col float-left text-left bg-slate-200 h-screen border-slate-300 border-t-[1px] ${showSidebar ? 'flex' : 'translate-x-[-100%]'} transition-transform-colors duration-300 dark:bg-slate-600 dark:border-slate-700`}>
      <div className={styles.sidebarItems}>
        <MdInfoOutline />
        <a href="#home">About The Show</a>
      </div>
      <div className={styles.sidebarItems}>
        <MdOutlineFormatQuote />
        <a href="#reviews">Reviews</a>
      </div>
      <div className={styles.sidebarItems}>
        <MdDoneOutline />
        <a href="#booking">Booking</a>
      </div>
      <div className={styles.sidebarItems}>
        <MdStarOutline />
        <a href="#gallery">Gallery</a>
      </div>
      <div className={styles.sidebarItems}>
        <MdOutlineCall />
        <a href="#contacts">Contact Me</a>
      </div>
      <div className=' gap-2 text-center m-1 p-2 mx-2 rounded-lg font-montserratBold text-slate-600 transition-colors duration-300 dark:text-slate-200'>
        <a href="" className=' text-center '>Joe Magic</a>
      </div>
    </div>
    </main>
  )
}

export default Navbar