var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
var app = express();
var indexRouter = require('./routes/index');

=======
var dotenv = require('dotenv')
dotenv.config({path : './.env'})
const cors = require('cors')
>>>>>>> 58d15fd5d671b687653f707ad435391b8887e880


app.use(express.json());
<<<<<<< HEAD
app.use(logger('dev'));
=======
app.use(cors());
app.use(express.urlencoded({ extended: false }));
>>>>>>> 58d15fd5d671b687653f707ad435391b8887e880
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname,'public')));

//index Route
app.use('/api', indexRouter);


module.exports = app;
