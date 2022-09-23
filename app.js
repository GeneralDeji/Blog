require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000
const mongoose = require('mongoose')
const Router = require('./routes/Users')
const cookieParser = require('cookie-parser')
const postRouter = require('./routes/Post')
const path = require("path");



app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["Set-Cookie", "Date", "ETag"],
    allowedHeaders:["Content-Type", "Authorization"],
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(Router)
app.use(postRouter)


//DEPLOYING MY SITE

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });


mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`listening on port ${PORT}...`);
    })
}).catch(err=> console.log(err))