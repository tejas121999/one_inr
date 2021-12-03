var express = require('express');
var router = express.Router();


const {wrapper} = require('../utils/errorWrap')


const {addPartner,getPartner,deletePartner,getPartnerExcel,pdfOfPartner,updatePatner}= require('../controllers/partner') //Importing Vendor controller.

const validationError = require('../middleware/validationError')
const {partnerValidation} = require('../validations/partner')
const user = require('../utils/exportToCsv')


router.post('/',partnerValidation,validationError,wrapper(addPartner))
router.get('/partner-data',wrapper(getPartner))

router.get('/get-partner-excel',getPartnerExcel)
router.get('/get-partnerPdf',pdfOfPartner)

router.get('/get-all-users-csv',user.exportsToCsv)
router.put('/update-partner/:id',updatePatner)
router.delete('/delete-patner/:id',deletePartner)

module.exports = router;
