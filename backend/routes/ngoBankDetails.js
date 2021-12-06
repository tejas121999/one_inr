var express = require('express');
var router = express.Router();
const { ngoBankDetailsValidation }  = require('../validations/ngoBankDetails');
//importing modules

const { wrapper } = require('../utils/errorWrap');

const { addNgoBankDetails } = require('../Controllers/ngoBankDetails')//Importing Ngo Bank Details from Controllers

//routing modules

router.use('/create-bank-details', ngoBankDetailsValidation, wrapper(addNgoBankDetails))//creating ngo bank details

module.exports = router
