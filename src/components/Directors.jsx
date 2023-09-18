import React from 'react'
import { directors } from '../data'
import pilus from '../assets/pilus.svg'

const Directors = () => {
    return (
        <section className='bg-deepJungleGreen py-40'>
            <div className='containerr'>
                <div>
                    <h2 className='main-still text-center mb-16'>Meet the directors</h2>
                    <ul className='grid grid-cols-3 gap-y-20 gap-x-30'>
                        {directors.map((director, index) => (
                            <li key={index} className='bg-sacramentoStateGreen pt-8 pb-14 px-6 flex flex-col items-center relative'>
                                <img className='mb-4' width={96} height={96} src={director.img} alt={director.title} />
                                <div className='text-center'>
                                    <h3 className='header-link text-raptureBlue'>{director.title}</h3>
                                    <p className='text-still-base italic font-medium'>{director.description}</p>
                                </div>
                                <div className=' absolute -bottom-7'>
                                    <img width={56} height={56} src={pilus} alt="pilus icon" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Directors