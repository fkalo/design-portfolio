var express = require('express');
let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var zoneRouter = require('./routes/zone');

var app = express();

app.set('views', './views');
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.use (bodyParser.urlencoded( {extended : true} ) );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/zone', zoneRouter);

module.exports = app;
