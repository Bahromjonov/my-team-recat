import React from 'react';
// Imgs
import deliveringImg from '../assets/reviews-bg-left.svg'

import { data } from '../data';

const DeliveringReal = () => {
    return (
        <section className='bg-deepJungleGreen py-36 '>
            <div className='containerr '>
                <div className='relative mb-24'>
                    <img width={147} height={100} className='absolute -top-[145px] -left-[165px]' src={deliveringImg} alt="" aria-hidden='true' />
                    <h2 className='text-center main-still '>Delivering real results for top <br /> companies. Some of our <span className='text-raptureBlue'>success stories.</span></h2>
                </div>
                
                <div>
                    <ul className='flex items-center justify-between'>
                        {data.map((e, i) => (
                            <li key={i}>
                                <div className='w-full max-w-350 flex flex-col items-center text-center relative'>
                                    <img width={67} height={56} className='absolute -top-10 ' src={e.vergul} alt="comma img" />
                                    <p className='text-still-base mb-6 z-10'>{e.text}</p>
                                    <div className='mb-8'>
                                        <h3 className='text-raptureBlue text-lg font-bold font-Livvic leading-7'>{e.title}</h3>
                                        <span className='text-sm font-medium font-Livvic '>{e.description}</span>
                                    </div>
                                    <img width={62} height={62} src={e.img} alt="gril img" />
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </section>
    );
};

export default DeliveringReal;

//  {/* Kady Baker */}
//  <div className='w-full max-w-350 flex flex-col items-center text-center relative'>
//  <img width={67} height={56} className='absolute -top-10 ' src={comma} alt="comma img" />
//  <p className='text-still-base mb-6 z-10'> “The team perfectly fit the specialized skill set  required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
//  <div className='mb-8'>
//      <h3 className='text-raptureBlue text-lg font-bold font-Livvic leading-7'>Kady Baker</h3>
//      <span className='text-sm font-medium font-Livvic '>Product Manager at Bookmark</span>
//  </div>
//  <img width={62} height={62} src={kady} alt="gril img" />
// </div>
// {/* Aiysha Reese */}
// <div className='w-full max-w-350 flex flex-col items-center text-center relative'>
//  <img width={67} height={56} className='absolute -top-10 ' src={comma} alt="comma img" />
//  <p className='text-still-base mb-6 z-10'>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
//  <div className='mb-8'>
//      <h3 className='text-raptureBlue text-lg font-bold font-Livvic leading-7'>Aiysha Reese</h3>
//      <span className='text-sm font-medium font-Livvic '>Product Manager at Bookmark</span>
//  </div>
//  <img width={62} height={62} src={Aiysha} alt="gril img" />
// </div>
// {/* Kady Baker */}
// <div className='w-full max-w-350 flex flex-col items-center text-center relative'>
//  <img width={67} height={56} className='absolute -top-10 ' src={comma} alt="comma img" />
//  <p className='text-still-base mb-6 z-10'>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
//  <div className='mb-8'>
//      <h3 className='text-raptureBlue text-lg font-bold font-Livvic leading-7'>Arthur Clarke</h3>
//      <span className='text-sm font-medium font-Livvic '>Co-founder of MyPhysio</span>
//  </div>
//  <img width={62} height={62} src={Arthur} alt="Arthur img" />
// </div>