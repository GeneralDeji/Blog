import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../components/DashboardNavbar'
import MainPage from '../components/MainPage'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => { 
  const navigate = useNavigate()
  const [user, setUser] = useState('')

  const getDashboard = async ()=>{
    try {
          const response = await fetch("https://dejiblogg.herokuapp.com/dashboard", {
          method: "GET",
          headers: {"Content-Type" : "application/json"},
          credentials: "include",
          })

          const backresult = await response.json()
          console.log(backresult);

          if(backresult.currentUser){
            setUser(backresult.currentUser.username)
          }
          if(backresult.redirect){
            navigate('/login')
          }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getDashboard() // eslint-disable-next-line
  }, [])

  return (
    <div>
        <DashboardNavbar />
        <MainPage user={user}/>
        
    </div>
  )
}



export default Dashboard