import React, {useState, useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'
import './MyStory.css'

const MyStory = () => {
    const navigate = useNavigate()
    const [stories, setStories] = useState([])

    const handleStory = async ()=>{
        const response = await fetch("https://dejiblogg.herokuapp.com/mypost", {
            method: "GET",
            headers: {"Content-Type" : "application/json"},
            credentials: "include"
        })

        const backresult = await response.json()
        const {allPost} = backresult
        // console.log(allPosts);
        setStories(allPost)
        
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
        
        <div className='myStory'>
            <div className='story-heading'>
                <h1>My Stories</h1>
            
                <div className="btn">
                    <Link to='/post'><button>Write Story</button></Link>
                </div>
            </div>

            <h1 className='all'>All</h1>
            <hr />

            <div className='storyContent'>
            {stories && stories.map((posts)=>{
                const handleDelete = async ()=>{
                    const response = await fetch(`https://dejiblogg.herokuapp.com/mypost/${posts._id}`,{
                        method: "DELETE",
                    }).then(()=>window.location.reload())

                    
                }
                    return (
                        <div className='storyy' key={posts._id}>
                            <div>
                                <h1>{posts.title}</h1>
                                <p className='preview-story'>{posts.story}</p>

                            </div>

                            <div className='mystory-btn'>
                                <Link to={`/mypost/${posts._id}`} >
                                    <button className='edit-btn'>Edit Post</button>
                                </Link>
                                
                                <button onClick={handleDelete} className='delete-btn'>Delete</button>                                

                            </div>
                            
                            

                        </div>
                        
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default MyStory