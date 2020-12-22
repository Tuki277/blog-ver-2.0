const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolio = new Schema({
    name: {
        type: String
    },
    image: {
        type : String
    }
})

const portfolioModel = mongoose.model('portfolio', portfolio)
module.exports = portfolioModel