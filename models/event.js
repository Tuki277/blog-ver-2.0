const { text } = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const event = new Schema({
    title: {
        type: String
    },
    detail: {
        type : String
    }
})

const evnetModel = mongoose.model('event', event)
module.exports = evnetModel