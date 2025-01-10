import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
       <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
       <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
       <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Emily Carter</h3>
                            <span>Commercial Office Space in Seattle, Washington</span>
                        </div>
                    </div>
                    <p>Their attention to detail and commitment to excellence are unmatched. My construction project was handled with professionalism from start to finish. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Michael Ramirez</h3>
                            <span>Retail Complex in Miami, Florida</span>
                        </div>
                    </div>
                    <p>I was impressed by their transparency and communication throughout the project. The final outcome was exactly what I envisioned. I’ll definitely work with them again</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>John Peterson</h3>
                            <span> Industrial Warehouse in Chicago, Illinois</span>
                        </div>
                    </div>
                    <p>Working with this team was an absolute pleasure. They delivered on time, stayed within budget, and the quality of their work exceeded my expectations. I highly recommend them!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Sophia Bennett</h3>
                            <span>Luxury Villa in Los Angeles, California</span>
                        </div>
                    </div>
                    <p>This company truly understands how to bring a vision to life. The team was skilled, respectful, and delivered a stunning result. Highly recommended!</p>
                </div>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Testimonials
