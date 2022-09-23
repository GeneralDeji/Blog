import React, { useState } from 'react'
import './Login.css'
import {CgClose} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const data = {email, password}

    const [validEmail, setValidEmail] = useState('')
    const [validPassword, setValidPassword] = useState("")

    const handleLogin = async (e) =>{
        e.preventDefault()

        const response = await fetch("https://dejiblogg.herokuapp.com/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
            credentials: "include",
        })

        const backresult = await response.json()
        console.log(backresult);
        if(backresult.redirect){
            navigate('/dashboard')
        }

        if(backresult.Error){
            setValidEmail(backresult.Error.email)
            setValidPassword(backresult.Error.password)
        }



        // navigate('/dashboard')
    }



  return (
    <div className='login'>
        <div className='loginModal'>
            <Link to="/"><CgClose color='black' className='closePopup' size={25}/></Link>

            <div className="loginModal-container">
                <div>
                    <h1>Welcome Back</h1>
                </div>


                <form className="inps">

                    <div className='inptt'>
                        <label>Your Email Address</label>
                        <div className='input'>
                            <input  
                            type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                            />
                        </div>
                        <p style={{color: "red"}}>{validEmail}</p>
                    </div>

                    <div className='inptt'>
                        <label>Password</label>
                        <div className="input">
                            <input  
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                            />
                        </div>
                        <p style={{color: "red"}}>{validPassword}</p>
                    </div>

                    <div className='btnn'>
                        <button onClick={handleLogin} >Continue</button>
                    </div>


                </form>


                
                    <p className='already'><b>No account?<Link to='/signup'><span style={{color: '#0086B0'}}>Sign Up</span></Link></b></p>
                

            </div>

        </div>
    </div>
  )
}

export default Login