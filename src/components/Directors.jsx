import React from 'react'
// imgs

const Directors = () => {
    return (
        <section className='bg-deepJungleGreen py-40'>
            <div className='containerr'>
                <div>
                    <h2 className='main-still text-center mb-16'>Meet the directors</h2>
                    <ul className='grid grid-cols-3 gap-y-30 gap-x-76'>
                        <li className='bg-sacramentoStateGreen pt-8 pb-14 px-6 flex flex-col items-center '>
                            <img className='mb-4' width={96} height='96' src={nikita} alt="nikita img" />
                            <div className='text-center'>
                                <h3 className='header-link text-raptureBlue'>Nikita Marks</h3>
                                <p className='text-still-base italic font-medium'>Founder & CEO</p>
                            </div>
                            <div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Directors