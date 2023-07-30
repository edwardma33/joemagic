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

function Navbar({ darkMode, setDarkMode }) {
  const styles = {
    "sidebarItems": `flex gap-2 items-center m-1 p-2 mx-2 hover:bg-slate-300 rounded-lg font-montserrat transition-colors duration-300`
  }

  const [showSidebar, setShowSidebar] = useState(false)
  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <main id='navbar' className='fixed w-full text-slate-600'>
      <div className={` flex justify-between text-3xl bg-slate-200 p-4 w-full shadow-xl transition-colors duration-300 ${darkMode ? 'bg-slate-600 text-slate-200 ' : ''}`}>
        {showSidebar ? <MdOutlineClose onClick={handleSidebar} className='cursor-pointer ' /> : <MdOutlineMenu onClick={handleSidebar} className='cursor-pointer' />}
        <h1 className=" text-center font-montserratBold tracking-wide">Joe Magic</h1>
        {darkMode ? <MdOutlineDarkMode onClick={handleDarkMode} className='cursor-pointer ' /> : <MdOutlineLightMode onClick={handleDarkMode} className='cursor-pointer' />}
      </div>
      <div className={` fixed flex-col float-left text-left bg-slate-200 h-screen border-slate-300 border-t-[1px] ${showSidebar ? 'flex' : 'translate-x-[-100%]'} transition-transform-colors duration-300 ${darkMode ? 'bg-slate-600 border-slate-700 text-slate-200' : ''}`}>
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
      <div className=' gap-2 text-center m-1 p-2 mx-2 rounded-lg font-montserratBold transition-colors duration-300'>
        <a href="" className=' text-center '>Joe Magic</a>
      </div>
    </div>
    </main>
  )
}

export default Navbar