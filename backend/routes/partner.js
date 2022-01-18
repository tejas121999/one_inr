var express = require('express');
var router = express.Router();

const checkAuth = require('../middleware/checkAuth')
const {wrapper} = require('../utils/errorWrap')


const {addPartner,getPartner,deletePartner,getPartnerExcel,pdfOfPartner,updatePatner,exportPartnerCsv,getPartnerById}= require('../controllers/partner') //Importing Vendor controller.

const validationError = require('../middleware/validationError')
const {partnerValidation} = require('../validations/partner')
const user = require('../utils/exportToCsv')
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')

router.post('/',checkAuth,checkRolesAndPermission,partnerValidation,validationError,wrapper(addPartner))

router.get('/partner-data',checkAuth,checkRolesAndPermission,wrapper(getPartner))
router.get('/get-partner-csv',checkAuth,checkRolesAndPermission,wrapper(exportPartnerCsv))
router.get('/get-partnerById/:id',checkAuth,checkRolesAndPermission,getPartnerById)
router.get('/get-partner-excel',checkAuth,checkRolesAndPermission,getPartnerExcel)
router.get('/get-partnerPdf',checkAuth,checkRolesAndPermission,pdfOfPartner)
router.get('/get-all-users-csv',checkAuth,checkRolesAndPermission,user.exportsToCsv)
router.put('/update-partner/:id',checkAuth,checkRolesAndPermission,updatePatner)
router.delete('/delete-partner/:id',checkAuth,checkRolesAndPermission,deletePartner)



module.exports = router;
