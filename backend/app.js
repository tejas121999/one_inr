var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv')
dotenv.config({path : './.env'})
const cors = require('cors')
const cron = require('node-cron')
var app = express();
const {setRecuringProject} = require('./controllers/projects')
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//index Route
var indexRouter = require('./routes/index');
app.use('/api', indexRouter);



// cron.schedule('* * * * *', async () => {
//     try {
//         await setRecuringProject()

//     } catch (err) {
//         console.log(err)
//     }
// });

// cron.schedule(' * * * * *' ,async() => {

//     console.log("Cron SCedular is invoking the function.")
// })







module.exports = app;
