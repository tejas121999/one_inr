var express = require('express');
var router = express.Router();

const {wrapper} = require('../utils/errorWrap')


const {addVendor,updateVendor,getAllVendor}= require('../controllers/vendors') //Importing Vendor controller.

const validationError = require('../middleware/validationError')
const {createVendorValidation} = require('../validations/vendors')



router.post('/',createVendorValidation,validationError,wrapper(addVendor))
router.put('/:id',wrapper(updateVendor))
router.get('/',wrapper(getAllVendor))

module.exports = router;
