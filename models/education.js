const mongoose = require('mongoose')
const Schema = mongoose.Schema

const education = new Schema({
    title: {
        type: String
    },
    detail: {
        type : String
    }
})

const educationModel = mongoose.model('education', education)
module.exports = educationModel