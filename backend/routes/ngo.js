var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
//importing modules

const { wrapper } = require('../utils/errorWrap');

// const ngoController = require('../controllers/ngo');//importing ngo controller

const validationError = require('../middleware/validationError'); //importing validatation error from middleware

const { ngoValidation } = require('../validations/ngo');//importing ngo validatation

const { addNgo, updateNgo, getAllNgo, deleteNgo ,getNgoById} = require('../controllers/ngo');//importing ngo controller operation from controller

const { addNgoBankDetails } = require('../controllers/ngoBankDetails')//Importing Ngo Bank Details from Controllers

//routing modules

router.post('/create-ngo',checkAuth,ngoValidation,validationError,wrapper(addNgo))//creating ngo 

router.post('/create-bank-details',checkAuth,addNgoBankDetails)//creating ngo bank details

router.get('/read-ngo', checkAuth,wrapper(getAllNgo))//listing ngo

router.get('/:id',checkAuth,wrapper(getNgoById)) //Getting Ngo Details with Bank Id

router.put('/update-ngo/:id',checkAuth, wrapper(updateNgo))//update ngo

router.delete('/delete-ngo/:id',checkAuth, wrapper(deleteNgo))//deleting ngo

module.exports= router;