const mongoose = require('mongoose')



const publishSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Enter Title'],
        unique: [true, 'This title is already in use']
    },
    tags: {
        type: String,
        required: [true, 'Enter Tag']
    },
    story: {
        type: String,
        required: [true, 'Enter Story Content']
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', publishSchema)