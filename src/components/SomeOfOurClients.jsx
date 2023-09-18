import React from 'react'
// Imgs
import theVerage from '../assets/the-verge.svg'
import theJakarta from '../assets/the-jakarta-post.svg'
import theGuardian from '../assets/the-guardian.svg'
import techradar from '../assets/techradar.svg'
import gadgets from '../assets/gadgets-now.svg'
import clientsImg from '../assets/clients-circle.svg'

const SomeOfOurClients = () => {
    return (
        <section className='bg-sacramentoStateGreen'>
            <div className='containerr py-36 relative'>
                <img className='absolute top-0 -left-32' src={clientsImg} alt="" aria-hidden='true' />
                <h2 className='main-still text-center mb-16'>Some of our clients</h2>
                <ul className='flex items-center justify-between'>
                    <li>
                        <img src={theVerage} alt="the verage" />
                    </li>
                    <li>
                        <img src={theJakarta} alt="the Jakarta" />
                    </li>
                    <li>
                        <img src={theGuardian} alt="the Guardian" />
                    </li>
                    <li>
                        <img src={techradar} alt="techradar" />
                    </li>
                    <li>
                        <img src={gadgets} alt="gadgets" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SomeOfOurClients