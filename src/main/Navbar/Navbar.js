import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import AdbIcon from '@mui/icons-material/Adb';

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor(true)
        } else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);
    return (
        <div className={(color ? 'header header-bg' : 'header')}>
            <nav className='navbar'>
                <div href='#home' className={'nav-menu'}>
                    <h2 style={{fontWeight: 'bolder', fontStyle: 'italic'}}>Her Wellness</h2>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <div className='nav-item'>
                        <a href='#home' onClick={closeMenu}>Home</a>
                    </div>
                    <div className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </div>
                    <div className='nav-item'>
                        <a href='#reviews' onClick={closeMenu}>Reviews</a>
                    </div>
                    <div className='nav-item'>
                        <a href='#location' onClick={closeMenu}>Location</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
