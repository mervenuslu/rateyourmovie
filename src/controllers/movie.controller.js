var MovieService = require('../services/movie.service')
var Movie = require('../models/movie.model')

exports.getMovies = function (req, res) {

    MovieService.getMovies().then(movies => {
        return res.status(200).json({ status: 200, data: movies, message: "Succesfully Movie Service Received" });
    }).catch((err) => {
        res.status(400).json({ status: 400, message: err.message });
    });

}


exports.postMovies = async function (req, res) {
    
    var movie = new Movie({
        theMovieDbId: req.body.theMovieDbId,
        title: req.body.title,
        releaseDate: req.body.releaseDate,
        poster: req.body.poster
    });

    movie = await MovieService.postMovie(movie);
    return res.status(201).json({ status: 201, data: movie, message: "Succesfully Created Movie" })
    // then(movie => {
    //     return res.status(201).json({ status: 201, data: movie, message: "Succesfully Created Movie" })
    // }).catch((err) => {
    //     return res.status(400).json({ status: 400, message: err + "Movie Creation was Unsuccesfull" })
    // });

}


