import React from 'react';
// Imgs
import deliveringImg from '../assets/reviews-bg-left.svg'
import kady from '../assets/kady.svg'
import comma from '../assets/vergul.svg'

const DeliveringReal = () => {
    return (
        <section className='bg-deepJungleGreen py-36 '>
            <div className='containerr '>
                <div className='relative mb-24'>
                    <img width={147} height={100} className='absolute -top-[145px] -left-[165px]' src={deliveringImg} alt="" aria-hidden='true' />
                    <h2 className='text-center main-still '>Delivering real results for top <br /> companies. Some of our <span className='text-raptureBlue'>success stories.</span></h2>
                </div>
                <div className='flex items-center space-x-8'>
                    {/* Kady Baker */}
                    <div className='w-full max-w-350 flex flex-col items-center text-center relative'>
                        <img width={67} height={56} className='absolute -top-10 ' src={comma} alt="comma img" />
                        <p className='text-still-base mb-6 z-10'> “The team perfectly fit the specialized skill set  required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <div className='mb-8'>
                            <h3 className='text-raptureBlue text-lg font-bold font-Livvic leading-7'>Kady Baker</h3>
                            <span className='text-sm font-medium font-Livvic '>Product Manager at Bookmark</span>
                        </div>
                        <img width={62} height={62} src={kady} alt="gril img" />
                    </div>
                    {/* Kady Baker */}
                    <div className='w-full max-w-350 flex flex-col items-center text-center relative'>
                        <img width={67} height={56} className='absolute -top-10 ' src={comma} alt="comma img" />
                        <p className='text-still-base mb-6 z-10'> “The team perfectly fit the specialized skill set  required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <div className='mb-8'>
                            <h3 className='text-raptureBlue text-lg font-bold font-Livvic leading-7'>Kady Baker</h3>
                            <span className='text-sm font-medium font-Livvic '>Product Manager at Bookmark</span>
                        </div>
                        <img width={62} height={62} src={kady} alt="gril img" />
                    </div>
                    {/* Kady Baker */}
                    <div className='w-full max-w-350 flex flex-col items-center text-center relative'>
                        <img width={67} height={56} className='absolute -top-10 ' src={comma} alt="comma img" />
                        <p className='text-still-base mb-6 z-10'> “The team perfectly fit the specialized skill set  required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <div className='mb-8'>
                            <h3 className='text-raptureBlue text-lg font-bold font-Livvic leading-7'>Kady Baker</h3>
                            <span className='text-sm font-medium font-Livvic '>Product Manager at Bookmark</span>
                        </div>
                        <img width={62} height={62} src={kady} alt="gril img" />
                    </div>


                </div>


            </div>

        </section>
    );
};

export default DeliveringReal;
