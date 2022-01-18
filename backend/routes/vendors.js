var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')

const {wrapper} = require('../utils/errorWrap')


const {addVendor,updateVendor,getAllVendor,deleteVendor,generateVendorPdf,generateVendorCsv,getVenorById,getVendorExcel}= require('../controllers/vendors') //Importing Vendor controller.
// const {addVendor,updateVendor,getAllVendor,deleteVendor, getVenorById}= require('../controllers/vendors') //Importing Vendor controller.

const validationError = require('../middleware/validationError')
const {createVendorValidation,updateVendorValidation} = require('../validations/vendors')
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')


router.post('/',checkAuth,checkRolesAndPermission,createVendorValidation,validationError,wrapper(addVendor)) 
router.put('/:id',checkAuth,checkRolesAndPermission,updateVendorValidation,validationError,wrapper(updateVendor))
router.get('/',wrapper(checkAuth,checkRolesAndPermission,getAllVendor))
router.get('/get-vendor-pdf',checkAuth,checkRolesAndPermission,generateVendorPdf)
router.get('/get-vendor-csv',checkAuth,checkRolesAndPermission,generateVendorCsv)
router.get('/get-vendor-xlsx',checkAuth,checkRolesAndPermission,getVendorExcel)

router.get('/:id',checkAuth,wrapper(getVenorById))
router.delete('/:id',checkAuth,wrapper(deleteVendor))
module.exports = router;
