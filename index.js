const http = require('http');
const axios = require('axios').default;
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");


var app = express();
var port = 8000;

dotenv.config();

app.use(bodyParser.json()); //use json as language for data back and forth
app.use(logger('dev')); //logger middleware that will log to console what requests were made
app.use(require('./routes')); // in case of using routes. This is pointing to the file routes.js


// Connection to the DB

const dbURI = "mongodb://localhost/test";
//const dbURI = process.env.DB_URL;



mongoose.connect(dbURI,{useNewUrlParser: true, UseUnifiedTopology: true})
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));


app.listen(port, function (err) {
    console.log('Listening to port ' + port);
})
