import textBlurbs from '@/pages/api/textBlurbs'

export default function Groups() {
  return <section className='mx-auto max-w-6xl px-5 pb-16 lg:px-8 lg:pb-20'>
    <div className='border-t border-[#443b39] pt-12'><p className='eyebrow text-[#c55049]'>In good company</p><h2 className='mt-3 font-grandCru text-4xl text-[#f4eee4]'>Trusted by hometown favorites.</h2><ul className='mt-8 flex flex-wrap gap-x-7 gap-y-3'>{textBlurbs.groups.map((group) => <li key={group} className='text-sm text-stone-400 before:mr-2 before:text-[#c55049] before:content-["•"]'>{group}</li>)}</ul></div>
  </section>
}
