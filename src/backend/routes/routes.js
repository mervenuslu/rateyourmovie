const express = require('express')
const router = express.Router()
const movieRoutes = require('../routes/movie.routes')
const userMovieRoutes = require('../routes/usermovie.routes')

router.use('/movie', movieRoutes);
router.use('/usermovie', userMovieRoutes);


module.exports = router