import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const MainRouter = () => {
    return (
        <div className='text-white flex flex-col  min-h-screen overflow-hidden'>
            <Header />
            <main className='grow'>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default MainRouter

