const posts = require('../model/createPostUser')
const users = require('../model/signupUsers')
const jwt = require('jsonwebtoken')

const handlePostError = (err)=>{
    const theError = {title: "", tags: "", story: ""}

    if(err.code === 11000){
        theError.title = "Title already Exists"
        return theError
    }


    // if(err.message === "Incorrect Password"){
    //     theError.password = "Incorrect Password"
    // }
    // if(err.message === "Incorrect Email Address"){
    //     theError.email = "This Email Address is not registered yet"
    // }

    if(err.message.includes("Post validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            theError[properties.path] = properties.message
        })
    }
    return theError
}

const createPost = async (req, res)=> {
    const {title, tags, story} = req.body

    try {
        const post = await posts.create({ title, tags, story })
        res.status(201).json({post})
        // console.log(post);
    } catch (error) {
        const Error = handlePostError(error)
        res.status(404).json({ Error })
        // console.log(Error);
    }
}



const getAllPost = async (req, res)=>{
    try {
        const allPosts = await posts.find()
        res.status(200).json({ allPosts })
    } catch (error) {
        console.log(error);
    }
}

// Subject to Future Change becausit does not get the post of the single user (so it still funtions like the getAllPost function)
const getAllSinglePost = async(req, res)=>{
    try {
        const allPost = await posts.find()
        res.status(200).json({ allPost })
    } catch (error) {
        console.log(error);
    }
}

const getSinglePost = async(req, res)=>{
    const { id } = req.params

    try {
        const singlePost = await posts.findById(id)
        res.status(200).json({singlePost})
    } catch (error) {
        console.log(error);
        res.status(404).json({error})
    }
}


const deletePost = async (req, res)=>{
    const { id } = req.params

    try {
        const deletePost = await posts.findByIdAndDelete(id)
        res.status(200).json({ msg: "Deleted Successfully, you can confirm it tho"})
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "There is an Error, check code"})
    }
}



const EditPost = async (req, res)=>{
    const { id } = req.params
    const {title, tags, story} = req.body

    try {
        const stuff = await posts.findById(id)

        if(stuff){
            if(!title || !tags || !story){
                return res.status(404).json({ msg: "Please input necessary details"})
            }

            const Updating = await posts.findByIdAndUpdate(stuff, {title, tags, story}, {new: true, runValidators: true} )
            const all = await posts.find()
            return res.status(201).json({ stuff })
        }
        return res.json({ msg: "Not Found"})
    } catch (error) {
        console.log(error);
    }
}


const getSingleEditPost = async(req,res)=>{
    const { id } = req.params

    const post = await posts.findById(id)
    res.json({ post })
}

module.exports = {createPost, getAllPost, getSinglePost, getAllSinglePost, deletePost, EditPost, getSingleEditPost}
