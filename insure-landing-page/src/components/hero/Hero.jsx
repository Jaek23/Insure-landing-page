import React from 'react'
import heroImage from '/heroImage.jpg'

const Hero = () => {
  return (
    <section style={{backgroundColor:"purple", display:'flex', justifyContent:'space-between', alignItems:'center', padding:'50px' }}>
        <div>
            <h1>HUMANIZING YOUR INSURANCE.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are procted.</p>
            <button>VIEW PLANS</button>
        </div>
        <img src={heroImage} alt='hero'/>
    </section>
  )
}

export default Hero
