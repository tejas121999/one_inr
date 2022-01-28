var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv')
dotenv.config({path : './.env'})
const cors = require('cors')
const cron = require('node-cron')
var app = express();

//moment
const moment = require('moment')
//model
const models = require('./models')
//Importing All Cron Functions
const {createRecuringProject} = require('./controllers/projects')

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//index Route
var indexRouter = require('./routes/index');
app.use('/api', indexRouter);


//Create a Recuring Project.
//This will check whether project is recuring and if recuring is true it will again check again in projectInterval model. if endDate < todays date it will create a new instance of project.
cron.schedule('*/60 * * * *', async () => {
    let date = moment(); let startTime = moment();
    try {
        let endTime = moment();
        await createRecuringProject();
        let processingTime = moment.utc(moment(endTime, "DD/MM/YYYY HH:mm:ss.SSS").diff(moment(startTime, "DD/MM/YYYY HH:mm:ss.SSS"))).format("HH:mm:ss.SSS");
        await cronLogger(1, date, startTime, endTime, processingTime, "success", "success", null);
    } catch (err) {
        let endTime = moment();
        var processingTime = moment.utc(moment(endTime, "DD/MM/YYYY HH:mm:ss.SSS").diff(moment(startTime, "DD/MM/YYYY HH:mm:ss.SSS"))).format("HH:mm:ss.SSS")
        await cronLogger(1, date, startTime, endTime, processingTime, "failed", JSON.stringify(err.message), null)
    }
});

async function cronLogger(cronTypeId, date, startTime, endTime, processingTime, status, message, notes) {
    try {
        await models.cronLogger.create({ cronTypeId, date, startTime, endTime, processingTime, status, message, notes })
    } catch (error) {
        console.log(error);
    }
}


module.exports = app;
