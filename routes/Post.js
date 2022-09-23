const express = require("express")
const router = express.Router()
const {createPost, getAllPost, getSinglePost, getAllSinglePost, deletePost, EditPost, getSingleEditPost} = require('../controllers/Post')
// const {protectDashboard} = require('../controllers/Users') //The change i made
const {AuthentUser} = require("../middleware/auth")

router.post('/post',AuthentUser, createPost) //I put it here (protectDashboard)
router.get("/stories",AuthentUser ,getAllPost)
router.get('/stories/:id', AuthentUser, getSinglePost)
router.get('/mypost',AuthentUser, getAllSinglePost)


router.delete('/mypost/:id', deletePost)
router.patch('/mypost/:id', AuthentUser, EditPost)
router.get('/mypost/:id', AuthentUser, getSingleEditPost)


module.exports = router