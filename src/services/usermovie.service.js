var UserMovie = require('../models/usermovie.model')

exports.getUserMovies = function (userId) {

    return UserMovie.find({ userId: userId });

}


exports.getUserMovie = function (userId, movieId) {

    return UserMovie.findOne({ userId: userId, movieId: movieId });
}


exports.postUserMovie = function (userMovie) {

    return userMovie.save();
}


exports.putUserMovie = function (userMovie) {

    var _userMovie = getUserMovie(userMovie.userId, userMovie.movieId)
    _userMovie.rate = userMovie.rate;
    _userMovie.seenStatus = userMovie.seenStatus;

    return _userMovie.save();

}