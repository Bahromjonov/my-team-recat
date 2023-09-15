import React from 'react';
// Imgs
import deliveringImg from '../assets/reviews-bg-left.svg'

const DeliveringReal = () => {
    return (
        <div className='bg-deepJungleGreen py-36'>
            <div className='containerr '>
                <img src={deliveringImg} alt="" aria-hidden='true' />
                <h2 className='text-center main-still '>Delivering real results for top <br /> companies. Some of our <span className='text-raptureBlue'>success stories.</span></h2>
            </div>
        </div>
    );
};

export default DeliveringReal;
