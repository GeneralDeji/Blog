import React from 'react'
import './Coffee.css'
import DesktopCoffeeImg from '../Project Imgs/Rectangle 3.png'
import MobileCoffeeImg from '../Project Imgs/MOBILE COFFEE.png'

const Coffee = () => {
  return (
    <div className='coffee'>
        <DesktopCoffee/>
        <MobileCoffee/>
    </div>
  )
}

const Curious = () => {
    return (
        <div className='curious'>
            <h1>Stay Curious.</h1>
            <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut. </p>
            <div>
                <button>Get Started</button>
            </div>
        </div>
    )
}

const DesktopCoffee = () => {
    return (
        <div className='deskCoffee'>
            <img src={DesktopCoffeeImg} alt="" />

            <Curious/>
        </div>
    )
}

const MobileCoffee = () => {
    return ( 
        <div className='mobileCoffee'>
            <img src={MobileCoffeeImg} alt="" />

            <Curious/>
        </div>
    )
}

export default Coffee