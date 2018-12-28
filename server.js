var express = require('express');
var app = express();
const config = require('./config')

app.use(express.static('public'));
//app.use(express.static('images'));

app.listen(config.port);