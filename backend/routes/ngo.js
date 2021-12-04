var express = require('express');
var router = express.Router();

//importing modules

const { wrapper } = require('../utils/errorWrap');

const validationError = require('../middleware/validationError'); //importing validatation error from middleware

const { ngoValidation } = require('../validations/ngo');//importing ngo validatation

const { addNgo, updateNgo, getAllNgo, deleteNgo } = require('../Controllers/ngo');//importing ngo controller operation from controller

const { addNgoBankDetails } = require('../Controllers/ngoBankDetails')//Importing Ngo Bank Details from Controllers

//routing modules

router.post('/create-ngo', wrapper(addNgo))//creating ngo 

router.post('/create-bank-details', addNgoBankDetails)//creating ngo bank details

router.get('/read-ngo', wrapper(getAllNgo))//listing ngo

router.put('/update-ngo/:id', ngoValidation, validationError, wrapper(updateNgo))//update ngo

router.delete('/delete-ngo/:id', wrapper(deleteNgo))//deleting ngo

module.exports= router;