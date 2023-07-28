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
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleDropdown = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true)
  }

  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }

  return (
    <main id='navbar' className='fixed w-full '>
      <div className=' flex justify-between text-3xl bg-slate-200 p-4 w-full shadow-xl'>
        {showSidebar ? <MdOutlineClose onClick={toggleDropdown} className='cursor-pointer ' /> : <MdOutlineMenu onClick={toggleDropdown} className='cursor-pointer' />}
        <h1 className=" text-center font-montserratBold tracking-wide ">Joe Magic</h1>
        {darkMode ? <MdOutlineLightMode onClick={toggleDarkMode} className='cursor-pointer ' /> : <MdOutlineDarkMode onClick={toggleDarkMode} className='cursor-pointer' />}
      </div>
      <div className={` fixed z-40 flex-col float-left text-left bg-slate-200 h-screen border-slate-300 border-t-[1px] ${showSidebar ? 'flex' : 'translate-x-[-100%]'} transition-transform ease-in-out duration-300`}>
        <div className=' flex gap-2 items-center m-1 p-2 mx-2 hover:bg-slate-300 rounded-lg font-montserrat'>
          <MdInfoOutline />
          <a href="#home">About The Show</a>
        </div>
        <div className=' flex gap-2 items-center m-1 p-2 mx-2 hover:bg-slate-300 rounded-lg font-montserrat'>
          <MdOutlineFormatQuote />
          <a href="#reviews">Reviews</a>
        </div>
        <div className=' flex gap-2 items-center m-1 p-2 mx-2 hover:bg-slate-300 rounded-lg font-montserrat'>
          <MdDoneOutline />
          <a href="#booking">Booking</a>
        </div>
        <div className=' flex gap-2 items-center m-1 p-2 mx-2 hover:bg-slate-300 rounded-lg font-montserrat'>
          <MdStarOutline />
          <a href="#gallery">Gallery</a>
        </div>
        <div className=' flex gap-2 items-center m-1 p-2 mx-2 hover:bg-slate-300 rounded-lg font-montserrat'>
          <MdOutlineCall />
          <a href="#contacts">Contact Me</a>
        </div>
        <div className=' gap-2 text-center m-1 p-2 mx-2 rounded-lg font-montserratBold'>
          <a href="" className=' text-center '>Joe Magic</a>
        </div>
      </div>
    </main>
    

    
  )
}

export default Navbar