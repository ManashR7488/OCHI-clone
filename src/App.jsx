import React from 'react'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/Landing/LandingPage'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Eyes from './components/Eyes/EyesContainer'
import Featured from './components/Featured/Featured'
import locomotiveScroll from 'locomotive-scroll'

const App = () => {
  
  const locomotive = new locomotiveScroll();

  return (
    <div className='w-full min-h-screen '>
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
    </div>
  )
}

export default App