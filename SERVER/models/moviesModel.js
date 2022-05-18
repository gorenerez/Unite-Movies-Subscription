const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    Name : String,
    YearPremiered : Number,
    Genres : [String],
    Image : String
})

module.exports = mongoose.model('movies', MovieSchema)

