import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { About, Contact } from '@/components/TextSpacer'
import Reviews from '@/components/Reviews'
import EventForm from '@/components/EventForm'
import Gallery from '@/components/Gallery'
import Groups from '@/components/Groups'
import Footer from '@/components/Footer'

export default function Home() {
  return <main className='overflow-hidden bg-[#191918]'><Navbar /><Hero /><About /><Reviews /><EventForm /><Gallery /><Contact /><Groups /><Footer /></main>
}
