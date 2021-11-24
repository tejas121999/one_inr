var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv')
dotenv.config({path : './.env'})
const cors = require('cors')
var app = express();
var indexRouter = require('./routes/index');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname,'public')));

//index Route
app.use('/api', indexRouter);


module.exports = app;
