var express = require('express');
var router = express.Router();


const {wrapper} = require('../utils/errorWrap')


const {addPartner,getPartner,getPartnerExcel,pdfOfPartner}= require('../controllers/partner') //Importing Vendor controller.

const validationError = require('../middleware/validationError')
const {partnerValidation} = require('../validations/partner')
const user = require('../utils/exportToCsv')


router.post('/',partnerValidation,validationError,wrapper(addPartner))
router.get('/partner-data',getPartner)

router.get('/get-partner-excel',getPartnerExcel)
router.get('/get-partnerPdf',pdfOfPartner)

router.get('/get-all-users-csv',user.exportsToCsv)


module.exports = router;
