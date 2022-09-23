import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreatePost.css'
import DashboardNavbar from './DashboardNavbar'


const CreatePost = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [story, setStory] = useState('')

    const [validTitle, setValidTitle] = useState('')
    const [validTags, setValidTags] = useState('')
    const [validStory, setValidStory] = useState('')

    const handlePost = async (e) =>{
        e.preventDefault()

        const data = {title, tags, story}

        const response = await fetch("https://dejiblogg.herokuapp.com/post", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
            credentials: "include",
        })
        const backresult = await response.json()
        console.log(backresult);

        if(backresult.post){
            setTitle('')
            setTags('')
            setStory('')
            navigate('/stories')
        }

        if(backresult.Error){
            setValidTitle(backresult.Error.title)
            setValidTags(backresult.Error.tags)
            setValidStory(backresult.Error.story)
        }

        if(backresult.redirect){
            navigate("/login")
        }
        //To redirect back to login if it doesnt auhtneticate user from the middleware backend
        

    }


  return (
    <div className='createpost'>
        <DashboardNavbar/>

        <div className='post'>
            <h1>Create Post</h1>

            <form>
                <div className='div1'>
                    <input className='inputt' type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <p style={{color: 'Red'}}>{validTitle}</p>
                </div>

                <div className='div2'> 
                    <input className='inputt' type="text" placeholder='Tags' value={tags} onChange={(e)=>setTags(e.target.value)}/>
                </div>
                <div>
                    <p style={{color: 'Red'}}>{validTags}</p>
                </div>

                <div className='div3'>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Write your story.....' value={story} onChange={(e)=>setStory(e.target.value)}></textarea>
                </div>
                <div>
                    <p style={{color: 'Red'}}>{validStory}</p>
                </div>

                <div className="botn">
                    <button onClick={handlePost}>Publish Story</button>
                </div>
            </form>

        </div>

    </div>
  )
}

export default CreatePost