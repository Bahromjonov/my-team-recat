import React from 'react'
import rightImg from '../assets/about-right-hero.png'

const AboutHero = () => {
  return (
    // Hero
    <section className=' bg-midnightGreen'>
      <div className='containerr flex justify-between py-16 relative'>
        <div>
          <h2 className='about-still'>About</h2>
        </div>
        <div className='max-w-730'>
          <div className='w-12 h-1 bg-lightCoral mb-10'></div>
          <p className='header-link'>We help companies build dynamic teams made up of top global talent. Using our  network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
        </div>
        <img className='absolute -right-56 bottom-0' width={200} height={200} src={rightImg} alt="" aria-hidden='true' />
      </div>
    </section>
  )
}

export default AboutHero