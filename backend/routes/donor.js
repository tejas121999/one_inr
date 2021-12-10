const express = require('express');
const router = express.Router()
const {userRegister} = require('../controllers/authController')
const {addDonor,getAllDonor,getAllParentDetails,getDonorById,updateDonor,updateDonorBalance,deleteDonor,getAllUpcomingDonors,addDonerThroughExcel,exportsDonorCsv,generateDonorPdf,getDonorExcel} =require('../controllers/donors')
// const {addDonor,getAllDonor,getAllParentDetails,getDonorById,updateDonor,updateDonorBalance,deleteDonor,getAllUpcomingDonors,addDonerThroughExcel} =require('../controllers/donors')
const {wrapper} = require('../utils/errorWrap')
const validationError =require('../middleware/validationError')
const {donorValidation,updateDonorValidation,updateDonorBalanceValidation,} =require('../validations/donors')




router.post('/',donorValidation,validationError,wrapper(addDonor))
router.get('/',wrapper(getAllDonor))
router.get('/donor-csv',wrapper(exportsDonorCsv))
router.get('/donor-xlsx',wrapper(getDonorExcel))
router.get('/donor-pdf',wrapper(generateDonorPdf))
router.get('/upcoming',wrapper(getAllUpcomingDonors))
router.get('/parents',wrapper(getAllParentDetails))
router.get('/:id',wrapper(getDonorById))
router.put('/:id',updateDonorValidation,validationError,wrapper(updateDonor))
router.put('/balance/:id',updateDonorBalanceValidation,validationError,wrapper(updateDonorBalance))
router.delete('/:id',wrapper(deleteDonor))
router.post('/bulkDonor-upload',addDonerThroughExcel)



module.exports = router