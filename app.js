var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var encryptRouter = require('./routes/encrypt');
var decryptRouter = require('./routes/decrypt');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/encrypt', encryptRouter);
app.use('/decrypt', decryptRouter);

module.exports = app;


