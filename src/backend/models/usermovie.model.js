const mongoose = require('mongoose')

const schema = mongoose.Schema({
    userId: Number,
    theMovieDbId: Number,
    rate: Number,
    seenStatus: Boolean
})

module.exports = mongoose.model("UserMovies", schema)