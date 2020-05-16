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


exports.postUserMovie = function (req, res) {

    const userMovie = new UserMovie({
        userId: req.body.userId,
        movieId: req.body.movieId,
        rate: req.body.rate,
        seenStatus: req.body.seenStatus
    });
    UserMovieService.postUserMovie(userMovie).then(userMovie => {
        return res.status(201).json({ status: 201, data: userMovie, message: "Succesfully Created Movie" })
    }).catch((err) => {
        return res.status(400).json({ status: 400, message: err + "Movie Creation was Unsuccesfull" })
    });

}


exports.putUserMovie = function (req, res) {
    const userMovie = new UserMovie({
        userId: req.body.userId,
        movieId: req.body.movieId,
        rate: req.body.rate,
        seenStatus: req.body.seenStatus
    });

    UserMovieService.putUserMovie(userMovie).then(userMovie => {
        return res.status(200).json({ status: 200, data: userMovie, message: "Succesfully Movie Service Recieved" });
    }).catch((err) => {
        res.status(400).json({ status: 400, message: err.message });
    });

}