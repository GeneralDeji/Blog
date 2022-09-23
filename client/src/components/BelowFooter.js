import React from 'react'
import './BelowFooter.css'
import {SiTwitter} from 'react-icons/si'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const BelowFooter = () => {
  return (
    <div className='below'>
        <div className='line-div'></div>

        <div className='btm'>
            <h3>Terms and Policy</h3>

            <div className='icn'>
                <SiTwitter className='icons' color='#FDFEFF'/>
                <FaFacebookF className='icons' color='#FDFEFF'/>
                <FaLinkedinIn className='icons' color='#FDFEFF'/>
            </div>
        </div>
    </div>
  )
}

export default BelowFooter