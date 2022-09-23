import React, { useState } from 'react'
import "./DashboardNavbar.css"
import Postit from '../Project Imgs/Postit 1.png'
import {CgMenu} from 'react-icons/cg'
import {CgClose} from 'react-icons/cg'
import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
  return (
    <div className='navbar'>
        <Navigation/>
        <MobileNavigation/>
    </div>
  )
}

const Navigation = () =>{
    return (
        <div className='desktopNav'>
            <div>
                <img src={Postit} alt="Logo" />
            </div>

            <NavLinks/>
        </div>
    )
}

const NavLinks = () => {
    
    return (
        <div className='navlinks'>
            <ul>
                <Link to='/stories'>
                    <li>Stories</li>
                </Link>
                
                <li>Contact</li>
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
        <div className='mobileNav'>
            <img src={Postit} alt="Logo" />


            {open? closeIcon : hamburgerIcon}
            {open && <NavLinks/>}

        </div>
    )
}

export default DashboardNavbar