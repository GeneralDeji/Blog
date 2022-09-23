import React, { useState } from 'react'
import Postit from '../Project Imgs/Postit 1.png'
import './Navbar.css'
import {CgMenu} from 'react-icons/cg'
import {CgClose} from 'react-icons/cg'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Navbar'>
        <Navigation/>
        <MobileNavigation/>
        
    </div>
  )
}

const Navigation = () =>{
    return (
        <div className='DesktopNav'>
            <div>
                <img src={Postit} alt="Logo" />
            </div>

            <NavLinks/>
        </div>
    )
}

const NavLinks = () => {
    
    return (
        <div className='Navlinks'>
            <ul>
                <li>
                    <Link to="/signup">Stories</Link>
                </li>
                <li>Contact</li>
                <li>
                    <Link to="/login">Sign In</Link>
                </li>
                <li>
                    <Link to="/signup"><button>Get Started</button></Link>
                </li>

            </ul>

        </div>
    )
}


const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <CgMenu className='Hamburger' size={40} onClick={()=>(setOpen(!open)) }/>
    const closeIcon = <CgClose className='Hamburger' size={40} onClick={()=>(setOpen(!open))}/>

    // const closeNav = () => setOpen(false)
    return (
        <div className='MobileNav'>
            <img src={Postit} alt="Logo" />


            {open? closeIcon : hamburgerIcon}
            {open && <NavLinks/>}

        </div>
    )
}
export default Navbar

