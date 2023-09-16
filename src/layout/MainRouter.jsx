import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'

const MainRouter = () => {
    return (
        <div className='text-white flex flex-col min-h-screen'>
            <Header />
            <main className=''>
             
                <Outlet />
            </main>

        </div>
    )
}

export default MainRouter