import EventForm from '@/components/EventForm'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TextSpacer from '@/components/TextSpacer'
import Footer from '@/components/Footer'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'

import useWindow from '@/hooks/useWindow'

const isSmall = (pixels) => {
  let output = true
    if (useWindow() < pixels ) {
      output = true
    } else {
      output = false
    }
    return output
  }

export default function Home({ darkMode, setDarkMode }) {
  const mainStyle = ` w-[80%] p-8 my-8 mx-auto shadow-xl rounded-xl bg-white transition-colors duration-300`
  const sectionHeaderStyle = 'font-montserratBold text-2xl text-center bg-green-300 w-fit mx-auto rounded-lg text-green-900 p-1 mb-4'

  return (
    <main className={`bg-slate-200 transition-colors duration-300 ${darkMode ? 'bg-slate-600' : ''}`} >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className={` bg-white mx-5 pt-10 shadow-2xl rounded-xl ${darkMode ? 'bg-slate-600' : ''}`}>
          <Hero mainStyle={mainStyle} darkMode={darkMode} />
          <TextSpacer mainStyle={mainStyle} blurbIndex={0} sectionHeader={'About The Show'} sectionHeaderStyle={sectionHeaderStyle} />
          <Reviews mainStyle={mainStyle} sectionHeaderStyle={sectionHeaderStyle} isSmall={isSmall(1000)}/>
          <EventForm mainStyle={mainStyle} sectionHeaderStyle={sectionHeaderStyle} />
          <TextSpacer mainStyle={mainStyle} blurbIndex={2} sectionHeader={'What To Expect'} sectionHeaderStyle={sectionHeaderStyle} />
          <Gallery mainStyle={mainStyle} sectionHeaderStyle={sectionHeaderStyle}/>
          <TextSpacer mainStyle={mainStyle} blurbIndex={2} sectionHeader={'Contacts'} sectionHeaderStyle={sectionHeaderStyle} isContacts={true}/>
        </div>
      <Footer darkMode={darkMode} />
    </main>
  )
}
