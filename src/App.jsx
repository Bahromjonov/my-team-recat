import { useState } from 'react'
import logo from './assets/myteamLogo.svg'
function App() {

  return (
    <div>
      {/* Header */}
      <header className='bg-midnightGreen '>
        <div className='containerr'>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </header>

    </div>
  )
}

export default App
