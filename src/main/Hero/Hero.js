import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpeg';

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <img src={hero} alt="pic" style={{width:'100%'}}></img>
            {/* <div className='content'>
                <p>Call us</p>
                <p>1-800-123-4567</p>
                <p>Because Health Is Wealth</p>
                <button href='#home' className='button'>Free Consultation</button>
            </div> */}
        </div>
    )
}

export default Hero
