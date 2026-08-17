import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { getActiveProducts, getProductImageUrl } from '@/lib/products'

function formatPrice(priceCents, currency) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency.toUpperCase() }).format(priceCents / 100)
}

export default function Shop({ products, configured, unavailable }) {
  return <main className='min-h-screen bg-[#191918] text-stone-200'>
    <Navbar />
    <section className='border-b border-[#443b39] bg-[#201f1e] pt-28'>
      <div className='mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-16'>
        <p className='eyebrow text-[#c55049]'>The Joe Lyons Magic Shop</p>
        <h1 className='mt-3 font-grandCru text-5xl leading-none text-[#f4eee4] sm:text-6xl'>Bring home a little magic.</h1>
        <p className='mt-5 max-w-xl text-lg leading-8 text-stone-300'>A small collection of magic-inspired keepsakes and show favorites, shipped within the United States.</p>
      </div>
    </section>

    <section className='mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20'>
      {products.length > 0 ? <div className='grid gap-7 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => <article key={product.id} className='flex h-full flex-col overflow-hidden rounded-lg border border-[#4b4140] bg-[#2a2726] shadow-sm'>
          <div className='flex aspect-square items-center justify-center bg-[#1d1c1b] p-4'>
            <Image src={getProductImageUrl(product.image_path)} alt={product.name} width={700} height={700} className='h-full w-full object-contain' />
          </div>
          <div className='flex flex-1 flex-col p-5'>
            <div className='flex items-start justify-between gap-4'><h2 className='font-grandCru text-3xl leading-none text-[#f4eee4]'>{product.name}</h2><p className='shrink-0 text-base font-bold text-[#d26861]'>{formatPrice(product.price_cents, product.currency)}</p></div>
            <p className='mt-4 flex-1 text-sm leading-6 text-stone-300'>{product.description}</p>
            {product.stripe_payment_link ? <a href={product.stripe_payment_link} className='mt-6' target='_blank' rel='noreferrer'><Button className='w-full'>Buy now <span className='ml-2'>→</span></Button></a> : <Button className='mt-6 w-full' disabled>Available soon</Button>}
          </div>
        </article>)}
      </div> : <div className='rounded-lg border border-dashed border-[#544644] bg-[#242120] px-6 py-14 text-center'>
        <h2 className='font-grandCru text-4xl text-[#f4eee4]'>{unavailable ? 'The shop is temporarily unavailable.' : 'The shop is coming soon.'}</h2>
        <p className='mx-auto mt-3 max-w-md text-sm leading-6 text-stone-400'>{configured ? 'Please check back shortly for the latest items.' : 'A few magical items are being prepared for the shelf.'}</p>
      </div>}
      <p className='mt-10 text-center text-sm text-stone-400'>Online checkout will be available soon.</p>
      <p className='mt-3 text-center'><Link href='/' className='text-sm font-semibold text-[#d26861] hover:underline'>← Back to the show</Link></p>
    </section>
    <Footer />
  </main>
}

export async function getServerSideProps() {
  try {
    const { products, configured } = await getActiveProducts()
    return { props: { products, configured, unavailable: false } }
  } catch (error) {
    console.error('Unable to load store products:', error.message)
    return { props: { products: [], configured: true, unavailable: true } }
  }
}
