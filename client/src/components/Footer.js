import React from 'react'
import './Footer.css'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='first-footer'>
            <h3 >About Post<span style={{color: '#0086B0'}}>it</span>.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet. que maeae tortoere necsem commodo ac.</p>
        </div>

        <div className='second-footer'>
            <h3>Quick Menu</h3>

            <div>
                <p>Home</p>
                <p>Stories</p>
                <p>Trending Stories</p>
                <p>Popular Stories</p>
            </div>
        </div>

        <div className='third-footer'>
            <p>Sign Up</p>
            <p>Login</p>
            <p>Contact Us</p>

        </div>

        <div className='fourth-footer'>
            <h3>Subscribe to our newsletter</h3>

            <div className='sub-con'>
                <input type="text" placeholder='Email Address'/>

                <div className='sub-div'>
                    <p>Subscribe</p>
                    <AiOutlineArrowRight color='#FDFEFF'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer