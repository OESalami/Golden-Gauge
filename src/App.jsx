import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Program from './Components/Programs/Programs'

const App = () => {

  const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='WHAT WE DO' title='Crafting Quality Spaces'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Our Projects' title='A Glimpse of Excellence'/>
        <Campus/>
        <Title subTitle='Client Feedback' title='Foundations of Trust and Excellence'/>
        <Testimonials/>
        <Title subTitle='Get in Touch' title='Your Next Project Starts Here'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
