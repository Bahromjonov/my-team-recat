import React from 'react'
import { Outlet } from 'react-router-dom'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MainRouter = () => {
    return (
        <div className='text-white flex flex-col  min-h-screen'>
            <Header />
            <main className='grow'>
                <Outlet />
            </main>
            <Cta />
            <Footer/>
        </div>
    )
}

export default MainRouter