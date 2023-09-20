import React from 'react'
import { useNavigate } from 'react-router-dom'
// Imgs
import ctaImg from '../assets/redy-img.svg'

const Cta = () => {
    const navigate = useNavigate()
    return (
        <section className='bg-lightCoral relative'>
            <div className='ctaContainer flex justify-between items-center py-20 relative '>
                <div>
                    <h2 className='main-still text-black'>Ready to get started?</h2>
                </div>
                <div>
                    <button onClick={(() => navigate('/contact'))} className='py-2.5 px-8 border-sacramentoStateGreen border-2 rounded-full text-sacramentoStateGreen header-link hover:bg-sacramentoStateGreen hover:text-white duration-200'>contact us</button>
                </div>
            <img className='absolute -left-1/3 -bottom-1/2' src={ctaImg} width={200} height={244} alt="" aria-hidden='true' />
            </div>
        </section>
    )
}

export default Cta