var UserMovie = require('../models/usermovie.model')

exports.getUserMovies = function (userId) {

    return UserMovie.find({ userId: userId });

}


exports.getUserMovie = function (userId, movieId) {

    return UserMovie.findOne({ userId: userId, theMovieDbId: movieId });
}


exports.postUserMovie = async function (userMovie) {
    var userMovieResult = await UserMovie.exists({ userId: userMovie.userId, theMovieDbId: userMovie.theMovieDbId });
    if (userMovieResult == false) {
        userMovie = await userMovie.save()
        return userMovie;

    } else {
        return userMovie;
    }
}


exports.putUserMovie = async function (userMovie) {

    var _userMovie = await getUserMovie(userMovie.userId, userMovie.theMovieDbId)
    _userMovie.rate = userMovie.rate;
    _userMovie.seenStatus = userMovie.seenStatus;

    return _userMovie.save();

}