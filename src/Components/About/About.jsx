import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2> Building the Foundations of Excellence</h2>
        <p>We are a dedicated construction company with a mission to deliver exceptional spaces that combine quality craftsmanship, innovative design, and sustainability. From residential projects to large-scale developments, we bring visions to life.</p>

        <p>Our team of skilled professionals is committed to excellence at every stage of the construction process, ensuring that every project is completed on time, within budget, and to the highest standards. We work closely with our clients to understand their needs and transform their ideas into reality.</p>

        <p>With a focus on sustainability and innovation, we create structures that meet today’s needs while standing strong for generations. From custom homes to commercial developments, we take pride in shaping spaces that inspire and endure</p>
        </div>
    </div>
  )
}

export default About
