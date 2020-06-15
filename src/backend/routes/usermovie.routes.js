var express = require('express')
var userMovieRouter = express.Router()
var UserMovieController = require('../controllers/usermovie.controller');


userMovieRouter.get('/userId/:userId', UserMovieController.getUserMovies)
userMovieRouter.get('/userId/:userId/movieId/:movieId', UserMovieController.getUserMovie)
userMovieRouter.post('/', UserMovieController.postUserMovie)
userMovieRouter.put('/', UserMovieController.putUserMovie)

module.exports = userMovieRouter;