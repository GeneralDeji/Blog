import React, { useState } from 'react'
import './Signup.css'
import {CgClose} from 'react-icons/cg'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [validEmail, setValidEmail] = useState("")
    const [validUsername, setValidUsername] = useState("")
    const [validPassword, setValidPassword] = useState("")

    const handleSignUp = async (e)=>{
        e.preventDefault();

        const data = { email, username, password }

        const response = await fetch("https://dejiblogg.herokuapp.com/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type" : "application/json"},
        })
        
        const backresult = await response.json() 
        
        if(backresult.user){
            setEmail("")
            setUsername("")
            setPassword("")
        }
        
        if(backresult.redirect){
            navigate('/login')
        }
        if(backresult.Error){
            setValidEmail(backresult.Error.email)
            setValidUsername(backresult.Error.username)
            setValidPassword(backresult.Error.password)
        }
        
        // if(backresult.Error){
        
        // }
        // if(backresult.user){
        //     console.log("The user");
        // }

        // const valid = {backresult.Error.email,  }
        

        // if(backresult.Error){
            //     console.log("This is an error");
            // }
    
            // if(backresult.user){
            //     console.log("Able to Sign Up");
            // }else{
            //     console.log("something is wrong, meant to login ");
            // }

        // navigate('/login')
    }

    

  return (
    <div className='signup'>
        <div className='modal'>
            <Link to="/"><CgClose color='black' className='closePopup' size={25}/></Link>

            <div className="modal-container">
                <div>
                    <h1>Join Post<span style={{color: '#0086B0'}}>it</span>.</h1>
                </div>

                <div>
                    <p className='enter'>Enter your email address to create an account on Post<span style={{color: '#0086B0'}}>it</span>.</p>
                </div>

                <form className="inps">
                    <div className='inpt'>
                        <label>Username</label>
                        <div className="input">
                            <input 
                                type="text" 
                                value={username}
                                onChange={(e)=> setUsername(e.target.value)}
                            />
                            
                        </div>
                        <p style={{color: 'Red'}} >{validUsername}</p>
                    </div>

                    <div className='inpt'>
                        <label>Your Email Address</label>
                        <div className='input'>
                            <input  
                            type="email" 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <p style={{color: 'Red'}}>{validEmail}</p>
                    </div>

                    <div className='inpt'>
                        <label>Password</label>
                        <div className="input">
                            <input  
                            type="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <p style={{color: 'Red'}}>{validPassword}</p>
                    </div>

                    <div className='btn'>
                        <button onClick={handleSignUp} >Continue</button>
                    </div>


                </form>
                

                
                    <p className='already'><b>Already have an account?<Link to='/login'><span style={{color: '#0086B0'}}>Sign In</span></Link></b></p>
                
            </div>

        </div>
    </div>
  )
}

export default Signup