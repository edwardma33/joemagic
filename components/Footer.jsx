import React from 'react'

function Footer () {
  return (
    <main className={` w-full bg-slate-200 transition-colors duration-300 dark:bg-slate-600 dark:text-slate-200`}>
        <h4 className=' w-fit mx-auto p-4 text-sm font-montserratThin'>{`Copyright © 2012-${new Date().getFullYear()} Joe Lyons' Magic Enterprises`}</h4>
    </main>
  )
}

export default Footer