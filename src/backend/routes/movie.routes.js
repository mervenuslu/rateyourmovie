var express = require('express')
var movieRouter = express.Router()
var MovieController = require('../controllers/movie.controller');
var theMovieDbService = require('../services/themoviedb.service')


movieRouter.get('/', MovieController.getMovies)
movieRouter.post('/', MovieController.postMovies)
movieRouter.get('/search', theMovieDbService.getMovieIdByTitle)


module.exports = movieRouter;