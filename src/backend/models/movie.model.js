const mongoose = require("mongoose")

const schema = mongoose.Schema({
  theMovieDbId:Number, 
  title: String,
  releaseDate: String,
  poster: String
})

module.exports = mongoose.model("Movies", schema)