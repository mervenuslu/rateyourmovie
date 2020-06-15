var express = require('express');
const mongoose = require('mongoose')
const api = require('./routes/routes');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://merve:asd1merve@ds143893.mlab.com:43893/heroku_pg6qhvf5", { useNewUrlParser: true })
var db = mongoose.connection
db.on("error", error => {
    console.log('Problem connection to the database: '+error);
});

const app = express()

app.use(bodyParser.json());
  app.use("/api/v1", api);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server has started!")
})

