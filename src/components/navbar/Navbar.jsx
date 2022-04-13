import { useContext, useState } from 'react';
import { ThemeContext } from '../../context';
import { HashLink as Link } from 'react-router-hash-link';
import {motion} from 'framer-motion'

import logo from '../../img/logo2.png'
import './navbar.scss'




const Navbar = () => {
    const [burgerOpen, setBurgerOpen]= useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;



    return (
            <nav style={{
                backgroundColor: darkMode ? '#222' : '#fff'
            }}>
                <div className="logo">
                    <Link smooth to='/#intro'><img src={logo} alt="" /></Link>
                </div>

                <input id="menu-toggle" type="checkbox"  onClick={()=>setBurgerOpen(!burgerOpen)} />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
            <ul className={burgerOpen ? 'menu active' : 'menu'}  >
                    <li><Link smooth style={{ color: darkMode ? '#222' : '#fff' }} className='menu-link' to='/#intro'>Intro</Link></li>
                    <li><Link smooth style={{ color: darkMode ? '#222' : '#fff' }} className='menu-link' to='/#about'>About</Link></li>
                    <li><Link smooth style={{ color: darkMode ? '#222' : '#fff' }} className='menu-link' to='/#projects'>Projects</Link></li>
                    <li><Link smooth style={{ color: darkMode ? '#222' : '#fff' }} className='menu-link' to='/#contacts'>Contacts</Link></li>

                </ul>

                <ul className='nav-links'>
                    <li><Link smooth className='hashLink' to='/#intro'>Intro</Link></li>
                    <li><Link smooth className='hashLink' to='/#about'>About</Link></li>
                    <li><Link smooth className='hashLink' to='/#projects'>Projects</Link></li>
                    <li><Link smooth className='hashLink' to='/#contacts'>Contacts</Link></li>

                </ul>

            </nav>
    )
}

export default Navbar