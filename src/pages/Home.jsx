import React from 'react'
import heroImg from '../assets/hero-img.svg'
import heroImg2 from '../assets/hero-img2.png'

const Home = () => {
    return (
        // Hero
        <section className='bg-midnightGreen pt-24 relative'>
            <div className='containerr '>

                <div className='flex justify-between mb-40'>
                    <div className='relative'>
                        <h2 className='text-100 font-bold font-Livvic leading-100'>Find the <br /> best <span className='text-lightCoral'>talent</span> </h2>
                        <img className='absolute top-0 -left-60' src={heroImg} alt="" />
                    </div>
                    <div >
                        <div className='w-50 h-1 bg-emerald-300 mb-20'></div>
                        <div>
                            <p className=' max-w-445 '>Finding the right people and building high <br /> performing teams can be hard. Most companies <br /> aren’t tapping into the abundance of global talent. <br /> We’re about to change that.</p>
                        </div>
                    </div>
                </div>
                {/* Hero img */}
                <div className='flex justify-end '>
                    <img  src={heroImg2} alt="" />
                </div>

            </div>


        </section>
    )
}

export default Home