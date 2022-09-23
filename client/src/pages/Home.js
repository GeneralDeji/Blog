import React from 'react'
import Coffee from '../components/Coffee'
import Discover from '../components/Discover'
import Show from '../components/Show'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'



const Home = () => {
  return (
    <div>
        <Navbar/>
        <Coffee/>
        <Show/>
        <Discover/>
        <Outlet/>
        

        

        {/* On the (<Outlet/>) ---->  //This is coming from App.js (The signup and login that was inside the Home.js Route) */}
    </div>
  )
}



export default Home