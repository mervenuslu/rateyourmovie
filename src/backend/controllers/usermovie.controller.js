var UserMovieService = require('../services/usermovie.service')
var UserMovie = require('../models/usermovie.model')

exports.getUserMovies = function (req, res) {

    const userId = req.params.userId
    UserMovieService.getUserMovies(userId).then(userMovies => {
        return res.status(200).json({ status: 200, data: userMovies, message: "Succesfully Movie Service Receieved" });
    }).catch((err) => {
        res.status(400).json({ status: 400, message: err.message });
    });

}



exports.getUserMovie = function (req, res) {
    const userId = req.params.userId
    const movieId = req.params.movieId

    UserMovieService.getUserMovie(userId, movieId).then(userMovie => {
        return res.status(200).json({ status: 200, data: userMovie, message: "Succesfully Movie Service Recieved" });
    }).catch((err) => {
        res.status(400).json({ status: 400, message: err.message });
    });

}


exports.postUserMovie = async function (req, res) {

    var userMovie = new UserMovie({
        userId: req.body.userId,
        theMovieDbId: req.body.theMovieDbId,
        rate: req.body.rate,
        seenStatus: req.body.seenStatus
    });
    userMovie = await UserMovieService.postUserMovie(userMovie);
    console.log(userMovie)
    return res.status(201).json({ status: 201, data: userMovie, message: "Succesfully Created Movie" })

}


exports.putUserMovie = async function (req, res) {
    const userMovie = new UserMovie({
        userId: req.body.userId,
        movieId: req.body.theMovieDbId,
        rate: req.body.rate,
        seenStatus: req.body.seenStatus
    });

    userMovie = await UserMovieService.putUserMovie(userMovie);
    return res.status(201).json({ status: 201, data: userMovie, message: "Succesfully Updated Movie" })

}