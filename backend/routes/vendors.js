var express = require('express');
var router = express.Router();

const {wrapper} = require('../utils/errorWrap')


const {addVendor,updateVendor,getAllVendor,deleteVendor}= require('../controllers/vendors') //Importing Vendor controller.

const validationError = require('../middleware/validationError')
const {createVendorValidation,updateVendorValidation} = require('../validations/vendors')



router.post('/',createVendorValidation,validationError,wrapper(addVendor))
router.put('/:id',updateVendorValidation,validationError,wrapper(updateVendor))
router.get('/',wrapper(getAllVendor))
router.delete('/:id',wrapper(deleteVendor))
module.exports = router;
