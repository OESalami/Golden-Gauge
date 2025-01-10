import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Shaping a Better Future Through Quality Construction.</h1>
        <p>By combining expert craftsmanship with sustainable practices, we bring visions to life and help shape a world that thrives..</p>

        <button className='btn'>Explore More <img src={dark_arrow}/></button>
      </div>
    </div>
  )
}

export default Hero
