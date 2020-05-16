const MovieGenreModel = require ('./moviegenre.model')

 const MovieModel = {
  poster_path: String,
  adult: Boolean,
  overview: String,
  release_date: String,
  genre_ids: MovieGenreModel,
  id: Number,
  original_title: String,
  original_language: String,
  title: String,
  backdrop_path: String,
  popularity: Number,
  vote_count: Number,
  video: Boolean,
  vote_average: Number
}

module.exports = MovieModel;