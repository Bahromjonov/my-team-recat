import React from 'react'

import BulidMange from '../components/BulidMange'
import Cta from '../components/Cta'
import DeliveringReal from '../components/DeliveringReal'
import FindBest from '../components/FindBest'

const Home = () => {
    return (
       
        <div>
            <FindBest />
            <BulidMange />
            <DeliveringReal/>
            <Cta />
        </div>
    )
}

export default Home