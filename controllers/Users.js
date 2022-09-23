const users = require('../model/signupUsers')
// const posts = require('../model/createPostUser')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const handleError = (err)=>{
    const theError = {email: "", password: "", username: ""}
    // console.log(err.message);

    if(err.code === 11000){
        theError.email = "Email is already in use"
        return theError
    }


    if(err.message === "Incorrect Password"){
        theError.password = "Incorrect Password"
    }
    if(err.message === "Incorrect Email Address"){
        theError.email = "This Email Address is not registered yet"
    }

    if(err.message.includes("User validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            theError[properties.path] = properties.message
        })
    }
    return theError
}

const createToken =(id)=>{
    return jwt.sign({ id }, process.env.MY_SECRET, {expiresIn: 24 * 60 * 60})
}


const signUpUser = async (req, res) =>{
    const { username, email, password } = req.body

    try {
        const user = await users.create({ username, email, password })
        res.status(201).json({ user, redirect : "/login" })
        console.log(user);
    } catch (error) {
        const Error = handleError(error)
        res.status(400).json({ Error })
        console.log(Error);
    }
}

const loginUser = async(req, res)=>{
    const { email, password } = req.body

    try {
        const userExisting = await users.findOne({ email })
        if(userExisting){
            const comparePassword = await bcrypt.compare(password, userExisting.password)
            if(comparePassword){
                const token = createToken(userExisting._id) 

                const time = 24 * 60 * 60 * 1000
                res.cookie("jwt", token, {maxAge: time})
                
                return res.status(200).json({ userExisting, redirect: '/dashboard' })
            }
            throw Error("Incorrect Password")
        }
        throw Error("Incorrect Email Address")

    } catch (error) {
        const Error = handleError(error)
        res.status(400).json({Error})
        console.log(Error);
    }
}

const protectDashboard = async(req, res)=>{
    const token = req.cookies.jwt
    try {
        if(token){
            jwt.verify(token , process.env.MY_SECRET, async(err, decodedToken)=>{
                const currentUser = await users.findById(decodedToken.id)
                return res.status(200).json({currentUser})
            })
        }
        else{
            return res.status(400).json({ redirect: "/login"})
        }
        
    } catch (error) {
        res.status(404).json({redirect: "/login"})
    }

    
}


module.exports = { signUpUser, loginUser, protectDashboard }