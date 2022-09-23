import React from 'react'
import './Discover.css'
import DiscoverDesk from '../Project Imgs/Rectangle 38.png'

const Discover = () => {
  return (
    <div className='discover'>
        <img className='DiscoverDesk' src={DiscoverDesk} alt="" />

        <div className='discover-container'>
            <div className='first-discover'>
                <h1>Try Post<span style={{color: '#0086B0'}}>it</span>.</h1>
            </div>

            <div className='second-discover'>
                <p>Do you want to write or discover stories from writers on any topic?</p>
            </div>

            <div className='third-discover'>
                <input type="text" placeholder='Enter Email Address'/>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Discover