import EventForm from '@/components/EventForm'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TextSpacer from '@/components/TextSpacer'
import Footer from '@/components/Footer'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'

import useWindow from '@/hooks/useWindow'
import Groups from '@/components/Groups'

const isSmall = (pixels) => {
  let output = true
    if (useWindow() < pixels ) {
      output = true
    } else {
      output = false
    }
    return output
  }

export default function Home() {
  const mainStyle = ` w-[80%] p-8 my-8 mx-auto shadow-xl rounded-xl bg-white text-slate-600 transition-colors duration-300 dark:bg-slate-600 dark:text-slate-200`
  const sectionHeaderStyle = 'font-montserratBold text-2xl text-center bg-green-300 w-fit mx-auto rounded-lg text-green-900 p-1 mb-4'

  return (
    <main>
      <Navbar/>
        <div className={` pt-10 pb-8 shadow-2xl bg-white dark:bg-slate-600`}>
          <Hero mainStyle={mainStyle} />
          <TextSpacer mainStyle={mainStyle} blurbIndex={0} sectionHeader={'About The Show'} sectionHeaderStyle={sectionHeaderStyle} />
          <Reviews mainStyle={mainStyle} sectionHeaderStyle={sectionHeaderStyle} isSmall={isSmall(1000)}/>
          <EventForm mainStyle={mainStyle} sectionHeaderStyle={sectionHeaderStyle} />
          <TextSpacer mainStyle={mainStyle} blurbIndex={2} sectionHeader={'Magical Programming that\'s PERFECT for your special event!'} sectionHeaderStyle={sectionHeaderStyle} />
          <Gallery mainStyle={mainStyle} sectionHeaderStyle={sectionHeaderStyle} isSmall={isSmall(800)}/>
          <TextSpacer mainStyle={mainStyle} blurbIndex={2} sectionHeader={'For Availability'} sectionHeaderStyle={sectionHeaderStyle} isContacts={true} />
          <Groups mainStyle={mainStyle} sectionHeaderStyle={sectionHeaderStyle} />
        </div>
      <Footer/>
    </main>
  )
}
