const users = require("../model/signupUsers")
const jwt = require("jsonwebtoken")

const AuthentUser = (req, res, next)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.MY_SECRET, (err, decodedToken)=>{
            if(err){
                return res.json({ redirect: "/login"})
            }else{
                next()
            }
        })
    }else{
        return res.json({ redirect: "/login"})
    }
}

const checkUser = (req, res, next)=>{
    const token = req.cookies.jwt
    console.log("Hello World");

    if(token){
        console.log(token);
        jwt.verify(token, process.env.MY_SECRET, async (err, decodedToken)=>{
            if (err){
                console.log(err);
            return  res.status(404).json({redirect: "/login"})
            


            }else{
                const user = await users.findById(decodedToken.id)
                return res.status(200).json({ user })
                
            }
        })

    }else{
       return res.status.json({ redirect: "/login"})
   
    }
}

//Replaced the chechUser with the ProtectDashboard in the controllers folder

module.exports = { AuthentUser, checkUser }