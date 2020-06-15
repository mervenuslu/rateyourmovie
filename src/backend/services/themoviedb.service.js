const theMovieDbModel = require('../models/themoviedb/movie.model')
const request = require('request')
const api_main_url = 'https://api.themoviedb.org/3'
const api_key = '3725a76f51ba0c1b19587d471f71bb44';
const searchMovie = '/search/movie'
const lang = 'language=en-US'

exports.getMovieIdByTitle = function (req, res) {
    var title = req.query.title
    var requestUrl = api_main_url + searchMovie + '?api_key=' + api_key + '&' + lang + '&' + 'query=' + title
    console.log(requestUrl)

    request.get({url:requestUrl, json:true}, function (err, apiRes, body) {
        return res.status(200).json({ status: 200, data: body.results, message: "Succesfully Movie Service Recieved" });
      })

}