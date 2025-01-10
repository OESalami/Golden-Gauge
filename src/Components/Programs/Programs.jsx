import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
      <img src={program_1} alt="" />
      <div className="caption">
        <img src={program_icon_1} alt="" />
        <p>Residential Construction</p>
      </div>
      </div>
      <div className="program">
      <img src={program_2} alt="" />
      <div className="caption">
        <img src={program_icon_2} alt="" />
        <p>Project Management</p>
      </div>
      </div>
      <div className="program">
      <img src={program_3} alt="" />
      <div className="caption">
        <img src={program_icon_3} alt="" />
        <p>Renovation and Remodeling</p>
      </div>
      </div>
    </div>
  )
}

export default Program
