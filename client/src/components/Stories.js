import React, { useEffect, useState } from 'react'
import "./Stories.css"
import DashboardNavbar from './DashboardNavbar'
import Puzzle from "../Project Imgs/unsplash_Z2bJeJQRbW0.png"
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'



const Stories = () => {
    const navigate = useNavigate()
    const [stories, setStories] = useState([])

    const handleStory = async ()=>{
        const response = await fetch("https://dejiblogg.herokuapp.com/stories/", {
            method: "GET",
            headers: {"Content-Type" : "application/json"},
            credentials: "include"
        })

        const backresult = await response.json()
        const {allPosts} = backresult
        setStories(allPosts)
        
        if(backresult.redirect){
            navigate("/login")
        }
    }

    useEffect(()=>{
        handleStory() // eslint-disable-next-line
    }, [])





  return (
    <div>
        <DashboardNavbar/>

        <div className='stories'>
            <div className="textt">
                <h1>You've got a story, Post<span style={{color: '#0086B0'}}>it</span>.</h1>
                <p>Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas massa velit aliquam. Molestim bibendum hnt ipsum orci, platea aliquam id ut. </p>
            </div>

            <div className='puzzlee'>
                <img src={Puzzle} alt="" />
            </div>
        </div>
        

        <>
            <div className="all-stories">
                {stories && stories.map((posts)=>{
                    return (
                        <div className='story' key={posts._id}>
                            <h1>{posts.title}</h1>
                            <p className='tag'>{posts.tags}</p>
                            <p className='preview-story'>{posts.story}</p>
                            <div className='readmore'>
                                <AiOutlineArrowRight color='#0086B0'/>
                                <Link to={`/stories/${posts._id}`} style={{color: "blue"}}>Read More..</Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    </div>
  )
}

export default Stories