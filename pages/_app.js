import '@/styles/globals.css'
import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
    <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    <Analytics />
    </>
  )
}

export default App