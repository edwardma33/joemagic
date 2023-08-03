import { React, useState, useEffect } from 'react'


const styles = {
  'formLabel': 'font-montserratBold bg-blue-300 w-fit rounded-lg text-blue-900 p-1',
  'formInput': 'p-2 border-2 rounded-xl border-slate-200 font-montserrat placeholder:font-montserrat',
  'formSelect': 'p-2 rounded-xl border-none hover:bg-slate-100 text-center font-montserra dark:hover:bg-slate-700 outline-none',
  'formSubmit': ' text-xl font-montserratBold bg-blue-300 w-fit rounded-lg text-blue-900 p-1 mx-auto'
}

function EventForm({ mainStyle, sectionHeaderStyle}) {
const [name, setName] = useState('name')
const [email, setEmail] = useState('email')
const [phoneNum, setPhoneNum] = useState('phone')
const [cityState, setCityState] = useState('N/A')
const [eventDate, setEventDate] = useState('date')
const [eventHour, setEventHour] = useState('1')

const [eventMinute, setEventMinute] = useState('00')
const [eventPeriod, setEventPeriod] = useState('PM')
const hour = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
const minute = ["00", "15", "30", "45"]
const period = ["PM", "AM"]

const [eventBudget, setEventBudget] = useState('N/A')
const budgetOptions = ['Under $500', '$500-$1,500', '$1,500-$3,000', '$3,000-$5,000', 'Above 5,000']
const [eventNotes, setEventNotes] = useState("N/A")

useEffect(() => {
  fetch('https://email-api-inky.vercel.app/', {
    method: 'GET'
  })
})

const handleSubmit = () => {
  fetch('https://email-api-inky.vercel.app/send_email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': name,
      'email': email,
      'phoneNum': phoneNum,
      'cityState': cityState,
      'eventDate': eventDate,
      'eventTime': `${eventHour}:${eventMinute}${eventPeriod}`,
      'eventBudget': eventBudget,
      'eventNotes': eventNotes
    })
  }).then(() => {
    window.location.reload()
  })
}

  return (
    <main id='booking' className={`${mainStyle}`}>
      <h1 className={`${sectionHeaderStyle}`} >Book An Event</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-2'>
        <label className={styles.formLabel}>Full Name</label>
        <input type="text" placeholder='full name' onChange={(e) => {setName(e.target.value)}} className={styles.formInput} />
        <label className={styles.formLabel}>Email</label>
        <input type='email' placeholder='email' onChange={(e) => {setEmail(e.target.value)}} className={styles.formInput} />
        <label className={styles.formLabel}>Phone Number</label>
        <input type="tel" placeholder='phone number' onChange={(e) => {setPhoneNum(e.target.value)}} className={styles.formInput} />
        <label className={styles.formLabel}>City/State</label>
        <input type="text" placeholder='city/state' onChange={(e) => {setCityState(e.target.value)}} className={styles.formInput} />
        <label className={styles.formLabel}>Date of Event</label>
        <input type="date" placeholder='Date of Event' onChange={(e) => {setEventDate(e.target.value)}} className={`${styles.formInput} mx-auto w-full`} />

        <label className={styles.formLabel}>Time</label>
        <div className=' text-center w-full border-2 border-slate-200 rounded-xl px-10'>
          <select onChange={(e) => {setEventHour(e.target.value)}} className={`${styles.formSelect} `}>
            {hour.map((option, index) => {
              return <option key={index}>{option}</option>
            })}
          </select>
          <select onChange={(e) => {setEventMinute(e.target.value)}} className={`${styles.formSelect}  `}>
            {minute.map((option, index) => {
              return <option key={index}>{option}</option>
              })}
          </select>
          <select onChange={(e) => {setEventPeriod(e.target.value)}} className={`${styles.formSelect}`}>
            {period.map((option, index) => {
              return <option key={index}>{option}</option>
              })}
          </select>
        </div>
        <label className={styles.formLabel}>Event Budget</label>
        <div className=' text-center w-full border-2 border-slate-200 rounded-xl px-10'>
          <select onChange={(e) => {setEventBudget(e.target.value)}} className={`${styles.formSelect} text-center`}>
            {budgetOptions.map((option, index) => {
              return <option key={index}>{option}</option>
            })}
          </select>
        </div>
        <label className={styles.formLabel}>Additional Notes</label>
        <input type="text" placeholder='addition notes' onChange={(e) => {setEventNotes(e.target.value)}} className={`${styles.formInput}`} />
        <button type='submit' className={styles.formSubmit}>Submit</button>
      </form>
    </main>
  )
}

export default EventForm