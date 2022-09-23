const express = require("express")
const router = express.Router()
const { signUpUser, loginUser, protectDashboard } = require("../controllers/Users")
const {AuthentUser, checkUser} = require('../middleware/auth')

router.post("/signup", signUpUser)
router.post("/login", loginUser)

router.get("/dashboard", AuthentUser, protectDashboard )




module.exports = router