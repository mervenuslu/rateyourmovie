var express = require('express');
const mongoose = require('mongoose')
const api = require('./routes/routes');
const bodyParser = require('body-parser');
console.log("Server has starting")
mongoose
  .connect("mongodb://merve:asd1merve@ds143893.mlab.com:43893/heroku_pg6qhvf5", { useNewUrlParser: true })
  .then(() => {
    const app = express()

    app.use(bodyParser.json());
    app.use("/api/v1", api);
   
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log("Server has started!")
    })
  })

