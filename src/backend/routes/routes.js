const express = require('express')
const router = express.Router()
const movieRoutes = require('../routes/movie.routes')
const userMovieRoutes = require('../routes/usermovie.routes')

router.use('/movies', movieRoutes);
router.use('/usermovies', userMovieRoutes);


module.exports = router