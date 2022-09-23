import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'
import "./ViewPost.css"

const ViewPost = () => {
  const { id } = useParams()

  const [more, setMore] = useState(null)


  const handleMore = async()=>{
    const response = await fetch(`https://dejiblogg.herokuapp.com/stories/${id}`, {
      method: "GET",
      headers: {"Content-Type" : "application/json"},
      credentials: "include"
    })

    const backresult = await response.json()

    if(backresult.singlePost){
      setMore(backresult.singlePost)
    }
    if(backresult.error){
      console.log(backresult.error);
    }

  }

  useEffect(()=>{
    handleMore() // eslint-disable-next-line
  },[])




  return (
    <div >
        <DashboardNavbar/>

        {more && <div className='more'>
          <div className='tag'> 
            <p>{more.tags}</p> 
          </div>

          <h1 >{more.title}</h1>
          <hr />
          <p className='story'>{more.story}</p>
        </div>}
        

          
        {/* <p>Tag</p>
        <h1>Title</h1>
        <p>Story</p> */}
    </div>
  )
}

export default ViewPost