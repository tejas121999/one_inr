var express = require('express');
var router = express.Router();


const {wrapper} = require('../utils/errorWrap')


const {addVendor,updateVendor}= require('../controllers/vendors/vendors') //Importing Vendor controller.

const validationError = require('../middleware/validationError')
const {customerValidation} = require('../validations/vendors')



router.post('/',customerValidation,validationError,wrapper(addVendor))
router.put('/:id',customerValidation,validationError,wrapper(updateVendor))

module.exports = router;
