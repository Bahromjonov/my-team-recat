import React from 'react'
// Img import
import boy from '../assets/boy-img.svg'
import setting from '../assets/settings.svg'
import statistics from '../assets/statistics-img.svg'
import bulidImg from '../assets/bulid-img.png'

const BulidMange = () => {
    return (
        <section className='bg-sacramentoStateGreen relative'>
            <div className='containerr py-36 relative '>
                <div className='w-50 h-1 bg-lightCoral mb-12 '></div>
                <div className='flex justify-between '>
                    <div>
                        <h2 className='main-still max-w-445'>Build & manage distributed teams like no one else.</h2>
                    </div>
                   
                        <div className='space-y-8'>
                            {/* Experienced Individuals */}
                            <div className='flex items-center'>
                                <div className='w-14 h-14 bg-midnightGreen rounded-full mr-6 relative'>
                                    <img className='absolute -left-1/3 -top-1/3' src={boy} alt="boy img" />
                                </div>
                                <div>
                                    <h3 className='header-link text-lightCoral mb-4'>Experienced Individuals</h3>
                                    <p className='text-still-base '>Our network is made up of highly experienced professionals <br /> who are passionate about what they do.</p>
                                </div>
                            </div>
        
                            {/* Easy to Implement */}
                            <div className='flex items-center'>
                                <div className='w-14 h-14 bg-midnightGreen rounded-full mr-6 relative'>
                                    <img className='absolute -left-1/3 -top-1/3' src={setting} alt="boy img" />
                                </div>
                                <div>
                                    <h3 className='header-link text-lightCoral mb-4'>Easy to Implement</h3>
                                    <p className='text-still-base '>Our processes have been refined over years of implementation <br /> meaning our teams always deliver.</p>
                                </div>
                            </div>

                            {/* Enhanced Productivity */}
                            <div className='flex items-center  '>
                                <div className='w-14 h-14 bg-midnightGreen rounded-full mr-6 relative'>
                                    <img className='absolute -left-1/3 -top-1/3' src={statistics} alt="boy img" />
                                </div>
                                <div>
                                    <h3 className='header-link text-lightCoral mb-4'>Enhanced Productivity</h3>
                                    <p className='text-still-base '>Our customized platform with in-built analytics helps you  <br /> manage your distributed teams.</p>
                                </div>
                                <img width={200} height={244} className='absolute bottom-0 -right-60' src={bulidImg} alt="" aria-hidden='true' />
                            </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BulidMange