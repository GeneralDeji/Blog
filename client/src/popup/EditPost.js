import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashboardNavbar from '../components/DashboardNavbar'
import { useNavigate } from 'react-router-dom'
import "./EditPost.css"

const EditPost = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [story, setStory] = useState('')

    const thePost = async()=>{
        const response = await fetch(`https://dejiblogg.herokuapp.com/mypost/${id}`, {
            credentials: "include"
        })
        const {post } = await response.json()
        // console.log(post.title);

        setTitle(post.title)
        setTags(post.tags)
        setStory(post.story)
    }

    useEffect(()=>{
        thePost() // eslint-disable-next-line
    }, [])

    const handleEdit = async (e)=>{
        e.preventDefault()

        
        const data = { title, tags, story}

        const response = await fetch(`http://localhost:4000/mypost/${id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data),
            credentials: "include"
        })

        const backresult = await response.json()
        console.log(backresult.stuff);
        navigate('/mypost')
    }


  return (
    <div className='editpost'>
        <DashboardNavbar/>


        <form className='post'>
            <h1>EditPost</h1>


            <div className='div1'>
                <input className='inputt' type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            {/* <div>
                <p style={{color: 'Red'}}>{validTitle}</p>
            </div> */}

            <div className='div2'> 
                <input className='inputt' type="text" placeholder='Tags' value={tags} onChange={(e)=>setTags(e.target.value)}/>
            </div>
            {/* <div>
                <p style={{color: 'Red'}}>{validTags}</p>
            </div> */}

            <div className='div3'>
                <textarea name="" id="" cols="30" rows="10" placeholder='Write your story.....' value={story} onChange={(e)=>setStory(e.target.value)}></textarea>
            </div>
            {/* <div>
                <p style={{color: 'Red'}}>{validStory}</p>
            </div> */}

            <div className="botn">
                <button onClick={handleEdit} >Publish Story</button>
            </div>
        </form>


    </div>
  )
}

export default EditPost