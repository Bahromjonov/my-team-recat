import React, { } from 'react'
import { Link } from 'react-router-dom'

import logo from './assets/myteamLogo.svg'
import Home from './pages/Home'
function App() {

  return (
    <div style={{ overflowY: 'hidden' }}  className='text-white flex flex-col min-h-screen'>
      {/* Header */}
      <header className='bg-midnightGreen '>
        <div className='containerr pt-73 pb-8 flex items-center justify-between'>

          <div className='flex items-center '>
            {/* Logo icon */}
            <Link className='mr-20' to='/'>
              <img width={160} height={40} src={logo} alt="logo icon " />
            </Link>
            {/* Navbar */}
            <nav>
              <ul className='flex items-center space-x-10'>
                <li>
                  <Link className='header-link foli hover:text-lightCoral duration-200 '>home</Link>
                </li>
                <li>
                  <Link className='header-link foli hover:text-lightCoral duration-200 '>about</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Contact link */}
          <div>
            <Link to='contact' className='header-link border-white border-2 py-2.5 px-8 rounded-full hover:bg-white hover:text-black duration-200'>
              contact us
            </Link>
          </div>

        </div>
      </header>

      {/* Main  */}

      <main className='grow'>
        <Home />

      </main>

    </div>
  )
}

export default App
