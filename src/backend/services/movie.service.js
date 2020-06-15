var Movie = require('../models/movie.model')

exports.getMovies = function () {

    return Movie.find()

}


exports.postMovie = async function (movie) {
    var movieResult = await Movie.exists({ theMovieDbId: movie.theMovieDbId });
    if (movieResult == false) {
        movie = await movie.save()
        return movie;
        
    } else {
        return movie;
    }


}


