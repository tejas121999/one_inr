const express = require('express');
const router = express.Router()
const {addDonor,getAllDonor,getAllParentDetails,getDonorById,updateDonor,updateDonorBalance,deleteDonor,getAllUpcomingDonors,addDonerThroughExcel,exportsDonorCsv,generateDonorPdf,getDonorExcel,getAllUpcomingDonorsPdf,getAllUpcomingDonorsCsv,getAllUpcomingDonorsExcel,sendMailToDonors} =require('../controllers/donors')
const {wrapper} = require('../utils/errorWrap')
const validationError =require('../middleware/validationError')
const {donorValidation,updateDonorValidation,updateDonorBalanceValidation} =require('../validations/donors')
const checkAuth = require('../middleware/checkAuth')



router.post('/',checkAuth,donorValidation,validationError,wrapper(addDonor))
router.get('/',checkAuth,wrapper(getAllDonor))
router.post('/get-Donor-Email',checkAuth,wrapper(sendMailToDonors))
router.get('/donor-csv',checkAuth,wrapper(exportsDonorCsv))
router.get('/donor-xlsx',checkAuth,wrapper(getDonorExcel))
router.get('/donor-pdf',checkAuth,wrapper(generateDonorPdf))
router.get('/upcoming-donor-pdf',checkAuth,wrapper(getAllUpcomingDonorsPdf))
router.get('/upcoming-donor-csv',checkAuth,wrapper(getAllUpcomingDonorsCsv))
router.get('/upcoming-donor-xlsx',checkAuth,wrapper(getAllUpcomingDonorsExcel))
router.get('/upcoming',checkAuth,wrapper(getAllUpcomingDonors))
router.get('/parents',checkAuth,wrapper(getAllParentDetails))
router.get('/:id',checkAuth,wrapper(getDonorById))
router.put('/:id',checkAuth,updateDonorValidation,validationError,wrapper(updateDonor))
router.put('/balance/:id',checkAuth,updateDonorBalanceValidation,validationError,wrapper(updateDonorBalance))
router.delete('/:id',checkAuth,wrapper(deleteDonor))
router.post('/bulkDonor-upload',checkAuth,addDonerThroughExcel)



module.exports = router
