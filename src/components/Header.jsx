import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/myteamLogo.svg'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>  {/* Header */}
    <header className='bg-midnightGreen '>
      <div className='containerr py-73  flex items-center justify-between'>

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
                <Link to='about' className='header-link foli hover:text-lightCoral duration-200 '>about</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Contact link */}
        <div>
          <button onClick={(() => navigate('contact'))} className='header-link border-white border-2 py-2.5 px-8 rounded-full hover:bg-white hover:text-black duration-200'>
            contact us
          </button>
        </div>

      </div>
    </header>
    </div>
  )
}

export default Header