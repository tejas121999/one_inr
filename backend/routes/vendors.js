var express = require('express');
var router = express.Router();

const {wrapper} = require('../utils/errorWrap')


const {addVendor,updateVendor,getAllVendor,deleteVendor,generateVendorPdf,generateVendorCsv,getVenorById,getVendorExcel}= require('../controllers/vendors') //Importing Vendor controller.
// const {addVendor,updateVendor,getAllVendor,deleteVendor, getVenorById}= require('../controllers/vendors') //Importing Vendor controller.

const validationError = require('../middleware/validationError')
const {createVendorValidation,updateVendorValidation} = require('../validations/vendors')



router.post('/',createVendorValidation,validationError,wrapper(addVendor)) 
router.put('/:id',updateVendorValidation,validationError,wrapper(updateVendor))
router.get('/',wrapper(getAllVendor))
router.get('/get-vendor-pdf',generateVendorPdf)
router.get('/get-vendor-csv',generateVendorCsv)
router.get('/get-vendor-xlsx',getVendorExcel)

router.get('/:id',wrapper(getVenorById))
router.delete('/:id',wrapper(deleteVendor))
module.exports = router;
