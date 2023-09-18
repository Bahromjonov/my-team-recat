import React from 'react';
// Imgs
import deliveringImg from '../assets/reviews-bg-left.svg'
import img from '../assets/delivering-img.png'
import { data } from '../data';

const DeliveringReal = () => {
    return (
        <section className='bg-deepJungleGreen py-36 '>
            <div className='containerr '>
                <div className='relative mb-24'>
                    <img width={147} height={100} className='absolute -top-[145px] -left-[165px]' src={deliveringImg} alt="" aria-hidden='true' />
                    <h2 className='text-center main-still '>Delivering real results for top <br /> companies. Some of our <span className='text-raptureBlue'>success stories.</span></h2>
                </div>

                <div className='relative'>
                    <ul className='flex items-center justify-between'>
                        {data.map((e, i) => (
                            <li key={i}>
                                <div className='w-full max-w-350 flex flex-col items-center text-center relative'>
                                    <img width={67} height={56} className='absolute -top-10 ' src={e.vergul} alt='comma img' />
                                    <p className='text-still-base mb-6 z-10'>{e.text}</p>
                                    <div className='mb-8'>
                                        <h3 className='text-raptureBlue text-lg font-bold font-Livvic leading-7'>{e.title}</h3>
                                        <span className='text-sm font-medium font-Livvic '>{e.description}</span>
                                    </div>
                                    <img width={62} height={62} src={e.img} alt={e.title} />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <img className='absolute -right-32 -bottom-64' width={200} height={200} src={img} alt="" aria-hidden='true' />
                </div>

            </div>

        </section>
    );
};

export default DeliveringReal;
