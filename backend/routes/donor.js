const express = require('express');
const router = express.Router()
const {addDonor,getAllDonor,getAllParentDetails,getDonorById,updateDonor,updateDonorBalance,deleteDonor,getAllUpcomingDonors,addDonerThroughExcel,exportsDonorCsv,generateDonorPdf,getDonorExcel,getAllUpcomingDonorsPdf,getAllUpcomingDonorsCsv,getAllUpcomingDonorsExcel,sendMailToDonors} =require('../controllers/donors')
const {wrapper} = require('../utils/errorWrap')
const validationError =require('../middleware/validationError')
const {donorValidation,updateDonorValidation,updateDonorBalanceValidation} =require('../validations/donors')
const checkAuth = require('../middleware/checkAuth')
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')


router.post('/',checkAuth,checkRolesAndPermission,donorValidation,validationError,wrapper(addDonor))
router.get('/',checkAuth,checkRolesAndPermission,wrapper(getAllDonor))
router.post('/get-Donor-Email',checkAuth,checkRolesAndPermission,wrapper(sendMailToDonors))
router.get('/donor-csv',checkAuth,checkRolesAndPermission,wrapper(exportsDonorCsv))
router.get('/donor-xlsx',checkAuth,checkRolesAndPermission,wrapper(getDonorExcel))
router.get('/donor-pdf',checkAuth,checkRolesAndPermission,wrapper(generateDonorPdf))
router.get('/upcoming-donor-pdf',checkAuth,checkRolesAndPermission,wrapper(getAllUpcomingDonorsPdf))
router.get('/upcoming-donor-csv',checkAuth,checkRolesAndPermission,wrapper(getAllUpcomingDonorsCsv))
router.get('/upcoming-donor-xlsx',checkAuth,checkRolesAndPermission,wrapper(getAllUpcomingDonorsExcel))
router.get('/upcoming',checkAuth,checkRolesAndPermission,wrapper(getAllUpcomingDonors))
router.get('/parents',checkAuth,checkRolesAndPermission,wrapper(getAllParentDetails))
router.get('/:id',checkAuth,checkRolesAndPermission,wrapper(getDonorById))
router.put('/:id',checkAuth,checkRolesAndPermission,updateDonorValidation,validationError,wrapper(updateDonor))
router.put('/balance/:id',checkAuth,checkRolesAndPermission,updateDonorBalanceValidation,validationError,wrapper(updateDonorBalance))
router.delete('/:id',checkAuth,checkRolesAndPermission,wrapper(deleteDonor))
router.post('/bulkDonor-upload',checkAuth,checkRolesAndPermission,addDonerThroughExcel)



module.exports = router