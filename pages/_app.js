import '@/styles/globals.css'
import { useState } from 'react'

function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  return <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
}

export default App