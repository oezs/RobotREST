var express = require('express');

var routes = require('./routes/routes');
var app = express();

app.use('/', routes);

module.exports = app;
