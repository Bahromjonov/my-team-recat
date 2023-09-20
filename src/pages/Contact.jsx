import React from 'react'
import boy from '../assets/contact-boy-img.svg'
import setting from '../assets/contact-settings.png'
import statistics from '../assets/contact-statistics.svg'

const Contact = () => {
  return (
    <section className='bg-midnightGreen'>
      <div className='containerr flex  justify-between pb-32'>
        <div>
          <h2 className='about-still mb-4'>Contact</h2>
          <p className='text-[32px] font-bold font-Livvic text-rose-400 leading-[48px] mb-8'>Ask us about</p>
          <ul className='space-y-2'>
            <li className='flex items-center   '>
              <img className='mr-6' src={boy} alt="boy img" />
              <div>
                <p className='header-link'>The quality of our talent network</p>
              </div>
            </li>

            <li className='flex items-center   '>
              <img className='mr-6' src={setting} alt="boy img" />
              <div>
                <p className='header-link'>Usage & implementation of our software</p>
              </div>
            </li>

            <li className='flex items-center   '>
              <img className='mr-6' src={statistics} alt="boy img" />
              <div>
                <p className='header-link'>How we help drive innovation</p>
              </div>
            </li>

          </ul>
        </div>

        <div className='w-full max-w-540 '>
          <form action="https://echo.htmlacademy.ru">
            <div className=' '>
              <input className='w-full bg-transparent text-still-base pl-3 border-b-2 pb-4 ' type="text" placeholder='Name' required />

              <input className='w-full bg-transparent  text-still-base pl-3 border-b-2 pb-4 pt-6 contact-email' type="email" placeholder='Email Address' required />
              <p className='eror font-Livvic'>This field is required</p>
              <span className='right'>Davom eting</span>

              <input className='w-full text-still-base bg-transparent pt-6 pl-3 pb-4 border-b-2 ' type="text" placeholder='Company Name' required />
              
              <input className='w-full text-still-base bg-transparent pt-6 pl-3 pb-4 border-b-2 ' type="text" placeholder='Title' required />

              <textarea  className='w-full min-h-[107px] bg-transparent  text-still-base pt-6 pl-3' name="Message" placeholder='Message'  required></textarea>
            </div>
            <button className='py-2.5 px-8 header-link text-black bg-white rounded-full'>submit</button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact