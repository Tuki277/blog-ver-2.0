const mongoose = require('mongoose')
const Schema = mongoose.Schema

const project = new Schema({
    title: {
        type: String
    },
    detail: {
        type : String
    }
})

const projectModel = mongoose.model('project', project)
module.exports = projectModel