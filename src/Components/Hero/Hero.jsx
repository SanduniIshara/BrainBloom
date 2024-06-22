import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
     <div className='hero-text'>
       <h1>We Ensure better education for a better world</h1>
       <p>Unlock your potential with our comprehensive educational resources. Explore a world of knowledge and take your learning to the next level.</p>
       <button className='btn'>Explore more<img src={dark_arrow} alt="" /></button>
     </div> 
    </div>
  )
}

export default Hero
