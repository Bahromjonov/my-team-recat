import React from 'react'
import AboutHero from '../components/AboutHero'
import Cta from '../components/Cta'
import Directors from '../components/Directors'
import SomeOfOurClients from '../components/SomeOfOurClients'
const About = () => {
  return (
    <div>
      <AboutHero/>
      <Directors/>
      <SomeOfOurClients/>
      <Cta />
    </div>
  )
}

export default About