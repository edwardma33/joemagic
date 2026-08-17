import { useState } from 'react'
import { Button } from '@/components/ui/button'

const initialForm = { name: '', email: '', phoneNum: '', cityState: '', eventDate: '', eventHour: '1', eventMinute: '00', eventPeriod: 'PM', eventBudget: '', eventNotes: '' }
const inputClass = 'w-full rounded-md border border-[#544644] bg-[#1a1918] px-3 py-2.5 text-sm text-stone-200 outline-none transition placeholder:text-stone-500 focus:border-[#b54841] focus:ring-2 focus:ring-[#b54841]/20'
const Label = ({ children, htmlFor }) => <label htmlFor={htmlFor} className='mb-2 block text-xs font-bold uppercase tracking-[.12em] text-stone-400'>{children}</label>

export default function EventForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = async (event) => {
    event.preventDefault(); setStatus('sending')
    try {
      const response = await fetch('https://email-api-inky.vercel.app/send_email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, eventTime: `${form.eventHour}:${form.eventMinute} ${form.eventPeriod}` }) })
      if (!response.ok) throw new Error('Request failed')
      setStatus('sent'); setForm(initialForm)
    } catch { setStatus('error') }
  }
  return <section id='booking' className='border-y border-[#443b39] bg-[#242120]'>
    <div className='mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[.78fr_1.22fr] lg:px-8 lg:py-20'>
      <div><p className='eyebrow text-[#c55049]'>Bring the show to you</p><h2 className='mt-3 font-grandCru text-5xl leading-none text-[#f4eee4]'>Your event,<br/>with a twist.</h2><p className='mt-6 max-w-sm leading-7 text-stone-300'>Tell Joe a little about your occasion and he’ll be in touch about availability. The show is self-contained and ready for an audience of all ages.</p><div className='mt-8 rounded-lg border border-[#75413d] bg-[#332322] p-5 text-sm leading-6 text-stone-300'><strong className='block text-[#f1e6dc]'>What to expect</strong>20–45 minutes of music, magic, family-friendly comedy, and plenty of participation.</div></div>
      <form onSubmit={submit} className='rounded-lg border border-[#4b4140] bg-[#2a2726] p-6 shadow-sm sm:p-8'>
        <div className='grid gap-5 sm:grid-cols-2'><div><Label htmlFor='name'>Full name</Label><input required id='name' name='name' value={form.name} onChange={update} className={inputClass} /></div><div><Label htmlFor='email'>Email</Label><input required id='email' type='email' name='email' value={form.email} onChange={update} className={inputClass} /></div><div><Label htmlFor='phoneNum'>Phone</Label><input id='phoneNum' name='phoneNum' value={form.phoneNum} onChange={update} className={inputClass} /></div><div><Label htmlFor='cityState'>City / State</Label><input id='cityState' name='cityState' value={form.cityState} onChange={update} className={inputClass} /></div><div><Label htmlFor='eventDate'>Event date</Label><input id='eventDate' type='date' name='eventDate' value={form.eventDate} onChange={update} className={inputClass} /></div><div><Label htmlFor='eventBudget'>Budget range</Label><select id='eventBudget' name='eventBudget' value={form.eventBudget} onChange={update} className={inputClass}><option value=''>Select one</option>{['Under $500', '$500–$1,500', '$1,500–$3,000', '$3,000–$5,000', 'Above $5,000'].map((value) => <option key={value}>{value}</option>)}</select></div></div>
        <fieldset className='mt-5'><legend className='mb-2 text-xs font-bold uppercase tracking-[.12em] text-slate-500'>Preferred time</legend><div className='grid grid-cols-3 gap-3'>{[['eventHour', ['1','2','3','4','5','6','7','8','9','10','11','12']], ['eventMinute', ['00','15','30','45']], ['eventPeriod', ['PM','AM']]].map(([name, values]) => <select key={name} name={name} value={form[name]} onChange={update} className={inputClass}>{values.map((value) => <option key={value}>{value}</option>)}</select>)}</div></fieldset>
        <div className='mt-5'><Label htmlFor='eventNotes'>Anything else we should know?</Label><textarea id='eventNotes' name='eventNotes' rows='4' value={form.eventNotes} onChange={update} className={`${inputClass} resize-y`} /></div>
        <div className='mt-6 flex flex-wrap items-center gap-4'><Button type='submit' size='lg' disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send inquiry'} <span className='ml-2'>→</span></Button>{status === 'sent' && <p className='text-sm font-semibold text-[#39715a]'>Thanks—your note is on its way.</p>}{status === 'error' && <p className='text-sm font-semibold text-red-700'>Something went wrong. Please try again.</p>}</div>
      </form>
    </div>
  </section>
}
