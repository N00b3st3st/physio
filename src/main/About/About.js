import React from 'react'
import profile from '../../assets/profile.jpeg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='col-12 container'>
                <div className='col-md-6 col-xs-12 p-container'>
                    <img src={profile} alt='profile' />
                </div>
                <div className='col-md-6 col-xs-12 p-container'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p style={{textAlign: 'justify'}}>
                        I am John Doe, a qualified physiotherapist with a degree in Physiotherapy 
                        from Ireland and over two years of hands-on clinical experience. Skilled in patient assessment, 
                        rehabilitation planning, and therapeutic exercise programs, with a strong focus on improving mobility, 
                        managing pain, and promoting long-term recovery. Demonstrates excellent communication and interpersonal 
                        skills, with a commitment to evidence-based practice and patient-centered care.
                    </p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
