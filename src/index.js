var express = require('express');
var app = express();
const config = require('./config')


app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
  });

app.listen(config.port);