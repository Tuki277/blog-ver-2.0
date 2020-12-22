const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfessionalExperience = new Schema({
    title: {
        type: String
    },
    detail: {
        type : String
    }
})

const ProfessionalExperienceModel = mongoose.model('ProfessionalExperience', ProfessionalExperience)
module.exports = ProfessionalExperienceModel