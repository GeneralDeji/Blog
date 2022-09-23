import React from 'react'
import "./MainPage.css"
import Puzzle from "../Project Imgs/unsplash_Z2bJeJQRbW0.png"
import { Link } from 'react-router-dom'

const MainPage = ({user}) => {


  return (
    <div className='mainpage'>
        <div className="text">
            <h1>Welcome {user},</h1>
            <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut. </p>

            <div className='btns'>
                <Link to='/mypost'><button className='story-btn'>My Stories</button></Link>
                <Link to='/stories'><button className='feed-btn'>Go to Feed</button></Link>
            </div>
        </div>

        <div className='puzzle'>
            <img src={Puzzle} alt="" />
        </div>
    </div>
  )
}

export default MainPage