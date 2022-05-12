import React from 'react'
import './About.css'
import product from '../Images/products.jpeg'
const About = () => {
  return (
    <div className='container mt-5 about'>
        <div className='about-info'>
        <h1 className=''>About Us</h1>
        <p className='mt-2'>ISO certification certifies that a management system, manufacturing process, service, or documentation procedure has all the requirements for standardization and quality assurance. ISO (International Organization for Standardization) is an independent, non-governmental, international organization that develops standards to ensure the quality, safety, and efficiency of products, services, and systems.</p>
        <button className='btn-special2 mt-2'>Learn More</button>
        </div>
        <div>
            <img src={product} alt="" />
        </div>
    </div>
  )
}

export default About