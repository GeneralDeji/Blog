const mongoose = require('mongoose')
const bycrpt = require("bcrypt")
const { isEmail } = require('validator')






const SignUpSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'This Username is already in use'],
        required: [true, 'Enter Username'],
        minlength: [3, 'Username has to be more than 3 characters'],
        trim: true
    },
    email: {
        type: String,
        unique: [true,"This Email is already in use"],
        required: [true, "Enter Email Address"],
        trim: true,
        validate: [isEmail, "Not a correct Email Address"]
    },
    password: {
        type: String,
        required: [true, "Enter Password"],
        minlength: [6, "Minimum password length is 6"]
    }
}, {timestamps: true})

SignUpSchema.pre('save', async function(next){
    const salt = await bycrpt.genSalt()

    this.password = await bycrpt.hash(this.password, salt)
    next()
})

module.exports = mongoose.model('User', SignUpSchema)